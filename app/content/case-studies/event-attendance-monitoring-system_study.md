
> A secure, QR-based attendance tracking platform built to streamline registration and manage employee and dependent records during corporate activities.

* **Role:** Full-stack Developer
* **Status:** MVP Completed (Usable & Actively Used in Production)
* **Users:** Event Staff • Employees • Administrators
* **Tech Stack:** Laravel 11 • React • Inertia.js • Tailwind CSS • Shadcn UI

---

## Project Overview
The Event Attendance Monitoring System was custom-developed as a Minimum Viable Product (MVP) to modernize and accelerate attendance management during major company events. The platform was launched during an annual company holiday event, successfully demonstrating its core value by transitioning manual registration into an automated, digitized workflow.

### The Problem
Recording attendance for large company events was slow, inefficient, and prone to errors. Event staff previously had to manually search through printed or digital lists for employee names, guess spellings, and account for accompanying dependents (spouses and children). This created long registration queues and led to potential inaccuracies in attendance logging and historical reporting.

### Objectives
* **Accelerate Registration:** Drastically reduce search and entry times when logging employee attendance.
* **Eliminate Manual Errors:** Automate profile retrieval to prevent accidental double-entry or incorrect records.
* **Manage Dependents:** Accurately log attendance for employees alongside their registered family members.
* **Maintain Event History:** Organize and retain records per specific company event for long-term tracking and retrieval.
* **Ensure Data Privacy:** Protect sensitive Personally Identifiable Information (PII) using robust encryption and framework security.

---

## Solution Overview
The system utilizes a pre-registration model where each employee is assigned a unique QR code. When an employee arrives at an event, registration staff scan the code to instantly pull up the employee's pre-registered record along with their dependents, providing a simple checkbox interface to record attendance.

### Key Features
* **QR-Based Profile Retrieval:** Instant scanning workflow that loads pre-registered employee profiles without manual search.
* **Dependent Tracking:** Simple check-in mechanism that manages attendance for both employees and their linked dependents (spouses and children).
* **Event-Specific Recordkeeping:** Structured database architecture that stores attendance records grouped per event or activity for long-term historical reference.
* **Data Security & Privacy:** Built-in PII encryption combined with Laravel's native ORM protections against CSRF and SQL injection.

---

## Current Status & Future Scope
The platform is currently operating in an MVP state. While fully functional and actively used for live company events, further development is planned to expand its administrative features, analytics dashboards, and self-service options. 

---

## Outcome & Impact
* **Drastically Reduced Wait Times:** QR scanning eliminated manual list searching, significantly speeding up registration queues.
* **High Operational Accuracy:** Pre-registered data and scanning workflows removed guesswork and prevented manual entry errors.
* **Proven Production Utility:** Demonstrated immediate value during its initial deployment, proving that an MVP can deliver substantial operational improvements. 

---

## What I Learned
* **Adopting Modern Stack Ecosystems:** First project built using React, Tailwind CSS, and Shadcn UI to create a responsive, polished user experience.
* **Exploring Framework Boilerplates:** Gained practical experience implementing the Laravel 11 React project template with Inertia.js.
* **Applying Data Security Practices:** Implemented PII encryption to protect employee and dependent data within a production application. 