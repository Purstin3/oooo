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
import { ArrowUpDown, Eye, MoreHorizontal } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for the active offers
const activeOffers = [
  {
    id: "OF-2023-001",
    name: "Summer Sale Campaign",
    status: "active",
    score: 92,
    trendscore: 3.5,
    trendscorelabel: "increase",
    lastUpdated: "2 hours ago",
    platform: "facebook",
    category: "e-commerce",
  },
  {
    id: "OF-2023-002",
    name: "New Product Launch",
    status: "active",
    score: 88,
    trendscore: 1.2,
    trendscorelabel: "moderateIncrease",
    lastUpdated: "4 hours ago",
    platform: "instagram",
    category: "product",
  },
  {
    id: "OF-2023-003",
    name: "Holiday Special",
    status: "paused",
    score: 75,
    trendscore: -2.1,
    trendscorelabel: "decrease",
    lastUpdated: "1 day ago",
    platform: "facebook",
    category: "seasonal",
  },
  {
    id: "OF-2023-004",
    name: "Brand Awareness Campaign",
    status: "active",
    score: 85,
    trendscore: 0.8,
    trendscorelabel: "moderateIncrease",
    lastUpdated: "3 hours ago",
    platform: "tiktok",
    category: "branding",
  },
  {
    id: "OF-2023-005",
    name: "Customer Loyalty Program",
    status: "active",
    score: 90,
    trendscore: 2.3,
    trendscorelabel: "increase",
    lastUpdated: "5 hours ago",
    platform: "facebook",
    category: "loyalty",
  },
];

export function ActiveOffersTable() {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">
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
            <TableHead className="w-[150px]">Trend</TableHead>
            <TableHead className="w-[100px]">Platform</TableHead>
            <TableHead className="w-[130px]">Category</TableHead>
            <TableHead className="w-[130px]">Last Updated</TableHead>
            <TableHead className="w-[100px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activeOffers.map((offer) => (
            <TableRow key={offer.id}>
              <TableCell className="font-medium">{offer.name}</TableCell>
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
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{offer.score}</span>
                  <Progress value={offer.score} className="h-1.5" />
                </div>
              </TableCell>
              <TableCell>
                <BadgeDelta deltaType={offer.trendscorelabel as any}>
                  {offer.trendscore > 0 ? "+" : ""}
                  {offer.trendscore}%
                </BadgeDelta>
              </TableCell>
              <TableCell>{offer.platform}</TableCell>
              <TableCell>{offer.category}</TableCell>
              <TableCell className="text-muted-foreground">
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