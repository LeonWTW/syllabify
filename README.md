# Syllabify

## Project Overview

Syllabify is a web-based academic planning tool designed to help university students transform course syllabi into structured, personalized study schedules. While platforms like Canvas provide assignment due dates, they do not help students plan when to work on assignments, how much time to allocate to each task, or how to balance workloads across multiple courses. Syllabify addresses this gap by extracting key academic information from syllabi and using heuristics to generate balanced study plans that integrate directly with students' calendars.

---

## Problem Statement

Course syllabi are the primary source of academic expectations for students, but they vary widely in format and structure (PDFs, Canvas pages, plain text). Students are often left to manually interpret deadlines, estimate workload, and plan their time across multiple courses. This frequently leads to poor time management, workload imbalance, and last-minute stress.

---

## Solution Overview

The system supports multiple syllabus formats, including uploaded PDFs and pasted text (e.g., Canvas syllabus pages). After parsing and extracting important information such as assignments, exams, and course schedules, Syllabify allows students to review and manually edit the extracted data to ensure accuracy. Once confirmed, the system generates a proposed study schedule that allocates time blocks based on assignment complexity, deadlines, and user preferences. The student remains in full control and must approve any generated schedule before it is finalized or exported.

Syllabify is designed as a client-server web application. The frontend provides interfaces for uploading syllabi, reviewing parsed data, previewing schedules, and managing multiple courses. The backend handles syllabus parsing, scheduling heuristics, validation, persistence, and integrations such as calendar exports. The system emphasizes transparency, user confirmation, and incremental refinement rather than fully automated decision-making.

---

## Key Features (Planned)

- Syllabus upload (PDF and text-based)
- Heuristic-based syllabus parsing
- Manual editing and validation of extracted data
- Support for multiple courses per user
- Study schedule generation with conflict detection
- Calendar export (Google Calendar / ICS)
- User preferences for work hours and days
- Responsive web interface

---

## Architecture Overview

Syllabify follows a client-server architecture:

- **Frontend**: Provides interfaces for uploading syllabi, reviewing parsed data, previewing schedules, and managing multiple courses
- **Backend**: Handles syllabus parsing, scheduling heuristics, validation, persistence, and integrations such as calendar exports
- **Database**: Relational database (3NF) storing users, courses, assignments, and schedules
- **Integrations**: Calendar export services (e.g., Google Calendar, ICS files)

This project is developed incrementally using Scrum, with early delivery of a minimum viable product (MVP) and continuous improvement through CI/CD. The final system demonstrates software engineering best practices, including modular architecture, RESTful APIs, database normalization, version control discipline, and user-centered design.

---

## Tech Stack

### Frontend

- React
- Tailwind CSS

### Backend

- Python
- FastAPI or Flask
- RESTful APIs

### Database

- MySQL (3NF schema)

### Tooling

- Git & GitHub
- GitHub Actions (CI/CD)
- Jira (Scrum-based project management)

---

## Installation

<!-- Installation instructions will be added as the project is developed -->
<!-- This section will include: -->
<!-- - Prerequisites (Node.js, Python, MySQL versions) -->
<!-- - Frontend setup steps -->
<!-- - Backend setup steps -->
<!-- - Database configuration -->
<!-- - Environment variable setup -->
<!-- - Running the development servers -->

---

## Development Workflow

- `dev` branch: Active development and integration
- `main` branch: Stable, production-ready code
- Direct pushes to `main` are blocked
- All releases are merged into `main` via pull requests

---

## Project Context

This project is developed as part of **CS 422 / CS 522 – Software Methodologies I** at the University of Oregon. The goal is to apply software engineering principles including requirements analysis, system design, iterative development, and team collaboration.

---

## Team

- Andrew Martin  
- Leon Wong  
- Saint George Aufranc  
- Kenny Nguyen  

---

## Status

Under active development  
Initial MVP will be delivered early and expanded incrementally through CI/CD.
