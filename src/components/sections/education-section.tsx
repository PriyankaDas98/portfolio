import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  dates: string;
  details?: string[];
}

const educationItems: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Advanced Technology",
    dates: "2013 - 2015",
    details: [
      "Specialization in Artificial Intelligence.",
      "Thesis: 'Machine Learning Models for Predictive Analysis'.",
      "GPA: 3.9/4.0",
    ],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "State Engineering College",
    dates: "2009 - 2013",
    details: [
      "Focus on Web Development and Database Management.",
      "Senior Project: 'E-commerce Platform Development'.",
      "Graduated with Honors.",
    ],
  },
  {
    degree: "Certified Next.js Developer",
    institution: "Online Certification Body",
    dates: "2022",
    details: [
      "Completed comprehensive Next.js training.",
      "Covered App Router, Server Components, and Vercel deployment.",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center">
          <GraduationCap className="mr-3 h-8 w-8 text-accent" />
          Education & Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationItems.map((edu, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
                <CardDescription className="text-accent font-semibold">{edu.institution}</CardDescription>
                <CardDescription>{edu.dates}</CardDescription>
              </CardHeader>
              {edu.details && edu.details.length > 0 && (
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
