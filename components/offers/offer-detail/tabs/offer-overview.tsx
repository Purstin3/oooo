"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area } from "recharts";
import { useTheme } from "next-themes";
import { AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface OfferOverviewProps {
  offer: any; // In a real app, this would be a properly typed offer object
}

export function OfferOverview({ offer }: OfferOverviewProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const gridColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
  const textColor = isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)";

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border p-3 rounded-md shadow-md">
          <p className="font-medium text-sm">{formatDate(label)}</p>
          <div className="mt-2 space-y-1">
            {payload.map((entry: any, index: number) => (
              <p 
                key={`item-${index}`} 
                className="text-xs flex items-center"
                style={{ color: entry.color }}
              >
                <span className="w-3 h-3 inline-block mr-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
                <span className="capitalize">{entry.name}: </span>
                <span className="ml-1 font-medium">{entry.value}</span>
              </p>
            ))}
          </div>
        </div>
      );
    }
  
    return null;
  };

  const metricCards = [
    {
      title: "Clicks",
      value: offer.results.clicks.toLocaleString(),
      change: "+8.3%",
      changeType: "positive",
    },
    {
      title: "Impressions",
      value: offer.results.impressions.toLocaleString(),
      change: "+5.2%",
      changeType: "positive",
    },
    {
      title: "Conversions",
      value: offer.results.conversions.toLocaleString(),
      change: "+12.7%",
      changeType: "positive",
    },
    {
      title: "CTR",
      value: `${offer.results.ctr}%`,
      change: "+1.1%",
      changeType: "positive",
    },
    {
      title: "CPC",
      value: `$${offer.results.cpc}`,
      change: "-3.4%",
      changeType: "positive",
    },
    {
      title: "ROAS",
      value: offer.results.roas.toFixed(1) + "x",
      change: "+0.3x",
      changeType: "positive",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{offer.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                {metricCards.map((metric, index) => (
                  <div key={index} className="bg-muted/40 rounded-lg p-3">
                    <div className="text-sm text-muted-foreground">{metric.title}</div>
                    <div className="text-2xl font-bold mt-1">{metric.value}</div>
                    <div className={`text-xs mt-1 ${
                      metric.changeType === "positive" 
                        ? "text-green-600 dark:text-green-400" 
                        : "text-red-600 dark:text-red-400"
                    }`}>
                      {metric.change} from last period
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Performance Summary</CardTitle>
              <CardDescription>Last 7 days trend</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold">{offer.score}</div>
                  <div className="text-sm text-muted-foreground">Current Score</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-green-600 dark:text-green-400">+4.2%</div>
                  <div className="text-sm text-muted-foreground">Since last week</div>
                </div>
              </div>
              
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[...offer.history].reverse()}
                    margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fill: textColor, fontSize: 10 }} 
                      stroke={gridColor}
                      tickFormatter={formatDate}
                    />
                    <YAxis 
                      domain={[80, 95]} 
                      tick={{ fill: textColor, fontSize: 10 }} 
                      stroke={gridColor} 
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="score" 
                      stroke="hsl(var(--chart-1))" 
                      fillOpacity={1}
                      fill="url(#scoreGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <Alert className="mt-6">
                <Info className="h-4 w-4" />
                <AlertTitle>Performance Insights</AlertTitle>
                <AlertDescription>
                  This offer is performing above average with consistent growth trend over the past week.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}