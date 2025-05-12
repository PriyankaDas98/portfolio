
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap, // Main section icon
  FileJson2, // JavaScript
  Type, // TypeScript
  Terminal, // Python
  Coffee, // Java
  CodeSquare, // C#
  Move, // Go (placeholder)
  Atom, // React
  Server, // Next.js
  Shield, // Angular (placeholder for shape)
  LayoutPanelLeft, // Vue.js (placeholder for shape)
  Hexagon, // Node.js
  Route, // Express.js
  Leaf, // Spring Boot, MongoDB
  Dot, // .NET Core (placeholder)
  Container, // Docker
  ShipWheel, // Kubernetes
  Cloud, // AWS
  CloudSun, // Azure (placeholder)
  CloudDrizzle, // Google Cloud (placeholder)
  GitFork, // Git
  Cog, // Jenkins
  Blocks, // Terraform
  Database, // PostgreSQL (generic)
  DatabaseZap, // MySQL
  Gauge, // Redis
  DatabaseBackup, // SQL Server
  Lightbulb, // Problem Solving
  MessageCircle, // Communication
  Users, // Teamwork
  Shuffle, // Adaptability
  UserCheck, // Leadership
  Brain, // Critical Thinking
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
}

// Consolidated list of skills
const allSkills: Skill[] = [
  // Programming Languages
  { name: "JavaScript", icon: FileJson2 },
  { name: "TypeScript", icon: Type },
  { name: "Python", icon: Terminal },
  { name: "Java", icon: Coffee },
  { name: "C#", icon: CodeSquare },
  { name: "Go", icon: Move },
  // Frameworks & Libraries
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Server },
  { name: "Angular", icon: Shield },
  { name: "Vue.js", icon: LayoutPanelLeft },
  { name: "Node.js", icon: Hexagon },
  { name: "Express.js", icon: Route },
  { name: "Spring Boot", icon: Leaf },
  { name: ".NET Core", icon: Dot },
  // Tools & Platforms
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: ShipWheel },
  { name: "AWS", icon: Cloud },
  { name: "Azure", icon: CloudSun },
  { name: "Google Cloud", icon: CloudDrizzle },
  { name: "Git", icon: GitFork },
  { name: "Jenkins", icon: Cog },
  { name: "Terraform", icon: Blocks },
  // Databases
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: DatabaseZap },
  { name: "MongoDB", icon: Leaf },
  { name: "Redis", icon: Gauge },
  { name: "SQL Server", icon: DatabaseBackup },
  // Soft Skills
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Communication", icon: MessageCircle },
  { name: "Teamwork", icon: Users },
  { name: "Adaptability", icon: Shuffle },
  { name: "Leadership", icon: UserCheck },
  { name: "Critical Thinking", icon: Brain },
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
            <div className="flex flex-wrap justify-center gap-4">
              {allSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-3 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 w-28 h-28 bg-card text-center"
                >
                  <skill.icon className="h-8 w-8 mb-2 text-accent" />
                  <span className="text-xs font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
