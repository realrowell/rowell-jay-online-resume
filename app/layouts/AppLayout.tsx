import { TooltipProvider } from "@/components/ui/tooltip"
import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar"; 

export default function AppLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 overflow-y-auto bg-gray-100 min-h-screen">
                {/* SidebarTrigger only appears on mobile by default in shadcn, or you can style it to float */}
                <div className="p-4 md:hidden">
                    <SidebarTrigger />
                </div>
                <div className="p-6 md:p-10 mx-auto">
                    {/* Outlet renders the matched child route (e.g., Introduction, Education) */}
                    <Outlet />
                </div>
            </main>
        </SidebarProvider>
    );
}