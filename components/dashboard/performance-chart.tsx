"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useTheme } from "next-themes";

// Mock data for the chart
const performanceData = [
  { day: "Mon", score: 87, volume: 120, benchmark: 82 },
  { day: "Tue", score: 85, volume: 132, benchmark: 83 },
  { day: "Wed", score: 88, volume: 145, benchmark: 83 },
  { day: "Thu", score: 92, volume: 157, benchmark: 84 },
  { day: "Fri", score: 90, volume: 149, benchmark: 85 },
  { day: "Sat", score: 89, volume: 138, benchmark: 84 },
  { day: "Sun", score: 91, volume: 142, benchmark: 85 },
];

export function PerformanceChart() {
  const { theme } = useTheme();
  const [activeLines, setActiveLines] = useState({
    score: true,
    volume: true,
    benchmark: true,
  });

  const isDark = theme === "dark";
  
  const gridColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
  const textColor = isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)";

  const handleLegendClick = (dataKey: string) => {
    setActiveLines({
      ...activeLines,
      [dataKey]: !activeLines[dataKey as keyof typeof activeLines],
    });
  };

  const formatYAxisTick = (value: number) => {
    return value.toString();
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border p-3 rounded-md shadow-md">
          <p className="font-medium text-sm">{label}</p>
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
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={performanceData}
          margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis 
            dataKey="day" 
            tick={{ fill: textColor, fontSize: 12 }} 
            stroke={gridColor} 
          />
          <YAxis 
            tick={{ fill: textColor, fontSize: 12 }} 
            stroke={gridColor} 
            tickFormatter={formatYAxisTick}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            onClick={(e) => handleLegendClick(e.dataKey)}
            formatter={(value, entry, index) => (
              <span style={{ color: textColor, marginLeft: 4 }}>{value}</span>
            )}
          />
          {activeLines.score && (
            <Line
              type="monotone"
              dataKey="score"
              stroke="hsl(var(--chart-1))"
              activeDot={{ r: 6 }}
              strokeWidth={2}
            />
          )}
          {activeLines.volume && (
            <Line
              type="monotone"
              dataKey="volume"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
            />
          )}
          {activeLines.benchmark && (
            <Line
              type="monotone"
              dataKey="benchmark"
              stroke="hsl(var(--chart-3))"
              strokeDasharray="5 5"
              strokeWidth={2}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}