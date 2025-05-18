"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BarChart3, 
  Layers, 
  ListChecks, 
  Settings, 
  Target, 
  Users, 
  Menu,
  X,
  Bell,
  FileBarChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const mainNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: BarChart3,
    },
    {
      title: "Offers",
      href: "/offers",
      icon: Target,
    },
    {
      title: "Ad Tracking",
      href: "/ad-tracking",
      icon: Layers,
    },
    {
      title: "Tasks",
      href: "/tasks",
      icon: ListChecks,
    },
    {
      title: "Reports",
      href: "/reports",
      icon: FileBarChart,
    }
  ];

  const utilityNavItems = [
    {
      title: "Team",
      href: "/team",
      icon: Users,
    },
    {
      title: "Notifications",
      href: "/notifications",
      icon: Bell,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="flex h-14 items-center border-b px-4 lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[300px] pr-0">
          <div className="px-1">
            <div className="flex items-center justify-between">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 font-semibold"
                onClick={() => setOpen(false)}
              >
                <BarChart3 className="h-6 w-6 text-primary" />
                <span>OfferTracker Pro</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="my-4 h-[1px] bg-border" />
            <nav className="grid gap-2">
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  )}
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>
            <div className="my-4 h-[1px] bg-border" />
            <nav className="grid gap-2">
              {utilityNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  )}
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4 border-t">
            <ThemeToggle isCollapsed={false} />
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/dashboard" className="ml-2 flex items-center gap-2 font-semibold">
        <BarChart3 className="h-6 w-6 text-primary" />
        <span>OfferTracker Pro</span>
      </Link>
    </div>
  );
}