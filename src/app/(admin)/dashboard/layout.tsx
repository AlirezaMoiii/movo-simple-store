import { cookies } from "next/headers";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/ui/dashboard/sidebar";

async function layout({ children }: { children: React.ReactNode }) {


  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  console.log(defaultOpen)
  console.log(cookieStore)

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="hidden md:block">
        <SidebarTrigger />
        {children}
      </div>
      <div className="block md:hidden">
        <h1>
          Admin dashboard is not avaliable on mobile devices. Please use a large
          screen device like laptop.
        </h1>
      </div>
    </SidebarProvider>
  );
}

export default layout;
