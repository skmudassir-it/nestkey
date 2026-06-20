import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding, faUserCheck, faWrench, faFileInvoiceDollar,
  faChartLine, faClipboardCheck, faArrowRight, faGavel
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Property Management Services",
  description: "Full-service residential and commercial property management. From tenant screening to financial reporting, we handle it all.",
};

interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  icon: typeof faBuilding;
  features: string[];
  image: string;
}

const services: ServiceItem[] = [
  {
    title: "Residential Property Management",
    slug: "residential-management",
    description: "Full-service management for single-family homes, condominiums, townhouses, and multi-unit residential properties.",
    icon: faBuilding,
    image: "/images/services/residential-management.svg",
    features: ["Tenant placement & screening", "Rent collection & enforcement", "Maintenance coordination", "Property inspections", "Financial reporting"],
  },
  {
    title: "Commercial Property Management",
    slug: "commercial-management",
    description: "Professional management for office buildings, retail spaces, industrial properties, and mixed-use developments.",
    icon: faBuilding,
    image: "/images/services/commercial-management.svg",
    features: ["Lease administration", "CAM reconciliation", "Vendor management", "Building maintenance", "Tenant relations"],
  },
  {
    title: "Tenant Screening & Placement",
    slug: "tenant-screening",
    description: "Thorough background screening to place reliable, long-term tenants who pay on time and care for your property.",
    icon: faUserCheck,
    image: "/images/services/tenant-screening.svg",
    features: ["Credit reports & scores", "Criminal background checks", "Rental history verification", "Employment verification", "Income qualification"],
  },
  {
    title: "Maintenance & Repairs",
    slug: "maintenance-coordination",
    description: "24/7 maintenance coordination with our network of vetted, licensed, and insured contractors.",
    icon: faWrench,
    image: "/images/services/maintenance-coordination.svg",
    features: ["24/7 emergency response", "Preventative maintenance", "Licensed contractor network", "Cost-effective solutions", "Quality assurance inspections"],
  },
  {
    title: "Rent Collection",
    slug: "rent-collection",
    description: "Automated rent collection with secure online payments, late fee enforcement, and direct owner deposits.",
    icon: faFileInvoiceDollar,
    image: "/images/services/rent-collection.svg",
    features: ["Online tenant portal", "Automated reminders", "Late fee enforcement", "Direct deposit to owners", "Payment tracking & history"],
  },
  {
    title: "Financial Reporting",
    slug: "financial-reporting",
    description: "Transparent monthly financial statements, annual tax preparation reports, and real-time owner portal access.",
    icon: faChartLine,
    image: "/images/services/financial-reporting.svg",
    features: ["Monthly owner statements", "Annual tax reports", "Profit & loss tracking", "Real-time owner portal", "1099 preparation"],
  },
  {
    title: "Property Inspections",
    slug: "property-inspections",
    description: "Regular property inspections to identify issues early, ensure lease compliance, and protect your investment.",
    icon: faClipboardCheck,
    image: "/images/services/property-inspections.svg",
    features: ["Move-in inspections", "Move-out inspections", "Quarterly drive-bys", "Annual comprehensive reports", "Photo documentation"],
  },
  {
    title: "Eviction Assistance",
    slug: "eviction-assistance",
    description: "Legal-compliant eviction processing when necessary, handling all documentation and court coordination.",
    icon: faGavel,
    image: "/images/services/eviction-assistance.svg",
    features: ["Legal documentation", "Court filing coordination", "Timely processing", "Compliance assurance", "Owner representation"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Our Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Complete Property Management
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Everything you need to maximize your property&apos;s value. From day-to-day operations to long-term strategy.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link key={svc.slug} href={`/services/${svc.slug}`}>
                <Card className="glass-card h-full transition-shadow hover:shadow-lg cursor-pointer group">
                  <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                      <FontAwesomeIcon icon={svc.icon} className="size-4" />
                    </div>
                    <CardTitle className="text-lg">{svc.title}</CardTitle>
                    <CardDescription>{svc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-medium text-primary group-hover:underline inline-flex items-center gap-1">
                      View Details <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
