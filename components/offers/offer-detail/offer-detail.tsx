"use client";

import { OfferDetailHeader } from "./offer-detail-header";
import { OfferTabs } from "./offer-tabs";

interface OfferDetailProps {
  offer: any; // In a real app, this would be a properly typed offer object
}

export function OfferDetail({ offer }: OfferDetailProps) {
  return (
    <div className="space-y-6">
      <OfferDetailHeader offer={offer} />
      <OfferTabs offer={offer} />
    </div>
  );
}