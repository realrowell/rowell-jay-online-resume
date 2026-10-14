
- **Role:** Lead Infrastructure Specialist
- **Status:** Deployed & Maintained
- **Users:** Admin, Staff/Users, Guests

## Project Overview

This project involved the design and implementation of a high-performance local area network (LAN) for a professional office. The primary goal was to eliminate manual data transfers and fragmented printing by establishing a centralized environment for shared resources.

## The Problem

The office relied on a "sneakernet" workflow where employees manually transferred files via USB drives or via email, and relied only on one computer to print the documents. This led to version control issues, security risks, and significant operational delays.

## Objectives

- **Centralize File Storage:** Implement a dedicated server to ensure a "single source of truth" for all company documents.
- **Automate Resource Sharing:** Enable wired network printing for all authorized staff.
- **Secure Data Access:** Establish role-based permissions for sensitive files.
- **Eliminate Downtime:** Replace unstable consumer-grade hardware with enterprise-level equipment.
- **Cost-Efficiency & ROI:** Deliver a robust, enterprise-grade infrastructure within a strictly limited project budget.
- **Future-Proof Security:** Lay the technical foundation for isolated guest connectivity without compromising internal data.

## Solution Overview

The system architecture utilizes a structured star topology designed for maximum reliability and ease of maintenance. At the core, the TP-Link ER605 serves as the primary gateway, handling all routing and security protocols. To meet the client’s strict budget requirements while achieving the objective of centralized resource sharing, one high-performance workstation was configured to serve as a dual-role File and Print Server.

A key component of this solution was the intentional selection of the Omada ER605, which supports VLAN (Virtual Local Area Network) tagging. This ensures that as the client grows, the network can be segmented to provide secure internet access for guests while keeping the internal private network and the sensitive data completely invisible to outsiders.

## Key Features

> ### Scalable Core Architecture

Use of a dedicated 8-port gigabit switch to preserve router resources and facilitate future departmental growth.

> ### Optimized Resource Allocation

Configured a dedicated workstation to handle concurrent file-sharing (SMB) and print-server requests, eliminating the need for expensive dedicated NAS hardware.

> ### Centralized Connectivity

A structured star layout ensures that if one workstation or cable fails, the rest of the network remains operational and connected to the server.

## Infrastructure Evolution

Originally, the office functioned as a collection of isolated workstations with no unified communication layer. The transition involved moving away from a fragmented "sneakernet" environment toward a structured star topology.

Instead of connecting all devices directly to the router, I integrated a TP-Link TL-SG108 8-port unmanaged switch as the primary distribution layer. This strategic move ensures that the ER605 core router is not congested with local traffic, while simultaneously providing the client with four additional open ports for immediate future expansion. To maintain the project's strict budget, I reconfigured the most powerful workstation to serve a dual purpose as both a daily terminal and the network’s central File and Print Server.

## Network Workflow

**Workstation Computers → TL-SG108 Switch → PC 1 (Central Server) / ER605 Gateway → Requested Resource / Internet**

## Challenges & Solutions

- **Limited Hardware Budget:** Needed a server and network but had no budget for a dedicated NAS or enterprise-grade server rack.  
  **Solution:** Repurposed the most robust workstation into a secure, always-on resource hub for the entire team.
- **Port Exhaustion Risk:** Using the router alone would limit expansion and increase the CPU load on the gateway.  
  **Solution:** Integrated a high-speed unmanaged switch to handle local traffic switching, keeping the ER605 focused on secure routing and internet management.
- **Future Expansion:** The client might add more workstations in the future.  
  **Solution:** The star topology and available switch ports allow for "plug-and-play" expansion without disrupting the existing system architecture.
- **Potential Security Risks from Future Guests:** The client anticipates needing guest WiFi, which could expose the private file server to unauthorized users.  
  **Solution:** Configured the ER605 Gateway to support VLAN segmentation. This allows for the future deployment of an isolated Guest Network that provides internet-only access, physically and logically separating guest traffic from the business’s internal data and shared resources.

## My Role

Lead Infrastructure Specialist responsible for the full lifecycle, including hardware procurement, network topology design, server configuration, and the integration of centralized peripherals.

## Tech Stack

- **Networking Hardware:** TP-Link Omada ER605 Router, TP-Link TL-SG108.
- **Storage & Sharing:** Dedicated File Server (SMB protocol) and Printer Server.
- **Infrastructure:** Cat6 Structured Cabling for high-speed data backbone.
- **Management:** TP-Link Omada ER605 (Standalone mode) for reduced hardware cost.

## Outcome and Impact

- **Secure Scalability:** The network is now ready for the immediate implementation of secure Guest WiFi through VLAN tagging.
- **High-Value Implementation:** Provided the client with a 100% stable network and centralized server while staying under the original budget.
- **Operational Stability:** Reduced the technical load on the gateway, resulting in faster internal file transfer speeds and consistent printing uptime.

## What I Learned

- Optimizing network traffic for high-volume file sharing.
- Configuring and troubleshooting multi-user print environments.
- Managing the physical and logical security of centralized office hardware.
- Network segmentation at an early stage will help the admin in the future. 
