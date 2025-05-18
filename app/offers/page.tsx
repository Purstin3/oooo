import { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { OffersTabs } from "@/components/offers/offers-tabs";
import { OffersHeader } from "@/components/offers/offers-header";

export const metadata: Metadata = {
  title: "Offers - OfferTracker Pro",
  description: "Manage and track your marketing offers",
};

export default function OffersPage() {
  return (
    <MainLayout>
      <OffersHeader />
      <OffersTabs />
    </MainLayout>
  );
}