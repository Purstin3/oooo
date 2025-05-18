import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Layers, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "OfferTracker Pro - Marketing Analytics Platform",
  description: "Professional platform for monitoring and analyzing marketing offers",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span>OfferTracker Pro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button>
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Monitor, Analyze, Optimize Your Marketing Offers
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The professional platform for tracking ad performance and generating actionable insights to maximize ROI.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="transition-all hover:scale-105">
                      Start Tracking Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 to-purple-700 p-6 shadow-lg">
                  <div className="flex flex-col gap-4 text-white">
                    <div className="text-sm font-semibold uppercase tracking-wide opacity-80">
                      Real-time Dashboard
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                        <div className="mb-1 text-xs font-medium">Active Offers</div>
                        <div className="text-2xl font-bold">24</div>
                      </div>
                      <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                        <div className="mb-1 text-xs font-medium">Performance Score</div>
                        <div className="text-2xl font-bold">87.4%</div>
                      </div>
                      <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                        <div className="mb-1 text-xs font-medium">Growth Trend</div>
                        <div className="text-2xl font-bold">+12.3%</div>
                      </div>
                      <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                        <div className="mb-1 text-xs font-medium">Insights</div>
                        <div className="text-2xl font-bold">7</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Optimize Your Offers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  OfferTracker Pro provides comprehensive tools to monitor, analyze, and optimize your marketing campaigns.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Real-time Dashboard</h3>
                <p className="text-muted-foreground">
                  Monitor key performance indicators with real-time updates and custom views.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Intelligent Scoring</h3>
                <p className="text-muted-foreground">
                  Automatic scoring based on consistency, trends, and volume metrics.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Historical Tracking</h3>
                <p className="text-muted-foreground">
                  Track and analyze historical data to identify patterns and optimize performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <p className="text-sm leading-loose text-muted-foreground">
                © 2025 OfferTracker Pro. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm font-medium hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}