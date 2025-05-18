"use client";

import { Card } from "@/components/ui/card";
import { BadgeDelta } from "@/components/ui/badge-delta";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";

// Mock data for top performing offers
const topOffers = [
  {
    id: "OF-2023-001",
    name: "Summer Sale Campaign",
    score: 92,
    change: 3.5,
    deltaType: "increase",
    category: "e-commerce",
  },
  {
    id: "OF-2023-005",
    name: "Customer Loyalty Program",
    score: 90,
    change: 2.3,
    deltaType: "increase",
    category: "loyalty",
  },
  {
    id: "OF-2023-002",
    name: "New Product Launch",
    score: 88,
    change: 1.2,
    deltaType: "moderateIncrease",
    category: "product",
  },
];

export function OfferScoreCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {topOffers.map((offer, index) => (
        <Link key={offer.id} href={`/offers/${offer.id}`} className="block">
          <Card className="h-full transition-all hover:shadow-md group overflow-hidden">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-3">
                    <Star className="h-4 w-4" />
                  </div>
                  <div className="rounded-full bg-muted px-2 py-1 text-xs">
                    {offer.category}
                  </div>
                </div>
                <BadgeDelta deltaType={offer.deltaType as any}>
                  {offer.change > 0 ? "+" : ""}
                  {offer.change}%
                </BadgeDelta>
              </div>
              <div className="space-y-1 mb-4">
                <h3 className="font-semibold text-lg truncate">{offer.name}</h3>
                <div className="flex items-end justify-between">
                  <div className="text-3xl font-bold">{offer.score}</div>
                  <div className="text-xs text-muted-foreground">Performance Score</div>
                </div>
              </div>
              <div className="bg-muted/50 w-full h-1.5 rounded-full mt-auto overflow-hidden mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full"
                  style={{ width: `${offer.score}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                <div>Score based on last 7 days</div>
                <div className="flex items-center">
                  <span className="text-xs mr-1">Details</span>
                  <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}