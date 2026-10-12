import { useNavigate, useLocation } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AspectRatio } from "@/components/ui/aspect-ratio" 

const navItems = [
  { title: "Introduction", url: "/" },
  { title: "Work Experience", url: "/experience" },
  { title: "Education", url: "/education" },
  { title: "Trainings and Certificates", url: "/trainings" },
  { title: "Projects", url: "/projects" },
  { title: "Case Studies", url: "/case-studies" },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-10">
        <AspectRatio ratio={16 / 9} className="max-w-sm rounded-lg bg-muted w-40 h-40 shadow-xl flex items-center justify-center">
          <img src="/images/profile_image.webp" alt="Profile Photo"></img>
        </AspectRatio>
      </SidebarHeader>
      <SidebarContent className="px-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    isActive={location.pathname === item.url}
                    onClick={() => navigate(item.url)}
                  >
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}