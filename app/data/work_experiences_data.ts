import type { WorkExperience } from "@/types/work_experience";

export const WorkExperiencesData: WorkExperience[] = [
    {
        logo_path: '/logos/syncpro.svg',
        position: 'Freelance Full-stack Web Developer',
        company: 'SyncPro - IT Solutions',
        date_started: new Date('03/15/2026'),
        date_ended: 'Present',
        description: [
            'Design, develop, and maintain responsive custom business websites and web-based systems using Laravel, PHP, MySQL, JavaScript, Vue.js, React, HTML, CSS, Bootstrap, and Tailwind CSS.',
            'Manage full lifecycle project planning, application deployment, hosting (cPanel, aaPanel, Cloudflare), domains, DNS, and website maintenance.',
            'Communicate directly with clients to gather requirements, provide technical recommendations, and deliver post-launch support.'
        ]
    },
    {
        logo_path: '/logos/bioseed.svg',
        position: 'IT Associate',
        company: 'Bioseed Research Philippines, Inc.',
        date_started: new Date('07/08/2022'),
        date_ended: new Date('03/15/2026'),
        description: [
            'Developed internal web applications, including a dedicated Leave Management System and Attendance Monitoring System, to streamline HR and operational workflows.',
            'Maintained and enhanced the company website to ensure peak performance, usability, and reliability.',
            'Served as IT Officer-in-Charge, providing technical support for hardware, software, and network issues in the absence of the IT Technical Lead.',
            'Operated as Technical Director for company events, and designed marketing materials and promotional multimedia content aligned with company branding.'
        ]
    },
    {
        logo_path: '/logos/suroy.jpg',
        position: 'Freelance Photographer & Videographer',
        company: 'Suroy Films and Photography',
        date_started: new Date('03/15/2020'),
        date_ended: new Date('11/15/2023'),
        description: [
            'Captured, edited, and enhanced photo and video content for events and customized client projects'
        ]
    },
    { 
        position: 'OJT - CCTV Technician',
        company: 'Design Automation Technology Expert',
        date_started: new Date('12/15/2017'),
        date_ended: new Date('02/15/2018'),
        description: [
            'Assisted in the troubleshooting, installation, and technical setup of CCTV systems.'
        ]
    },
] 