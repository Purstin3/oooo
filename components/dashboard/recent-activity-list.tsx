"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Grape as Graph, AlertTriangle, Zap, Bell, BarChart, Filter, Edit } from "lucide-react";

// Mock data for recent activities
const recentActivities = [
  {
    id: 1,
    type: "insight",
    title: "New insight generated",
    offer: "Summer Sale Campaign",
    message: "Performance increased by 3.5%",
    time: "2 hours ago",
    icon: Zap,
    iconColor: "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30",
    user: {
      name: "System",
      image: null,
      initials: "AI",
    },
  },
  {
    id: 2,
    type: "alert",
    title: "Performance alert",
    offer: "Holiday Special",
    message: "Significant drop detected (-2.1%)",
    time: "4 hours ago",
    icon: AlertTriangle,
    iconColor: "text-red-500 bg-red-100 dark:bg-red-900/30",
    user: {
      name: "System",
      image: null,
      initials: "AI",
    },
  },
  {
    id: 3,
    type: "update",
    title: "Offer updated",
    offer: "New Product Launch",
    message: "Creative assets were updated",
    time: "Yesterday",
    icon: Edit,
    iconColor: "text-blue-500 bg-blue-100 dark:bg-blue-900/30",
    user: {
      name: "Alex Morgan",
      image: null,
      initials: "AM",
    },
  },
  {
    id: 4,
    type: "report",
    title: "Weekly report generated",
    offer: "All Offers",
    message: "Performance summary is ready",
    time: "2 days ago",
    icon: BarChart,
    iconColor: "text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30",
    user: {
      name: "System",
      image: null,
      initials: "AI",
    },
  },
  {
    id: 5,
    type: "benchmark",
    title: "Benchmark updated",
    offer: "Customer Loyalty Program",
    message: "New industry benchmarks available",
    time: "3 days ago",
    icon: Graph,
    iconColor: "text-green-500 bg-green-100 dark:bg-green-900/30",
    user: {
      name: "System",
      image: null,
      initials: "AI",
    },
  },
];

export function RecentActivityList() {
  return (
    <ScrollArea className="h-[290px] pr-4">
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${activity.iconColor}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-medium leading-none">
                {activity.title}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">{activity.offer}:</span> {activity.message}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Avatar className="h-5 w-5">
                  <AvatarImage src={activity.user.image || ""} alt={activity.user.name} />
                  <AvatarFallback className="text-[10px]">{activity.user.initials}</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground">{activity.user.name} · {activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}