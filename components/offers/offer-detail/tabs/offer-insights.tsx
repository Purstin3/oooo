"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, CheckCircle, Info, MessageSquare, ThumbsUp, Zap } from "lucide-react";

interface OfferInsightsProps {
  offer: any; // In a real app, this would be a properly typed offer object
}

// Extended insights data
const allInsights = [
  {
    id: 1,
    type: "performance",
    title: "Conversion rate increased",
    description: "Conversion rate has improved by 1.2% in the last 7 days, outperforming the industry average by 0.5%.",
    date: "2023-07-15",
    severity: "positive",
    impact: "high",
    category: "conversion",
    source: "automated",
    user: {
      name: "AI Assistant",
      initials: "AI",
    },
    comments: 2,
  },
  {
    id: 2,
    type: "anomaly",
    title: "CTR spike detected",
    description: "Unusual spike in CTR on July 10th, possibly due to creative refresh. This represents a 15% increase over your average CTR.",
    date: "2023-07-11",
    severity: "neutral",
    impact: "medium",
    category: "engagement",
    source: "automated",
    user: {
      name: "AI Assistant",
      initials: "AI",
    },
    comments: 0,
  },
  {
    id: 3,
    type: "recommendation",
    title: "Budget adjustment recommended",
    description: "Consider increasing budget allocation by 15% to capitalize on high-performing targeting segments. Projections indicate this could yield a 12% increase in overall conversions.",
    date: "2023-07-08",
    severity: "suggestion",
    impact: "high",
    category: "budget",
    source: "automated",
    user: {
      name: "AI Assistant",
      initials: "AI",
    },
    comments: 1,
  },
  {
    id: 4,
    type: "alert",
    title: "Mobile conversion rate declining",
    description: "Mobile conversion rate has decreased by 2.3% over the past 5 days. This may be due to page load speed issues on the new landing page.",
    date: "2023-07-14",
    severity: "negative",
    impact: "medium",
    category: "conversion",
    source: "automated",
    user: {
      name: "AI Assistant",
      initials: "AI",
    },
    comments: 3,
  },
  {
    id: 5,
    type: "prediction",
    title: "Weekend performance forecast",
    description: "Based on historical patterns, expect a 20-25% increase in engagement rates during the upcoming weekend, with peak activity between 6-9pm.",
    date: "2023-07-13",
    severity: "neutral",
    impact: "low",
    category: "engagement",
    source: "automated",
    user: {
      name: "AI Assistant",
      initials: "AI",
    },
    comments: 0,
  },
];

export function OfferInsights({ offer }: OfferInsightsProps) {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "positive":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "negative":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case "suggestion":
        return <Zap className="h-5 w-5 text-amber-500" />;
      case "neutral":
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "performance":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "anomaly":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "recommendation":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "alert":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "prediction":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "medium":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">AI-Powered Insights</h2>
        <Button>
          <Zap className="mr-2 h-4 w-4" />
          Generate New Insights
        </Button>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5 lg:w-[600px]">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 gap-4">
            {allInsights.map((insight) => (
              <Card key={insight.id} className="overflow-hidden hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {getSeverityIcon(insight.severity)}
                      <CardTitle className="text-lg">{insight.title}</CardTitle>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getTypeColor(insight.type)} variant="outline">
                        {insight.type}
                      </Badge>
                      <Badge className={getImpactColor(insight.impact)} variant="outline">
                        {insight.impact} impact
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>
                    {formatDate(insight.date)} • {insight.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{insight.description}</p>
                </CardContent>
                <CardFooter className="border-t bg-muted/20 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {insight.user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">Generated by {insight.user.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="h-8">
                      <MessageSquare className="h-3.5 w-3.5 mr-1" />
                      {insight.comments > 0 ? `${insight.comments} comments` : "Comment"}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8">
                      <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                      Helpful
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="performance" className="mt-6">
          <div className="grid grid-cols-1 gap-4">
            {allInsights
              .filter(insight => insight.type === "performance")
              .map((insight) => (
                <Card key={insight.id} className="overflow-hidden hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        {getSeverityIcon(insight.severity)}
                        <CardTitle className="text-lg">{insight.title}</CardTitle>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getTypeColor(insight.type)} variant="outline">
                          {insight.type}
                        </Badge>
                        <Badge className={getImpactColor(insight.impact)} variant="outline">
                          {insight.impact} impact
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>
                      {formatDate(insight.date)} • {insight.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{insight.description}</p>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/20 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-primary/10 text-primary">
                          {insight.user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Generated by {insight.user.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="h-8">
                        <MessageSquare className="h-3.5 w-3.5 mr-1" />
                        {insight.comments > 0 ? `${insight.comments} comments` : "Comment"}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8">
                        <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                        Helpful
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="anomalies" className="mt-6">
          <div className="grid grid-cols-1 gap-4">
            {allInsights
              .filter(insight => insight.type === "anomaly" || insight.type === "alert")
              .map((insight) => (
                <Card key={insight.id} className="overflow-hidden hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        {getSeverityIcon(insight.severity)}
                        <CardTitle className="text-lg">{insight.title}</CardTitle>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getTypeColor(insight.type)} variant="outline">
                          {insight.type}
                        </Badge>
                        <Badge className={getImpactColor(insight.impact)} variant="outline">
                          {insight.impact} impact
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>
                      {formatDate(insight.date)} • {insight.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{insight.description}</p>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/20 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-primary/10 text-primary">
                          {insight.user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Generated by {insight.user.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="h-8">
                        <MessageSquare className="h-3.5 w-3.5 mr-1" />
                        {insight.comments > 0 ? `${insight.comments} comments` : "Comment"}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8">
                        <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                        Helpful
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recommendations" className="mt-6">
          <div className="grid grid-cols-1 gap-4">
            {allInsights
              .filter(insight => insight.type === "recommendation")
              .map((insight) => (
                <Card key={insight.id} className="overflow-hidden hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        {getSeverityIcon(insight.severity)}
                        <CardTitle className="text-lg">{insight.title}</CardTitle>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getTypeColor(insight.type)} variant="outline">
                          {insight.type}
                        </Badge>
                        <Badge className={getImpactColor(insight.impact)} variant="outline">
                          {insight.impact} impact
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>
                      {formatDate(insight.date)} • {insight.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{insight.description}</p>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/20 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-primary/10 text-primary">
                          {insight.user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Generated by {insight.user.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="h-8">
                        <MessageSquare className="h-3.5 w-3.5 mr-1" />
                        {insight.comments > 0 ? `${insight.comments} comments` : "Comment"}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8">
                        <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                        Helpful
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="predictions" className="mt-6">
          <div className="grid grid-cols-1 gap-4">
            {allInsights
              .filter(insight => insight.type === "prediction")
              .map((insight) => (
                <Card key={insight.id} className="overflow-hidden hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        {getSeverityIcon(insight.severity)}
                        <CardTitle className="text-lg">{insight.title}</CardTitle>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getTypeColor(insight.type)} variant="outline">
                          {insight.type}
                        </Badge>
                        <Badge className={getImpactColor(insight.impact)} variant="outline">
                          {insight.impact} impact
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>
                      {formatDate(insight.date)} • {insight.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{insight.description}</p>
                  </CardContent>
                  <CardFooter className="border-t bg-muted/20 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs bg-primary/10 text-primary">
                          {insight.user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">Generated by {insight.user.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="h-8">
                        <MessageSquare className="h-3.5 w-3.5 mr-1" />
                        {insight.comments > 0 ? `${insight.comments} comments` : "Comment"}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8">
                        <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                        Helpful
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}