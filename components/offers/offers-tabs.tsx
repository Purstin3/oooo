"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OffersGrid } from "@/components/offers/offers-grid";
import { OffersTable } from "@/components/offers/offers-table";

export function OffersTabs() {
  return (
    <Tabs defaultValue="grid" className="w-full">
      <div className="flex justify-between items-center mb-4">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="table">Table View</TabsTrigger>
        </TabsList>
        <div className="text-sm text-muted-foreground">
          Showing <strong>15</strong> offers
        </div>
      </div>
      <TabsContent value="grid" className="mt-0">
        <OffersGrid />
      </TabsContent>
      <TabsContent value="table" className="mt-0">
        <OffersTable />
      </TabsContent>
    </Tabs>
  );
}