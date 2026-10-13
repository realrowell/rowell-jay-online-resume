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
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
        <AspectRatio
          ratio={16 / 9}
          className="flex h-40 w-40 max-w-sm items-center justify-center rounded-lg bg-muted shadow-xl"
        >
          <img
            src="/images/profile_image.webp"
            alt="Profile Photo"
            className="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </SidebarHeader>

      <SidebarContent className="px-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive =
                  item.url === "/case-studies"
                    ? location.pathname === item.url ||
                      location.pathname.startsWith(`${item.url}/`)
                    : location.pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={isActive}
                      onClick={() => navigate(item.url)}
                    >
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}