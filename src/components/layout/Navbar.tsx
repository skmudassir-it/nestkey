"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBuilding, faKey } from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faKey} className="size-5 text-primary" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">Nest</span>
              <span className="text-secondary">Key</span>
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="inline-flex ml-3">
              <Button size="sm">
                <FontAwesomeIcon icon={faBuilding} className="size-3 mr-1.5" />
                Get Started
              </Button>
            </Link>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
              <Button variant="ghost" size="icon">
                <FontAwesomeIcon icon={faBars} className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-12">
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" className="inline-flex mt-2" onClick={() => setOpen(false)}>
                  <Button size="sm" className="w-full">Get Started</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
