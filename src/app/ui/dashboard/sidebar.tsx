import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter
} from "@/components/ui/sidebar";
import { LayoutDashboard, Boxes, ShoppingCart, Tags } from "lucide-react";
import Link from "next/link";
const links = [
  {
    name: "Overview",
    url: "/dashboard/overview",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    url: "/dashboard/products",
    icon: Boxes,
  },
  {
    name: "Orders",
    url: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    name: "Categories",
    url: "/dashboard/categories",
    icon: Tags,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />

        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {links.map((link) => (
              <SidebarMenuItem key={link.name}>
                <SidebarMenuButton asChild>
                  <Link href={link.url}>
                    <link.icon />
                    <span>{link.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>

        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
