import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainLayout } from "@/components/layout/main-layout";
import { OfferDetail } from "@/components/offers/offer-detail/offer-detail";

interface OfferResults {
  clicks: number;
  impressions: number;
  conversions: number;
  ctr: number;
  cpc: number;
  roas: number;
}

interface OfferInsight {
  id: number;
  type: string;
  title: string;
  description: string;
  date: string;
  severity: string;
}

interface OfferTask {
  id: number;
  title: string;
  status: string;
  dueDate: string;
  assignee: string;
}

interface OfferHistory {
  date: string;
  score: number;
  impressions: number;
  clicks: number;
  conversions: number;
}

interface Offer {
  id: string;
  name: string;
  status: string;
  score: number;
  change: number;
  deltaType: string;
  platform: string;
  category: string;
  description: string;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  results: OfferResults;
  insights: OfferInsight[];
  tasks: OfferTask[];
  history: OfferHistory[];
}

type OfferData = {
  [key: string]: Offer;
};

// Mock data - in a real app, this would be fetched from the database
const offerData: OfferData = {
  "OF-2023-001": {
    id: "OF-2023-001",
    name: "Summer Sale Campaign",
    status: "active",
    score: 92,
    change: 3.5,
    deltaType: "increase",
    platform: "facebook",
    category: "e-commerce",
    description: "Seasonal promotion targeting existing customers with special summer discounts across all product categories.",
    startDate: "2023-06-15",
    endDate: "2023-08-31",
    budget: 15000,
    spent: 9200,
    results: {
      clicks: 28500,
      impressions: 520000,
      conversions: 1850,
      ctr: 5.48,
      cpc: 0.32,
      roas: 4.2
    },
    insights: [
      {
        id: 1,
        type: "performance",
        title: "Conversion rate increased",
        description: "Conversion rate has improved by 1.2% in the last 7 days",
        date: "2023-07-15",
        severity: "positive"
      },
      {
        id: 2,
        type: "anomaly",
        title: "CTR spike detected",
        description: "Unusual spike in CTR on July 10th, possibly due to creative refresh",
        date: "2023-07-11",
        severity: "neutral"
      },
      {
        id: 3,
        type: "recommendation",
        title: "Budget adjustment recommended",
        description: "Consider increasing budget allocation by 15% to capitalize on high-performing targeting segments",
        date: "2023-07-08",
        severity: "suggestion"
      }
    ],
    tasks: [
      {
        id: 1,
        title: "Update ad creative for mid-summer refresh",
        status: "pending",
        dueDate: "2023-07-20",
        assignee: "Alex Morgan"
      },
      {
        id: 2,
        title: "Review targeting efficiency report",
        status: "completed",
        dueDate: "2023-07-15",
        assignee: "Jamie Smith"
      }
    ],
    history: [
      {
        date: "2023-07-14",
        score: 92,
        impressions: 24500,
        clicks: 1350,
        conversions: 87
      },
      {
        date: "2023-07-13",
        score: 91,
        impressions: 23800,
        clicks: 1290,
        conversions: 82
      },
      {
        date: "2023-07-12",
        score: 90,
        impressions: 24100,
        clicks: 1320,
        conversions: 79
      },
      {
        date: "2023-07-11",
        score: 89,
        impressions: 23500,
        clicks: 1280,
        conversions: 76
      },
      {
        date: "2023-07-10",
        score: 88,
        impressions: 22900,
        clicks: 1240,
        conversions: 75
      },
      {
        date: "2023-07-09",
        score: 89,
        impressions: 23100,
        clicks: 1260,
        conversions: 77
      },
      {
        date: "2023-07-08",
        score: 88.5,
        impressions: 22800,
        clicks: 1230,
        conversions: 74
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(offerData).map((id) => ({ id }));
}

interface OfferDetailPageProps {
  params: {
    id: string;
  };
}

export const generateMetadata = ({ params }: OfferDetailPageProps): Metadata => {
  const offer = offerData[params.id];
  
  if (!offer) {
    return {
      title: "Offer Not Found - OfferTracker Pro",
    };
  }
  
  return {
    title: `${offer.name} - OfferTracker Pro`,
    description: `Details and analytics for ${offer.name} marketing offer`,
  };
};

export default function OfferDetailPage({ params }: OfferDetailPageProps) {
  const offer = offerData[params.id];
  
  if (!offer) {
    notFound();
  }
  
  return (
    <MainLayout>
      <OfferDetail offer={offer} />
    </MainLayout>
  );
}