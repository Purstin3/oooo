import { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { ActiveOffersTable } from "@/components/dashboard/active-offers-table";
import { OfferScoreCards } from "@/components/dashboard/offer-score-cards";
import { RecentActivityList } from "@/components/dashboard/recent-activity-list";
import { BadgeDelta } from "@/components/ui/badge-delta";

export const metadata: Metadata = {
  title: "Dashboard - OfferTracker Pro",
  description: "Real-time analytics dashboard for your marketing offers",
};

export default function DashboardPage() {
  return (
    <MainLayout>
      <DashboardHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Offers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <BadgeDelta deltaType="increase" size="sm">+2 this week</BadgeDelta>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.4%</div>
            <p className="text-xs text-muted-foreground">
              <BadgeDelta deltaType="increase" size="sm">+3.2% from last month</BadgeDelta>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Insights Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              <BadgeDelta deltaType="moderateIncrease" size="sm">+1 from yesterday</BadgeDelta>
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
            <CardDescription>Overall offer performance over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <PerformanceChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates across all offers</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivityList />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-4">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Offers</CardTitle>
            <CardDescription>Offers with the highest performance scores</CardDescription>
          </CardHeader>
          <CardContent>
            <OfferScoreCards />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Offers Overview</CardTitle>
            <CardDescription>Summary of all currently active marketing offers</CardDescription>
          </CardHeader>
          <CardContent>
            <ActiveOffersTable />
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}