# CASE STUDY: EZLEAVE — Web-Based Leave Management System

> A secure, role-based leave management platform built for a local agriculture company to support remote field employees and streamline HR workflows.

* **Role:** Full-stack Developer
* **Status:** Deployed and Maintained
* **Users:** Admin • HR Staff • Employee (with Supervisor/Manager approval)
* **Tech Stack:** Laravel • PHP • MySQL • jQuery • Bootstrap / Custom CSS

---

## Project Overview
EZLEAVE is a custom-built leave management system developed to streamline the employee leave application and approval workflow for Bioseed Research Philippines, Inc.. This web-based system provides a structured and transparent leave processing experience for employees, supervisors, and HR staff.

### Objectives
* Centralize and digitize leave applications
* Automate approval workflows
* Improve accuracy of leave tracking
* Provide HR with efficient monitoring and reporting tools

---

## Solution Overview
The system provides an online leave application process, role-based approval workflows, HR management tools, leave balance management, and real-time leave records accessible through a web interface.

### Key Features
* **Employee Portal:** Apply for leave, view leave balance, and track application history.
* **Approval Dashboard:** Manager & supervisor approval flows with real-time notifications.
* **HR and Admin Tools:** Policy management, leave balance management, leave application tracking, employee & user management, and reporting.
* **Security & Scale:** Built on a secure, role-authenticated Laravel architecture for scalable growth.

---

## System Workflow
`Employee` (Submits leave request) **→** `Supervisor/Manager` (Approves/Rejects) **→** `System` (Updates leave balances) **→** `HR` (Monitors & logs)

---

## Challenges & Solutions
* **Field employees with intermittent access:** Designed a lightweight, highly responsive, and mobile-friendly UI.
* **Varying approval chains:** Implemented configurable, per-employee approval workflow rules.
* **Avoiding Weekend, Holiday, and Fiscal Year overlap:** Built strict client-side + server-side validation with conflict-check rules.

---

## UI & Design Notes
Initial UI used standard Bootstrap defaults. It was subsequently redesigned with rounded, Material-inspired components to improve readability, action clarity, and visual hierarchy.

---

## Outcome & Impact
* Significantly reduced overall leave processing time
* Minimized HR administrative workload
* Enhanced transparency between employees and HR
* Eliminated manual paperwork and lost physical records
* Increased organizational trust between the company and remote employees

---

## Key Learnings
* Designing robust, enterprise-grade workflow systems
* UI/UX iteration driven directly by user feedback and field pain points
* Enhancing interactivity with vanilla JavaScript and jQuery
* Fine-grained role-based access control (RBAC) in Laravel
* Efficient relational database schema design for complex date/status tracking