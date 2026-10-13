import type { Project } from '@/types/project';

export const ProjectData: Project[] = [
    {
        slug: 'vendosync',
        title: 'VendoSync — MIS for Piso Wifi Vendo ISP',
        role: 'Full-stack Developer',
        status: 'Deployed & Maintained',
        description: "A comprehensive management information system for managing Piso WiFi Vendo ISP operations. The system includes customer and contract management, collection period management, user and collection team management, location management, WiFi Vendo asset management, support ticket management, and financial operations, including revenue recording, customer payables, customer payouts, operational expenses, and collection reports.The system provides dedicated portals for administrators, collectors, and technicians. Administrators can manage system modules, user accounts, logging, and active sessions management. Collectors can manage collections and revenue recording, and technicians can manage support tickets and field work. The system implements Role-Based Access Control (RBAC), Personally Identifiable Information (PII) encryption, user request logging, and graceful session expiration handling. It also utilizes Laravel's built-in security features and ORM for protection against CSRF and SQL injection.",
        date_deployed: new Date('06/05/2026'),
        case_study_url: '/case-studies/vendosync',
        featured_image: '/images/projects/vendosync-001.jpg',
        project_images: [
            '/images/projects/vendosync-001.jpg',
            '/images/projects/vendosync-002.jpeg',
            '/images/projects/vendosync-003.jpeg',
            '/images/projects/vendosync-004.jpeg',
            '/images/projects/vendosync-005.jpeg',
            '/images/projects/vendosync-006.jpeg',
        ],
        tags: [
            'Laravel',
            'PHP',
            'Vue.js',
            'MySQL',
            'Tailwind',
            'ShadCn'
        ],
        priority: 1
    },
    {
        slug: 'ezleave',
        title: 'EZLEAVE — Web-Based Leave Management System',
        role: 'Full-stack Developer',
        status: 'Deployed & Maintained',
        description: "An employee leave management system developed to streamline the filing, approval, monitoring, and management of employee leaves and leave credits. The system provides separate portals for employees, HR staff, and System Admin. Employees can file leaves, monitor their leave status, and manage their accounts, while HR staff can manage employee records, leave credits, and leave applications. System Admin can manage leave types, employee positions, organizational units, and work locations. The system supports up to two levels of leave approval and implements Role-Based Access Control (RBAC) for access management. Laravel's security features and ORM are also utilized for CSRF and SQL injection protection.",
        date_deployed: new Date('04/01/2024'),
        case_study_url: '/case-studies/ezleave',
        featured_image: '/images/projects/lms-001.jpeg',
        project_images: [
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
        tags: [
            'Laravel',
            'PHP',
            'jQuery',
            'MySQL',
            'Bootstrap',
            'Blade Templating',
            'JavaScript'
        ],
        priority: 1
    },
    {
        slug: 'rms',
        title: 'Recruitment Management System',
        role: 'Full-stack Developer',
        status: 'MVP Completed',
        description: "A recruitment management system developed to manage job postings, job applicants, and pre-employment requirements. The system includes an System Admin and HR portal for managing recruitment activities and a dedicated careers website where applicants can view available job postings. The system implements Role-Based Access Control (RBAC) for user authorization and encrypt Personal Identifiable Information (PII). Laravel's built-in security features and ORM are used to help protect the application against CSRF and SQL injection.", 
        featured_image: '/images/projects/rms-003.png',
        project_images: [
            '/images/projects/rms-001.png',
            '/images/projects/rms-002.png',
            '/images/projects/rms-003.png',
            '/images/projects/rms-004.png',
            '/images/projects/rms-005.png',
            '/images/projects/rms-006.png'
        ],
        tags: [
            'Laravel',
            'PHP',
            'jQuery',
            'MySQL',
            'JavaScript',
            'Bootstrap'
        ],
        priority: 1
    },
    {
        slug: 'activity-attendance-monitoring-system',
        title: 'Activity Attendance Monitoring System',
        role: 'Full-stack Developer',
        status: 'MVP Completed',
        description: "An event attendance monitoring system developed mainly to manage employee attendance for company events and activities. Each employee can be registered with dependents and assigned a unique QR code, which is used for attendance monitoring. The system provides employee and department management, event management, and QR-based attendance recording. It also implements PII encryption and utilizes Laravel's built-in security features and ORM for CSRF and SQL injection protection.",
        date_deployed: new Date('12/05/2025'),
        featured_image: '/images/projects/attendance-001.jpeg',
        project_images: [
            '/images/projects/attendance-001.jpeg'
        ],
        tags: [
            'Laravel',
            'PHP',
            'React',
            'MySQL',
            'Tailwind',
            'ShadCn'
        ],
        priority: 2
    },
    {
        slug: 'spapps-pos',
        title: 'Point-of-Sale with Inventory System',
        role: 'Full-stack Developer',
        status: 'Under Development',
        description: 'A high-performance SPA POS with Inventory system built for small to medium enterprise.', 
        featured_image: '/images/projects/spapps-pos-001.jpeg',
        project_images: [
            '/images/projects/spapps-pos-001.jpeg'
        ],
        tags: [
            'Laravel',
            'PHP',
            'Vue.js',
            'MySQL',
            'Tailwind',
            'ShadCn'
        ],
        priority: 2
    },
    {
        slug: 'bioseed-portalhub',
        title: 'Bioseed Portalhub',
        role: 'Web Developer',
        status: 'Deployed & Maintained',
        description: "A lightweight static portal developed to provide a centralized collection of links to the company's internal systems. The portal was designed to give users a simple and accessible entry point to the organization's various web-based internal applications.",
        date_deployed: new Date('04/05/2024'),
        featured_image: '/images/projects/portalhub-001.jpeg',
        project_images: [
            '/images/projects/portalhub-001.jpeg',
            '/images/projects/portalhub-002.jpeg',
            '/images/projects/portalhub-003.jpeg'
        ],
        tags: [
            'PHP',
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
        ],
        priority: 3
    },
    {
        slug: 'bioseed-official-website',
        title: 'Bioseed Official Website',
        role: 'Maintainer',
        status: 'Deployed & Maintained',
        description: "A corporate website developed and maintained using WordPress and Beaver Builder. The website includes an employee portal with company announcements and links to internal systems, providing employees with a centralized location to access internal resources.",
        date_deployed: new Date('11/05/2023'),
        featured_image: '/images/projects/brpi-001.jpeg',
        project_images: [
            '/images/projects/brpi-001.jpeg',
            '/images/projects/brpi-002.jpeg',
            '/images/projects/brpi-003.jpeg',
            '/images/projects/brpi-004.jpeg',
            '/images/projects/brpi-005.jpeg'
        ],
        tags: [
            'WordPress',
            'PHP',
            'Beaver Builder',
            'Custom Child Theme',
            'MySQL',
        ],
        priority: 3
    },
    {
        slug: 'office-network-installation',
        title: 'Centralized Office Network & Resource Infrastructure',
        role: 'Lead Infrastructure Specialist',
        status: 'Deployed & Maintained',
        description: "Responsible for the installation, configuration, and maintenance of the office network infrastructure, including routers, switches, firewalls, and wireless access points. Ensured reliable connectivity and security for all employees, and provided technical support for network-related issues.",
        date_deployed: new Date('03/05/2026'),
        case_study_url: '/case-studies/office-network-installation',
        featured_image: '/images/projects/netins-001.jpeg',
        project_images: [
            '/images/projects/netins-001.jpeg',
            '/images/projects/netins-002.jpeg',
            '/images/projects/netins-003.jpeg',
            '/images/projects/netins-004.jpeg',
            '/images/projects/netins-005.jpeg',
            '/images/projects/netins-006.jpeg'
        ],
        tags: [
            'TP-Link Omada',
            'Printer Server',
            'File Server',
            'Network Security',
            'MAC-based Access Control',
        ],
        priority: 3
    },
    {
        slug: 'earthquake-visualizer',
        title: 'Earthquake Visualizer JS',
        role: 'Web Developer',
        status: 'Deployed',
        description: "Lightweight JS Web App displaying seismic data based on provided data set converted to JSON format.",
        date_deployed: new Date('07/05/2026'),
        featured_image: '/images/projects/earthquake-001.jpeg',
        project_images: [
            '/images/projects/earthquake-001.jpeg',
            '/images/projects/earthquake-002.png',
            '/images/projects/earthquake-003.png',
        ],
        tags: [
            'JavaScript',
            'HTML',
            'CSS',
            'REST API',
            'Leaflet.js',
        ],
        priority: 3
    },
]