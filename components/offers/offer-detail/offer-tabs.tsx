"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OfferOverview } from "./tabs/offer-overview";
import { OfferPerformance } from "./tabs/offer-performance";
import { OfferInsights } from "./tabs/offer-insights";
import { OfferTasks } from "./tabs/offer-tasks";

interface OfferTabsProps {
  offer: any; // In a real app, this would be a properly typed offer object
}

export function OfferTabs({ offer }: OfferTabsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="performance">Performance</TabsTrigger>
        <TabsTrigger value="insights">Insights</TabsTrigger>
        <TabsTrigger value="tasks">Tasks</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-6">
        <OfferOverview offer={offer} />
      </TabsContent>
      <TabsContent value="performance" className="mt-6">
        <OfferPerformance offer={offer} />
      </TabsContent>
      <TabsContent value="insights" className="mt-6">
        <OfferInsights offer={offer} />
      </TabsContent>
      <TabsContent value="tasks" className="mt-6">
        <OfferTasks offer={offer} />
      </TabsContent>
    </Tabs>
  );
}