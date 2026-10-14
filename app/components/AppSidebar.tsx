import { useNavigate, useLocation } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  IconUser,
  IconBriefcase,
  IconSchool,
  IconAward,
  IconFolder,
  IconFileText,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const navItems = [
  { title: "Introduction", url: "/", icon: IconUser },
  { title: "Work Experience", url: "/experience", icon: IconBriefcase },
  { title: "Education", url: "/education", icon: IconSchool },
  { title: "Trainings & Certificates", url: "/trainings", icon: IconAward },
  { title: "Projects", url: "/projects", icon: IconFolder },
  { title: "Case Studies", url: "/case-studies", icon: IconFileText },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar className="border-r border-border/60 bg-sidebar/95 backdrop-blur-md">
      {/* Profile Header */}
      <SidebarHeader className="flex flex-col items-center justify-center px-4 pt-8 pb-6 text-center">
        <div className="relative mb-3 group">
          <div className="size-28 rounded-2xl overflow-hidden border-2 border-border/80 shadow-md ring-4 ring-muted/50 transition-all duration-300 group-hover:scale-105 group-hover:ring-primary/20">
            <img
              src="/images/profile_image.webp"
              alt="Rowell Jay Real"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* Status Indicator Badge */}
          <span className="absolute bottom-1 right-1 size-3.5 rounded-full bg-emerald-500 ring-2 ring-background" title="Available for work" />
        </div>

        <div className="space-y-1">
          <h2 className="text-base font-bold tracking-tight text-foreground">
            Rowell Jay Real
          </h2>
          <p className="text-xs font-medium text-muted-foreground">
            Full-Stack Web Developer
          </p>
        </div>
      </SidebarHeader>

      {/* Main Navigation */}
      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navItems.map((item) => {
                const isActive =
                  item.url === "/case-studies"
                    ? location.pathname === item.url ||
                      location.pathname.startsWith(`${item.url}/`)
                    : location.pathname === item.url;

                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={isActive}
                      onClick={() => navigate(item.url)}
                      className={`
                        w-full justify-start gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                        ${
                          isActive
                            ? "bg-primary text-primary-foreground font-semibold shadow-sm hover:bg-primary/90 hover:text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                        }
                      `}
                    >
                      <Icon className={`size-4 shrink-0 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer / Quick Contact Links */}
      <SidebarFooter className="p-4 border-t border-border/50">
        <div className="flex items-center justify-center gap-3 text-muted-foreground">
          <a
            href="https://github.com/realrowell"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <IconBrandGithub className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rowell-jay-real-9a6293213/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin className="size-4" />
          </a>
          <a
            href="mailto:realrowell@gmail.com"
            className="p-2 rounded-md hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <IconMail className="size-4" />
          </a>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}