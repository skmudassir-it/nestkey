import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding, faUserCheck, faWrench, faFileInvoiceDollar,
  faChartLine, faClipboardCheck, faArrowRight, faStar,
  faShield, faHeadset, faHome
} from "@fortawesome/free-solid-svg-icons";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "NestKey Property Management — Trusted Property Care",
};

const services = [
  { icon: faBuilding, title: "Residential Management", description: "Full-service management for single-family homes, condos, and multi-unit properties.", href: "/services/residential-management" },
  { icon: faBuilding, title: "Commercial Management", description: "Professional management for office, retail, and industrial properties.", href: "/services/commercial-management" },
  { icon: faUserCheck, title: "Tenant Screening", description: "Comprehensive background checks, credit reports, and rental history verification.", href: "/services/tenant-screening" },
  { icon: faWrench, title: "Maintenance & Repairs", description: "24/7 maintenance coordination with vetted, licensed contractors.", href: "/services/maintenance-coordination" },
  { icon: faFileInvoiceDollar, title: "Rent Collection", description: "Automated rent collection, late fee enforcement, and secure online payments.", href: "/services/rent-collection" },
  { icon: faChartLine, title: "Financial Reporting", description: "Monthly statements, annual tax reports, and transparent owner portals.", href: "/services/financial-reporting" },
];

const stats = [
  { value: "350+", label: "Properties Managed" },
  { value: "98%", label: "Occupancy Rate" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const testimonials = [
  { quote: "NestKey transformed how I manage my properties. Their team is professional, responsive, and truly cares about my investment.", author: "Sarah Mitchell", role: "Portfolio Owner, 12 Units", stars: 5 },
  { quote: "Best property management company I've worked with in 20 years of real estate investing. Their reporting is crystal clear.", author: "James Crawford", role: "Commercial Property Owner", stars: 5 },
  { quote: "The tenant screening process alone saves me thousands. Zero evictions since switching to NestKey three years ago.", author: "Robert Chen", role: "Multi-Family Owner, 8 Units", stars: 5 },
  { quote: "Their maintenance team is incredible. Issues get resolved fast, and the work quality is consistently excellent.", author: "Lisa Park", role: "Single-Family Homeowner", stars: 5 },
  { quote: "Switching to NestKey was the best business decision I made. My properties have never performed better.", author: "David Torres", role: "Real Estate Investor", stars: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <Badge className="mb-6 text-sm px-4 py-1.5 bg-white/10 text-white border-white/20">
              #1 Property Management in the Pacific Northwest
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Your Property,<br />
              <span className="text-primary">Professionally Managed</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              From tenant screening to maintenance to financial reporting &mdash; we handle everything so you can enjoy passive income without the stress.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="text-base px-8">
                  Get a Free Consultation
                  <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button size="lg" variant="outline" className="text-base px-8 border-white/30 text-white hover:bg-white/10">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4" variant="secondary">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Complete Property Management
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to maximize your property&apos;s value and minimize your stress.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link key={svc.title} href={svc.href}>
                <Card className="glass-card h-full transition-shadow hover:shadow-lg cursor-pointer group">
                  <CardHeader>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-3">
                      <FontAwesomeIcon icon={svc.icon} className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{svc.title}</CardTitle>
                    <CardDescription>{svc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-medium text-primary group-hover:underline">
                      Learn more <FontAwesomeIcon icon={faArrowRight} className="size-3 ml-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">Why NestKey</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                We Protect What Matters Most
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Managing properties isn&apos;t just about collecting rent &mdash; it&apos;s about protecting your investment, building relationships with tenants, and maximizing long-term returns.
              </p>
              <div className="space-y-5">
                {[
                  { icon: faShield, title: "Licensed & Insured", desc: "Fully licensed property managers with comprehensive liability coverage." },
                  { icon: faHeadset, title: "24/7 Owner Support", desc: "Direct line to your dedicated property manager, any time of day." },
                  { icon: faHome, title: "Local Expertise", desc: "Deep knowledge of local markets, regulations, and contractor networks." },
                  { icon: faChartLine, title: "Transparent Reporting", desc: "Real-time owner portal with monthly financials and property updates." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <FontAwesomeIcon icon={item.icon} className="size-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="w-48 h-48 glass rounded-2xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faBuilding} className="size-16 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4" variant="secondary">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Trusted by Property Owners
            </h2>
            <p className="text-muted-foreground text-lg">
              See what our clients say about working with NestKey.
            </p>
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-primary to-blue-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to Simplify Property Management?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a free consultation and discover how NestKey can maximize your property&apos;s performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg" variant="secondary" className="text-base px-8">
                Get Started Today
                <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing" className="inline-flex">
              <Button size="lg" variant="outline" className="text-base px-8 border-white/30 text-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
