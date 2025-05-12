import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Cog, Users, Brain } from "lucide-react"; // Zap for Languages, Cog for Frameworks, Users for Soft Skills, Brain for Tools/Concepts

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Zap,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Go"],
  },
  {
    name: "Frameworks & Libraries",
    icon: Cog,
    skills: ["React", "Next.js", "Angular", "Vue.js", "Node.js", "Express.js", "Spring Boot", ".NET Core"],
  },
  {
    name: "Tools & Platforms",
    icon: Brain,
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "Git", "Jenkins", "Terraform"],
  },
  {
    name: "Databases",
    icon: Users, // Re-using icon, ideally a database icon
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server"],
  },
   {
    name: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Communication", "Teamwork", "Adaptability", "Leadership", "Critical Thinking"],
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center">
          <Zap className="mr-3 h-8 w-8 text-accent" /> {/* Main section icon */}
          Skills Showcase
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-3">
                <category.icon className="h-6 w-6 text-accent" />
                <CardTitle className="text-xl text-primary">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 bg-accent/20 text-accent-foreground hover:bg-accent/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
