
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap, // Main section icon
} from "lucide-react";

interface Skill {
  name: string;
  // icon: React.ElementType; // Icon removed
}

// Consolidated list of skills - icons removed
const allSkills: Skill[] = [
  // Programming Languages
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Python" },
  { name: "Java" },
  { name: "C#" },
  { name: "Go" },
  // Frameworks & Libraries
  { name: "React" },
  { name: "Next.js" },
  { name: "Angular" },
  { name: "Vue.js" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Spring Boot" },
  { name: ".NET Core" },
  // Tools & Platforms
  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "AWS" },
  { name: "Azure" },
  { name: "Google Cloud" },
  { name: "Git" },
  { name: "Jenkins" },
  { name: "Terraform" },
  // Databases
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "Redis" },
  { name: "SQL Server" },
  // Soft Skills
  { name: "Problem Solving" },
  { name: "Communication" },
  { name: "Teamwork" },
  { name: "Adaptability" },
  { name: "Leadership" },
  { name: "Critical Thinking" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center">
          <Zap className="mr-3 h-8 w-8 text-accent" />
          Skills Showcase
        </h2>
        <Card className="shadow-xl">
          <CardContent className="pt-6"> {/* Added padding top as CardHeader is removed */}
            <div className="flex flex-wrap justify-center gap-3"> {/* Reduced gap for smaller boxes */}
              {allSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center p-2 border rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 bg-card text-center min-w-[100px]" // Adjusted padding and min-width
                >
                  {/* <skill.icon className="h-8 w-8 mb-2 text-accent" /> Icon removed */}
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

