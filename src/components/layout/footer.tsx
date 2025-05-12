import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-8 px-4 md:px-6 text-center text-muted-foreground">
        <p>&copy; {currentYear} My Digital Story. All rights reserved.</p>
        <p className="text-sm mt-1">Designed with passion.</p>
      </div>
    </footer>
  );
}
