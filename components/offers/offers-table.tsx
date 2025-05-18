"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BadgeDelta } from "@/components/ui/badge-delta";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Eye, MoreHorizontal, Zap, FileBarChart } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Facebook, Instagram, TikTok } from "./platform-icons";
import Link from "next/link";

// Mock data for offers - same as in offers-grid.tsx
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

export function OffersTable() {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-4 w-4" />;
      case "instagram":
        return <Instagram className="h-4 w-4" />;
      case "tiktok":
        return <TikTok className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">
              <Button variant="ghost" className="p-0 hover:bg-transparent">
                <span>Offer Name</span>
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[100px]">
              <Button variant="ghost" className="p-0 hover:bg-transparent">
                <span>Score</span>
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="w-[120px]">Trend</TableHead>
            <TableHead className="w-[80px]">Platform</TableHead>
            <TableHead className="w-[100px]">Category</TableHead>
            <TableHead className="w-[120px]">
              <div className="flex items-center">
                <Zap className="h-3.5 w-3.5 mr-1 text-yellow-500" />
                <span>Insights</span>
              </div>
            </TableHead>
            <TableHead className="w-[100px]">
              <div className="flex items-center">
                <FileBarChart className="h-3.5 w-3.5 mr-1 text-blue-500" />
                <span>Tasks</span>
              </div>
            </TableHead>
            <TableHead className="w-[120px]">Last Updated</TableHead>
            <TableHead className="w-[80px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {offerData.map((offer) => (
            <TableRow key={offer.id}>
              <TableCell className="font-medium">
                <Link href={`/offers/${offer.id}`} className="hover:text-primary transition-colors">
                  {offer.name}
                </Link>
              </TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
                {offer.status !== "scheduled" ? (
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">{offer.score}</span>
                    <Progress value={offer.score} className="h-1.5" />
                  </div>
                ) : (
                  <span className="text-xs text-muted-foreground">N/A</span>
                )}
              </TableCell>
              <TableCell>
                {offer.status !== "scheduled" ? (
                  <BadgeDelta deltaType={offer.deltaType as any}>
                    {offer.change > 0 ? "+" : ""}
                    {offer.change}%
                  </BadgeDelta>
                ) : (
                  <BadgeDelta deltaType="unchanged">—</BadgeDelta>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1.5">
                  {getPlatformIcon(offer.platform)}
                  <span className="text-xs capitalize">{offer.platform}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-xs capitalize">{offer.category}</span>
              </TableCell>
              <TableCell className="text-center">{offer.insights}</TableCell>
              <TableCell className="text-center">{offer.tasks}</TableCell>
              <TableCell className="text-muted-foreground text-xs">
                {offer.lastUpdated}
              </TableCell>
              <TableCell>
                <div className="flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" /> View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Offer</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Analytics</DropdownMenuItem>
                      <DropdownMenuItem>Export Data</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className={offer.status === "active" ? "text-amber-600 dark:text-amber-400" : "text-green-600 dark:text-green-400"}>
                        {offer.status === "active" ? "Pause Offer" : "Activate Offer"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}