"use client";

import { Badge } from "@/components/ui/badge";
import { BadgeDelta } from "@/components/ui/badge-delta";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  ChevronRight,
  FileBarChart,
  MoreHorizontal,
  Star,
  Zap,
} from "lucide-react";
import { Facebook, Instagram, TikTok } from "./platform-icons";
import Link from "next/link";

// Mock data for offers
const offerData = [
  {
    id: "OF-2023-001",
    name: "Summer Sale Campaign",
    status: "active",
    score: 92,
    change: 3.5,
    deltaType: "increase",
    platform: "facebook",
    category: "e-commerce",
    lastUpdated: "2 hours ago",
    insights: 3,
    tasks: 2,
  },
  {
    id: "OF-2023-002",
    name: "New Product Launch",
    status: "active",
    score: 88,
    change: 1.2,
    deltaType: "moderateIncrease",
    platform: "instagram",
    category: "product",
    lastUpdated: "4 hours ago",
    insights: 2,
    tasks: 1,
  },
  {
    id: "OF-2023-003",
    name: "Holiday Special",
    status: "paused",
    score: 75,
    change: -2.1,
    deltaType: "decrease",
    platform: "facebook",
    category: "seasonal",
    lastUpdated: "1 day ago",
    insights: 1,
    tasks: 3,
  },
  {
    id: "OF-2023-004",
    name: "Brand Awareness Campaign",
    status: "active",
    score: 85,
    change: 0.8,
    deltaType: "moderateIncrease",
    platform: "tiktok",
    category: "branding",
    lastUpdated: "3 hours ago",
    insights: 2,
    tasks: 0,
  },
  {
    id: "OF-2023-005",
    name: "Customer Loyalty Program",
    status: "active",
    score: 90,
    change: 2.3,
    deltaType: "increase",
    platform: "facebook",
    category: "loyalty",
    lastUpdated: "5 hours ago",
    insights: 4,
    tasks: 1,
  },
  {
    id: "OF-2023-006",
    name: "Flash Sale Event",
    status: "scheduled",
    score: 0,
    change: 0,
    deltaType: "unchanged",
    platform: "instagram",
    category: "e-commerce",
    lastUpdated: "1 day ago",
    insights: 0,
    tasks: 5,
  },
];

export function OffersGrid() {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-4 w-4" />;
      case "instagram":
        return <Instagram className="h-4 w-4" />;
      case "tiktok":
        return <TikTok className="h-4 w-4" />;
      default:
        return <BarChart className="h-4 w-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {offerData.map((offer) => (
        <Card key={offer.id} className="overflow-hidden group hover:shadow-md transition-all">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10">
                  {getPlatformIcon(offer.platform)}
                </div>
                <Badge
                  variant={
                    offer.status === "active"
                      ? "default"
                      : offer.status === "paused"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {offer.status}
                </Badge>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Offer</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Analytics</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className={offer.status === "active" ? "text-amber-600 dark:text-amber-400" : "text-green-600 dark:text-green-400"}>
                    {offer.status === "active" ? "Pause Offer" : "Activate Offer"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <Link href={`/offers/${offer.id}`}>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {offer.name}
              </h3>
            </Link>
            
            <div className="flex items-center justify-between mb-2">
              <div className="rounded-full bg-muted px-2 py-0.5 text-xs">
                {offer.category}
              </div>
              {offer.score > 0 && (
                <BadgeDelta deltaType={offer.deltaType as any}>
                  {offer.change > 0 ? "+" : ""}
                  {offer.change}%
                </BadgeDelta>
              )}
            </div>
            
            {offer.status !== "scheduled" ? (
              <>
                <div className="flex items-end justify-between mb-1.5">
                  <div className="text-2xl font-bold">{offer.score}</div>
                  <div className="text-xs text-muted-foreground">Performance Score</div>
                </div>
                <Progress value={offer.score} className="h-1.5 mb-4" />
              </>
            ) : (
              <div className="h-[44px] flex items-center mb-4">
                <p className="text-sm text-muted-foreground">Scheduled to start soon</p>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-muted/50 rounded-md p-2">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">Insights</span>
                </div>
                <p className="text-lg font-semibold mt-1">{offer.insights}</p>
              </div>
              <div className="bg-muted/50 rounded-md p-2">
                <div className="flex items-center space-x-2">
                  <FileBarChart className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Tasks</span>
                </div>
                <p className="text-lg font-semibold mt-1">{offer.tasks}</p>
              </div>
            </div>
          </div>
          
          <CardFooter className="bg-muted/30 py-3 px-6 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Updated {offer.lastUpdated}</span>
            <Link href={`/offers/${offer.id}`} className="flex items-center text-xs text-primary">
              <span>View Details</span>
              <ChevronRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}