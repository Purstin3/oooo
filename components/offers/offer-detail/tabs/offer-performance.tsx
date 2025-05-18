"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  BarChart,
  Bar,
  ComposedChart,
  Area,
  Cell
} from "recharts";
import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OfferPerformanceProps {
  offer: any; // In a real app, this would be a properly typed offer object
}

// Extended mock data for performance tab
const performanceData = [
  {
    date: "2023-07-08",
    impressions: 22800,
    clicks: 1230,
    conversions: 74,
    ctr: 5.39,
    convRate: 6.02,
    spend: 410,
    revenue: 1640,
  },
  {
    date: "2023-07-09",
    impressions: 23100,
    clicks: 1260,
    conversions: 77,
    ctr: 5.45,
    convRate: 6.11,
    spend: 420,
    revenue: 1710,
  },
  {
    date: "2023-07-10",
    impressions: 22900,
    clicks: 1240,
    conversions: 75,
    ctr: 5.41,
    convRate: 6.05,
    spend: 415,
    revenue: 1680,
  },
  {
    date: "2023-07-11",
    impressions: 23500,
    clicks: 1280,
    conversions: 76,
    ctr: 5.45,
    convRate: 5.94,
    spend: 425,
    revenue: 1720,
  },
  {
    date: "2023-07-12",
    impressions: 24100,
    clicks: 1320,
    conversions: 79,
    ctr: 5.48,
    convRate: 5.98,
    spend: 440,
    revenue: 1790,
  },
  {
    date: "2023-07-13",
    impressions: 23800,
    clicks: 1290,
    conversions: 82,
    ctr: 5.42,
    convRate: 6.36,
    spend: 435,
    revenue: 1860,
  },
  {
    date: "2023-07-14",
    impressions: 24500,
    clicks: 1350,
    conversions: 87,
    ctr: 5.51,
    convRate: 6.44,
    spend: 450,
    revenue: 1980,
  }
];

// Audience data
const audienceData = [
  {
    name: "18-24",
    value: 15,
    color: "hsl(var(--chart-1))"
  },
  {
    name: "25-34",
    value: 30,
    color: "hsl(var(--chart-2))"
  },
  {
    name: "35-44",
    value: 25,
    color: "hsl(var(--chart-3))"
  },
  {
    name: "45-54",
    value: 18,
    color: "hsl(var(--chart-4))"
  },
  {
    name: "55+",
    value: 12,
    color: "hsl(var(--chart-5))"
  }
];

const deviceData = [
  {
    name: "Mobile",
    value: 62,
    color: "hsl(var(--chart-1))"
  },
  {
    name: "Desktop",
    value: 28,
    color: "hsl(var(--chart-2))"
  },
  {
    name: "Tablet",
    value: 10,
    color: "hsl(var(--chart-3))"
  }
];

export function OfferPerformance({ offer }: OfferPerformanceProps) {
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Performance Metrics</h2>
        <div className="flex items-center space-x-2">
          <Select defaultValue="7d">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1d">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Engagement Metrics</CardTitle>
                <CardDescription>Impressions, clicks and CTR</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={performanceData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                    >
                      <defs>
                        <linearGradient id="impressionsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.2} />
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
                        yAxisId="left"
                        tick={{ fill: textColor, fontSize: 10 }} 
                        stroke={gridColor} 
                      />
                      <YAxis 
                        yAxisId="right"
                        orientation="right"
                        domain={[0, 10]}
                        tick={{ fill: textColor, fontSize: 10 }} 
                        stroke={gridColor} 
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="impressions"
                        fill="url(#impressionsGradient)"
                        stroke="hsl(var(--chart-1))"
                        strokeWidth={2}
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="clicks"
                        stroke="hsl(var(--chart-2))"
                        strokeWidth={2}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="ctr"
                        stroke="hsl(var(--chart-3))"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue Metrics</CardTitle>
                <CardDescription>Spend, revenue and ROAS</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={performanceData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                      <XAxis 
                        dataKey="date" 
                        tick={{ fill: textColor, fontSize: 10 }} 
                        stroke={gridColor}
                        tickFormatter={formatDate}
                      />
                      <YAxis 
                        yAxisId="left"
                        tick={{ fill: textColor, fontSize: 10 }} 
                        stroke={gridColor} 
                      />
                      <YAxis 
                        yAxisId="right"
                        orientation="right"
                        domain={[0, 7]}
                        tick={{ fill: textColor, fontSize: 10 }} 
                        stroke={gridColor} 
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Bar
                        yAxisId="left"
                        dataKey="spend"
                        fill="hsl(var(--chart-4))"
                        name="Spend"
                        barSize={20}
                      />
                      <Bar
                        yAxisId="left"
                        dataKey="revenue"
                        fill="hsl(var(--chart-2))"
                        name="Revenue"
                        barSize={20}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="conversions"
                        stroke="hsl(var(--chart-5))"
                        strokeWidth={2}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="traffic" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Analysis</CardTitle>
              <CardDescription>Detailed traffic metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={performanceData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fill: textColor, fontSize: 12 }} 
                      stroke={gridColor}
                      tickFormatter={formatDate}
                    />
                    <YAxis 
                      tick={{ fill: textColor, fontSize: 12 }} 
                      stroke={gridColor} 
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="impressions"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="clicks"
                      stroke="hsl(var(--chart-2))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="conversions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Metrics</CardTitle>
              <CardDescription>Conversion rate and values over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={performanceData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fill: textColor, fontSize: 12 }} 
                      stroke={gridColor}
                      tickFormatter={formatDate}
                    />
                    <YAxis 
                      yAxisId="left"
                      tick={{ fill: textColor, fontSize: 12 }} 
                      stroke={gridColor} 
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      domain={[5, 7]}
                      tick={{ fill: textColor, fontSize: 12 }} 
                      stroke={gridColor} 
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      dataKey="conversions"
                      fill="hsl(var(--chart-3))"
                      barSize={30}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="convRate"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="audience" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Age Demographics</CardTitle>
                <CardDescription>Distribution by age groups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={audienceData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke={gridColor} />
                      <XAxis
                        type="number"
                        tick={{ fill: textColor, fontSize: 12 }}
                        stroke={gridColor}
                      />
                      <YAxis
                        dataKey="name"
                        type="category"
                        tick={{ fill: textColor, fontSize: 12 }}
                        stroke={gridColor}
                      />
                      <Tooltip />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {audienceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Device Usage</CardTitle>
                <CardDescription>Distribution by device type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={deviceData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                      <XAxis
                        dataKey="name"
                        tick={{ fill: textColor, fontSize: 12 }}
                        stroke={gridColor}
                      />
                      <YAxis
                        tick={{ fill: textColor, fontSize: 12 }}
                        stroke={gridColor}
                      />
                      <Tooltip />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}