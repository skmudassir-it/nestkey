import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding, faUserCheck, faWrench, faFileInvoiceDollar,
  faChartLine, faClipboardCheck, faArrowRight, faCheckCircle, faGavel
} from "@fortawesome/free-solid-svg-icons";

interface ServiceData {
  title: string;
  description: string;
  longDescription: string;
  icon: typeof faBuilding;
  image: string;
  features: { title: string; description: string }[];
  benefits: string[];
}

const services: Record<string, ServiceData> = {
  "residential-management": {
    title: "Residential Property Management",
    description: "Full-service management for all types of residential properties.",
    longDescription: "We manage single-family homes, condominiums, townhouses, and multi-unit properties with a focus on maximizing occupancy rates and rental income while minimizing owner involvement. Our comprehensive approach covers every aspect of residential property management.",
    icon: faBuilding,
    image: "/images/services/residential-management.svg",
    features: [
      { title: "Tenant Placement", description: "Marketing, showings, application processing, and comprehensive tenant screening to find qualified renters." },
      { title: "Rent Collection", description: "Automated monthly rent collection with online payment options, late fee enforcement, and direct owner deposits." },
      { title: "Maintenance", description: "24/7 emergency response and routine maintenance coordination through our network of vetted contractors." },
      { title: "Inspections", description: "Move-in, move-out, and quarterly property inspections with detailed photo documentation." },
      { title: "Legal Compliance", description: "Ensuring your property meets all local, state, and federal housing regulations." },
      { title: "Financial Reporting", description: "Monthly owner statements, annual tax documents, and real-time access to your financial dashboard." },
    ],
    benefits: ["Higher occupancy rates", "Quality tenant retention", "Reduced vacancy periods", "Maximized rental income", "Peace of mind"],
  },
  "commercial-management": {
    title: "Commercial Property Management",
    description: "Professional management for office, retail, and industrial properties.",
    longDescription: "We specialize in managing office buildings, retail centers, industrial warehouses, and mixed-use developments. Our commercial team understands the unique demands of business tenants and the importance of maintaining professional, fully-operational facilities.",
    icon: faBuilding,
    image: "/images/services/commercial-management.svg",
    features: [
      { title: "Lease Administration", description: "Managing lease terms, renewals, rent escalations, and CAM reconciliation." },
      { title: "Tenant Relations", description: "Proactive communication with business tenants to ensure satisfaction and retention." },
      { title: "Building Maintenance", description: "Preventative maintenance programs for HVAC, electrical, plumbing, and structural systems." },
      { title: "Vendor Management", description: "Coordinating cleaning, security, landscaping, and specialized commercial vendors." },
      { title: "Financial Management", description: "Detailed CAM tracking, operating expense management, and comprehensive owner reporting." },
      { title: "Risk Management", description: "Insurance coordination, safety compliance, and emergency preparedness planning." },
    ],
    benefits: ["Stable tenant retention", "Optimized operating costs", "Regulatory compliance", "Professional asset management", "Increased property value"],
  },
  "tenant-screening": {
    title: "Tenant Screening & Placement",
    description: "Comprehensive background checks to find reliable, long-term tenants.",
    longDescription: "Finding the right tenant is the single most important factor in successful property management. Our thorough screening process evaluates credit history, criminal background, rental history, employment, and income to identify qualified, reliable tenants who will treat your property with respect.",
    icon: faUserCheck,
    image: "/images/services/tenant-screening.svg",
    features: [
      { title: "Credit Analysis", description: "Full credit report review including FICO score, payment history, and debt-to-income ratio." },
      { title: "Background Checks", description: "National criminal database search, sex offender registry check, and terrorist watch list screening." },
      { title: "Rental History", description: "Verification with previous landlords, including payment history, lease compliance, and property care." },
      { title: "Employment Verification", description: "Confirmation of current employment, position, and income through direct employer contact." },
      { title: "Income Qualification", description: "Ensuring household income meets our 3x monthly rent minimum requirement." },
      { title: "Fair Housing Compliance", description: "All screenings conducted in strict compliance with Fair Housing Act requirements." },
    ],
    benefits: ["Reduced eviction risk", "Longer tenant retention", "On-time rent payments", "Property care assurance", "Legal compliance"],
  },
  "maintenance-coordination": {
    title: "Maintenance & Repairs",
    description: "24/7 maintenance with vetted, licensed contractors.",
    longDescription: "Our maintenance coordination service ensures your property stays in excellent condition. We maintain relationships with a network of pre-screened, licensed, and insured contractors who provide quality work at competitive rates. From emergency repairs to routine maintenance, we handle it all.",
    icon: faWrench,
    image: "/images/services/maintenance-coordination.svg",
    features: [
      { title: "24/7 Emergency Response", description: "Round-the-clock availability for urgent issues like water leaks, heating failures, and security concerns." },
      { title: "Preventative Maintenance", description: "Scheduled HVAC servicing, gutter cleaning, pest control, and seasonal maintenance programs." },
      { title: "Vetted Contractors", description: "All contractors are licensed, insured, background-checked, and evaluated for quality and reliability." },
      { title: "Cost Optimization", description: "Competitive bidding for major projects and negotiated rates with preferred vendors." },
      { title: "Quality Assurance", description: "Post-work inspections to ensure repairs meet our quality standards before payment is released." },
      { title: "Digital Tracking", description: "Online maintenance portal for tenants to submit requests with photo upload and status tracking." },
    ],
    benefits: ["Faster response times", "Lower repair costs", "Quality workmanship", "Extended asset life", "Tenant satisfaction"],
  },
  "rent-collection": {
    title: "Rent Collection",
    description: "Automated collection with secure online payments.",
    longDescription: "Our streamlined rent collection system makes paying rent easy for tenants and receiving funds simple for owners. With automated reminders, multiple payment options, and strict late fee enforcement, we maintain consistent cash flow for your investment.",
    icon: faFileInvoiceDollar,
    image: "/images/services/rent-collection.svg",
    features: [
      { title: "Online Payments", description: "Secure tenant portal accepting ACH transfers, credit/debit cards, and e-checks." },
      { title: "Automated Reminders", description: "Scheduled payment reminders via email and SMS before and on the due date." },
      { title: "Late Fee Enforcement", description: "Consistent application of late fees per lease terms, with graduated escalation procedures." },
      { title: "Direct Deposits", description: "Owner funds deposited directly to your bank account monthly with detailed breakdown." },
      { title: "Payment Tracking", description: "Complete payment history available in your owner portal with exportable reports." },
      { title: "Delinquency Management", description: "Professional handling of late payments with structured communication and payment plans." },
    ],
    benefits: ["Consistent cash flow", "Reduced delinquency", "Automated processing", "Clear paper trail", "Owner convenience"],
  },
  "financial-reporting": {
    title: "Financial Reporting",
    description: "Transparent monthly statements and real-time owner portal.",
    longDescription: "Stay informed about your property's financial performance with our comprehensive reporting system. Access detailed monthly statements, annual tax preparation documents, and real-time financial data through your personalized owner portal.",
    icon: faChartLine,
    image: "/images/services/financial-reporting.svg",
    features: [
      { title: "Monthly Statements", description: "Detailed income and expense reports delivered by the 15th of each month." },
      { title: "Annual Tax Reports", description: "Year-end summary with all income, expenses, and depreciation information for tax preparation." },
      { title: "Profit & Loss", description: "Real-time P&L tracking showing net operating income and cash flow analysis." },
      { title: "Owner Portal", description: "24/7 online access to financial documents, property reports, and maintenance history." },
      { title: "1099 Preparation", description: "Annual 1099-MISC forms prepared for all contractors and service providers." },
      { title: "Budget Planning", description: "Annual operating budget creation with capital expenditure forecasting." },
    ],
    benefits: ["Tax-ready documents", "Performance visibility", "Informed decisions", "Audit preparedness", "Time savings"],
  },
  "property-inspections": {
    title: "Property Inspections",
    description: "Regular inspections to protect your investment.",
    longDescription: "Regular property inspections are essential for identifying maintenance issues early, ensuring lease compliance, and protecting your investment. Our thorough inspection program uses standardized checklists and photo documentation for complete transparency.",
    icon: faClipboardCheck,
    image: "/images/services/property-inspections.svg",
    features: [
      { title: "Move-In Inspections", description: "Comprehensive documentation of property condition before tenant occupancy with photos." },
      { title: "Move-Out Inspections", description: "Detailed comparison to move-in condition for accurate security deposit assessment." },
      { title: "Quarterly Drive-Bys", description: "External property condition checks to identify visible issues early." },
      { title: "Annual Comprehensive", description: "Full interior and exterior inspection with detailed written report and photos." },
      { title: "Lease Compliance", description: "Verification of lease terms including occupancy limits, pet policies, and property care." },
      { title: "Photo Documentation", description: "Digital photo archive organized by property and date for easy reference." },
    ],
    benefits: ["Early issue detection", "Lease enforcement", "Deposit protection", "Insurance compliance", "Documented condition"],
  },
  "eviction-assistance": {
    title: "Eviction Assistance",
    description: "Legal-compliant eviction processing when necessary.",
    longDescription: "While we work hard to prevent evictions through careful tenant screening and proactive management, sometimes eviction becomes necessary. Our team handles the entire legal process professionally, ensuring full compliance with all applicable laws while minimizing the timeline and financial impact.",
    icon: faGavel,
    image: "/images/services/eviction-assistance.svg",
    features: [
      { title: "Legal Documentation", description: "Preparation and service of all required notices including pay-or-quit, cure-or-quit, and unlawful detainer." },
      { title: "Court Coordination", description: "Filing with appropriate court, managing court dates, and coordinating with legal counsel." },
      { title: "Timely Processing", description: "Following strict timelines to ensure no unnecessary delays in the eviction process." },
      { title: "Compliance Assurance", description: "All procedures follow federal, state, and local eviction laws and regulations." },
      { title: "Owner Representation", description: "Representing owner interests throughout the legal process with regular status updates." },
      { title: "Turnover Management", description: "Coordinating property reclamation, cleaning, and re-listing immediately after possession." },
    ],
    benefits: ["Legal protection", "Minimized timeline", "Professional handling", "Reduced stress", "Faster re-rental"],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services" className="inline-flex">
            <Button>View All Services</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">Service Detail</Badge>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {service.longDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.benefits.map((b) => (
                  <Badge key={b} variant="secondary" className="text-xs bg-white/10 text-slate-200 border-white/20">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-3 mr-1" /> {b}
                  </Badge>
                ))}
              </div>
              <Link href="/contact" className="inline-flex">
                <Button size="lg">
                  Get Started <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex-shrink-0">
              <div className="w-72 h-72 glass rounded-3xl flex items-center justify-center">
                <FontAwesomeIcon icon={service.icon} className="size-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feat) => (
              <Card key={feat.title} className="glass-card h-full">
                <CardHeader>
                  <CardTitle className="text-base">{feat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us today to discuss how {service.title.toLowerCase()} can benefit your property.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" variant="secondary">
              Schedule a Consultation <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
