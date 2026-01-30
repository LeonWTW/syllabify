import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  const { name, term, assignmentCount } = course;
  return (
    <Link
      to="/schedule"
      className="block rounded-card border border-border bg-surface p-4 shadow-card no-underline text-ink hover:border-accent/40 hover:shadow-dropdown transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-ink">{name}</h3>
          <p className="text-sm text-ink-muted mt-0.5">{term}</p>
        </div>
        <span className="text-xs text-ink-subtle bg-surface-muted rounded-button px-2 py-1">
          {assignmentCount} assignments
        </span>
      </div>
    </Link>
  );
}
