import React, { type ReactNode } from "react";

import {
  ChevronRight,
  ChevronLeft,
  LifeBuoy,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import secIcon2 from "@/assets/images/secIcon2.png";
import secLogo from "@/assets/images/secLogo.png";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { useLocation } from "react-router";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

interface SideNavProps {
  children: ReactNode;
  navElements: {
    Icon?: React.ElementType;
    url: string;
    label: string;
    open: boolean;
  }[];
}

const NavElement = ({
  Icon,
  url,
  label,
  open,
}: {
  Icon?: React.ElementType;
  url: string;
  label: string;
  open: boolean;
}) => {
  const { pathname } = useLocation();

  return (
    <div className="w-full px-2">
      <Link className="w-full" to={url}>
        <div
          className={`w-full px-2 flex items-center gap-2 justify-start rounded-md h-10 ${
            pathname === url ? "bg-[#F5F5F5]" : ""
          }`}
        >
          {Icon && <Icon className=" h-4 w-4" />}
          {open && label}
        </div>
      </Link>
    </div>
  );
};

const SideNav: React.FC<SideNavProps> = ({ children, navElements }) => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <div>
      <SidebarProvider>
        <Sidebar
          className="relative select-none !cursor-default !bg-white
             !block md:!flex
             transition-[width] duration-300
             data-[state=collapsed]:!w-16
             data-[state=expanded]:!w-64"
          collapsible="icon"
        >
          <Button
            onClick={toggleSidebar}
            className="absolute top-3 right-0 translate-x-1/2 rounded-full h-8 w-8 bg-white shadow-md hover:bg-white text-black cursor-pointer"
          >
            {open ? (
              <ChevronLeft className="w-8 h-8" />
            ) : (
              <ChevronRight className="w-8 h-8" />
            )}
          </Button>

          <SidebarHeader>
            <img src={open ? secLogo : secIcon2} className="h-10 w-fit" />
          </SidebarHeader>

          <SidebarContent className="flex flex-col gap-2 mt-6">
            {navElements.map((ele) => (
              <NavElement
                url={ele.url}
                label={ele.label}
                Icon={ele.Icon}
                open={open}
              />
            ))}
          </SidebarContent>

          <SidebarFooter className=" w-full">
            <NavElement
              url="/support"
              label="Support"
              Icon={LifeBuoy}
              open={open}
            />
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className=" bg-[#F9FAFA]">{children}</SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default SideNav;

