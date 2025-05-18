"use client";

import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Product Manager",
      email: "alex.t@company.com",
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      email: "sarah.c@company.com",
    },
    {
      name: "Marcus Rodriguez",
      role: "UX Designer",
      email: "marcus.r@company.com",
    },
    {
      name: "Emma Wilson",
      role: "Marketing Lead",
      email: "emma.w@company.com",
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-2 mb-8">
        <Users className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Team Members</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.email} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
              <a 
                href={`mailto:${member.email}`} 
                className="text-sm text-blue-500 hover:text-blue-600 mt-2"
              >
                {member.email}
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}