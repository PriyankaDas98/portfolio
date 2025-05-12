import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    dates: "Jan 2020 - Present",
    responsibilities: [
      "Led development of key features for flagship product.",
      "Mentored junior engineers and conducted code reviews.",
      "Collaborated with cross-functional teams to define project scope.",
      "Optimized application performance, reducing load times by 20%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Innovatech Ltd.",
    dates: "Jun 2017 - Dec 2019",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js.",
      "Participated in agile development ceremonies.",
      "Contributed to API design and database schema.",
      "Implemented unit and integration tests, improving code coverage.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Startup Hub",
    dates: "Aug 2015 - May 2017",
    responsibilities: [
      "Assisted in building responsive user interfaces.",
      "Worked on bug fixes and feature enhancements.",
      "Gained experience with version control (Git) and CI/CD pipelines.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 flex items-center justify-center">
          <Briefcase className="mr-3 h-8 w-8 text-accent" />
          Work Experience
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 md:mb-12 flex md:items-center w-full">
              <div className="hidden md:block w-1/2 md:pr-8">
                {index % 2 === 0 && (
                  <ExperienceCard item={exp} alignment="right" />
                )}
              </div>
              <div className="hidden md:block w-1/2 md:pl-8">
                 {index % 2 !== 0 && (
                  <ExperienceCard item={exp} alignment="left" />
                )}
              </div>
              {/* Mobile view: cards stack */}
              <div className="md:hidden w-full">
                <ExperienceCard item={exp} alignment="left" isMobile />
              </div>

              {/* Timeline Dot - Centered for Desktop, Left for Mobile */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-accent border-2 border-card hidden md:block"></div>
               <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-accent border-2 border-card md:hidden" style={{left: '-0.375rem', top: '1.25rem'}}></div> {/* Adjusted for mobile view */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  item: ExperienceItem;
  alignment: 'left' | 'right';
  isMobile?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, alignment, isMobile }) => {
  const textAlignClass = !isMobile && alignment === 'left' ? 'md:text-left' : !isMobile && alignment === 'right' ? 'md:text-right' : 'text-left';
  
  return (
    <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${isMobile ? 'ml-6' : ''}`}>
      <CardHeader className={textAlignClass}>
        <CardTitle className="text-xl text-primary">{item.role}</CardTitle>
        <CardDescription className="text-accent font-semibold">{item.company} | {item.dates}</CardDescription>
      </CardHeader>
      <CardContent className={textAlignClass}>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          {item.responsibilities.map((resp, i) => (
            <li key={i}>{resp}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
