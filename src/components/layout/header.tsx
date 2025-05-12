
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code2 } from "lucide-react";
import React from "react";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1); // remove #
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
          <Code2 className="h-7 w-7" />
          <span className="text-xl font-bold">My Digital Story</span>
        </Link>

        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="text-foreground hover:text-accent hover:bg-accent/10">
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card">
              <div className="flex flex-col space-y-4 p-6">
                <Link href="#" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-2 text-primary mb-4">
                   <Code2 className="h-7 w-7" />
                  <span className="text-xl font-bold">My Digital Story</span>
                </Link>
                {navItems.map((item) => (
                  <Button key={item.label} variant="ghost" className="w-full justify-start text-lg" asChild>
                     <Link href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="text-foreground hover:text-accent">
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
