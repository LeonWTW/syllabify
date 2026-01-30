import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import * as api from '../api/client';

const TOKEN_KEY = 'syllabify_token';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [securitySetupDone, setSecuritySetupDone] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const loadUser = useCallback(async t => {
    const data = await api.me(t);
    if (data) {
      setUser({ username: data.username });
      setSecuritySetupDone(!!data.security_setup_done);
      return true;
    }
    return false;
  }, []);

  useEffect(() => {
    const t = localStorage.getItem(TOKEN_KEY);
    if (!t) {
      setIsLoading(false);
      return;
    }
    setToken(t);
    loadUser(t).then(ok => {
      if (!ok) {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setUser(null);
        setSecuritySetupDone(true);
      }
      setIsLoading(false);
    });
  }, [loadUser]);

  const login = useCallback(async (username, password) => {
    const data = await api.login(username, password);
    const t = data.token;
    localStorage.setItem(TOKEN_KEY, t);
    setToken(t);
    setUser({ username: data.username });
    setSecuritySetupDone(!!data.security_setup_done);
    return { security_setup_done: !!data.security_setup_done };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
    setSecuritySetupDone(true);
  }, []);

  const completeSecuritySetup = useCallback(
    async questions => {
      const t = token || localStorage.getItem(TOKEN_KEY);
      if (!t) return;
      await api.securitySetup(t, questions);
      setSecuritySetupDone(true);
    },
    [token]
  );

  const value = {
    user,
    token,
    securitySetupDone,
    isLoading,
    login,
    logout,
    completeSecuritySetup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
