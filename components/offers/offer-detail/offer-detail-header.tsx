"use client";

import { Badge } from "@/components/ui/badge";
import { BadgeDelta } from "@/components/ui/badge-delta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Facebook, Instagram, TikTok } from "../platform-icons";
import {
  ArrowLeft,
  Bell,
  CalendarDays,
  Download,
  EditIcon,
  PlayCircle,
  PauseCircle,
  Share2,
} from "lucide-react";
import Link from "next/link";

interface OfferDetailHeaderProps {
  offer: any; // In a real app, this would be a properly typed offer object
}

export function OfferDetailHeader({ offer }: OfferDetailHeaderProps) {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook className="h-5 w-5" />;
      case "instagram":
        return <Instagram className="h-5 w-5" />;
      case "tiktok":
        return <TikTok className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const calculateDaysRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = calculateDaysRemaining(offer.endDate);
  const budgetPercentage = (offer.spent / offer.budget) * 100;

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex items-center space-x-4">
          <Link href="/offers">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{offer.name}</h1>
            <div className="flex items-center space-x-2 mt-1">
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
              <span className="text-sm text-muted-foreground">
                {offer.id}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download</span>
          </Button>
          <Button variant="outline">
            <EditIcon className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button variant={offer.status === "active" ? "destructive" : "default"}>
            {offer.status === "active" ? (
              <>
                <PauseCircle className="mr-2 h-4 w-4" />
                Pause
              </>
            ) : (
              <>
                <PlayCircle className="mr-2 h-4 w-4" />
                Activate
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium text-muted-foreground">
                Performance Score
              </div>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">{offer.score}</div>
                <BadgeDelta deltaType={offer.deltaType}>
                  {offer.change > 0 ? "+" : ""}
                  {offer.change}%
                </BadgeDelta>
              </div>
              <Progress value={offer.score} className="h-1.5 mt-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium text-muted-foreground">
                Platform & Category
              </div>
              <div className="flex items-center mt-1 space-x-3">
                <div className="flex items-center space-x-1.5">
                  {getPlatformIcon(offer.platform)}
                  <span className="capitalize">{offer.platform}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="rounded-full bg-muted px-2 py-0.5 text-xs">
                  {offer.category}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium text-muted-foreground">
                Timeline
              </div>
              <div className="flex items-center mt-1">
                <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
                <div className="flex flex-col">
                  <div className="text-sm">
                    {formatDate(offer.startDate)} - {formatDate(offer.endDate)}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {daysRemaining > 0
                      ? `${daysRemaining} days remaining`
                      : "Campaign ended"}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium text-muted-foreground">
                Budget Usage
              </div>
              <div className="flex items-end justify-between">
                <div className="text-lg font-semibold">
                  ${offer.spent.toLocaleString()} / ${offer.budget.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">
                  {budgetPercentage.toFixed(1)}% used
                </div>
              </div>
              <Progress value={budgetPercentage} className="h-1.5 mt-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}