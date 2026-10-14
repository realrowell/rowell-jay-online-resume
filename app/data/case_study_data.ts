import type { CaseStudy } from "@/types/case_study";

export const CaseStudyData: CaseStudy[] = [
    {
        slug: 'vendosync_study',
        project_slug: 'vendosync',
        title: 'CASE STUDY: VendoSync — Piso WiFi Vendo ISP Management System',
        description: "A comprehensive management information system for managing Piso WiFi Vendo ISP operations. The system includes customer and contract management, collection period management, user and collection team management, location management, WiFi Vendo asset management, support ticket management, and financial operations, including revenue recording, customer payables, customer payouts, operational expenses, and collection reports.The system provides dedicated portals for administrators, collectors, and technicians. Administrators can manage system modules, user accounts, logging, and active sessions management. Collectors can manage collections and revenue recording, and technicians can manage support tickets and field work. The system implements Role-Based Access Control (RBAC), Personally Identifiable Information (PII) encryption, user request logging, and graceful session expiration handling. It also utilizes Laravel's built-in security features and ORM for protection against CSRF and SQL injection.",
        url: '/case-studies/vendosync_study',
        featured_image: '/images/projects/vendosync-001.jpg',
        images: [
            '/images/projects/vendosync-001.jpg',
            '/images/projects/vendosync-002.jpeg',
            '/images/projects/vendosync-003.jpeg',
            '/images/projects/vendosync-004.jpeg',
            '/images/projects/vendosync-005.jpeg',
            '/images/projects/vendosync-006.jpeg',
        ],
        priority: 1
    },
    {
        slug: 'ezleave_study',
        project_slug: 'ezleave',
        title: 'CASE STUDY: EZLEAVE — Web-Based Leave Management System',
        description: "An employee leave management system developed to streamline the filing, approval, monitoring, and management of employee leaves and leave credits. The system provides separate portals for employees, HR staff, and System Admin. Employees can file leaves, monitor their leave status, and manage their accounts, while HR staff can manage employee records, leave credits, and leave applications. System Admin can manage leave types, employee positions, organizational units, and work locations. The system supports up to two levels of leave approval and implements Role-Based Access Control (RBAC) for access management. Laravel's security features and ORM are also utilized for CSRF and SQL injection protection.",
        url: '/case-studies/ezleave_study',
        featured_image: '/images/projects/lms-001.jpeg',
        images: [
            '/images/projects/lms-001.jpeg',
            '/images/projects/lms-002.jpeg',
            '/images/projects/lms-003.jpeg',
            '/images/projects/lms-004.jpeg',
            '/images/projects/lms-005.jpeg',
            '/images/projects/lms-006.jpeg',
            '/images/projects/lms-007.jpeg',
            '/images/projects/lms-008.jpeg',
            '/images/projects/lms-009.jpeg',
            '/images/projects/lms-010.jpeg'
        ],
        priority: 1
    },
    {
        slug: 'office-network-installation_study',
        project_slug: 'office-network-installation',
        title: 'CASE STUDY: Centralized Office Network & Resource Infrastructure',
        description: "Responsible for the installation, configuration, and maintenance of the office network infrastructure, including routers, switches, firewalls, and wireless access points. Ensured reliable connectivity and security for all employees, and provided technical support for network-related issues.",
        url: '/case-studies/office-network-installation_study',
        featured_image: '/images/projects/netins-001.jpeg',
        images: [
            '/images/projects/netins-001.jpeg',
            '/images/projects/netins-002.jpeg',
            '/images/projects/netins-003.jpeg',
            '/images/projects/netins-004.jpeg',
            '/images/projects/netins-005.jpeg',
            '/images/projects/netins-006.jpeg'
        ],
        priority: 2
    },
    {
        slug: 'event-attendance-monitoring-system_study',
        project_slug: 'event-attendance-monitoring-system',
        title: 'CASE STUDY: Event Attendance Monitoring System',
        description: "An event attendance monitoring system developed mainly to manage employee attendance for company events and activities. Each employee can be registered with dependents and assigned a unique QR code, which is used for attendance monitoring. The system provides employee and department management, event management, and QR-based attendance recording. It also implements PII encryption and utilizes Laravel's built-in security features and ORM for CSRF and SQL injection protection.",
        url: '/case-studies/event-attendance-monitoring-system_study',
        featured_image: '/images/projects/attendance-001.jpeg',
        images: [
            '/images/projects/attendance-001.jpeg', 
        ],
        priority: 3
    },
]