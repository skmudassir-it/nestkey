import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description: "Transparent pricing for our property management services. No hidden fees, no surprises.",
};

const plans = [
  {
    name: "Essential",
    price: "8%",
    description: "Core management for single properties",
    popular: false,
    features: [
      "Tenant placement & screening",
      "Rent collection",
      "Maintenance coordination",
      "Monthly financial statements",
      "Annual property inspection",
      "Online owner portal",
      "Lease administration",
    ],
  },
  {
    name: "Professional",
    price: "10%",
    description: "Full-service for multi-property portfolios",
    popular: true,
    features: [
      "Everything in Essential",
      "Quarterly property inspections",
      "24/7 emergency response",
      "Eviction processing",
      "Vendor bid management",
      "Annual tax preparation docs",
      "Dedicated property manager",
      "Marketing & advertising",
    ],
  },
  {
    name: "Commercial",
    price: "Custom",
    description: "Tailored for office, retail & industrial",
    popular: false,
    features: [
      "Everything in Professional",
      "CAM reconciliation",
      "Lease negotiation",
      "Capital improvement planning",
      "Building maintenance programs",
      "Tenant improvement coordination",
      "Risk management",
      "Custom financial reporting",
    ],
  },
];

const faqs = [
  { q: "What does the management fee cover?", a: "Our management fee covers day-to-day operations including rent collection, tenant communication, maintenance coordination, financial reporting, and lease administration. Leasing fees for new tenant placement are separate." },
  { q: "Are there any hidden fees?", a: "No. We pride ourselves on transparent pricing. All fees are clearly outlined in our management agreement. There are no surprise charges or hidden costs." },
  { q: "How quickly can you place a tenant?", a: "On average, we place qualified tenants within 14-21 days of listing. This includes marketing, showings, application processing, and comprehensive screening." },
  { q: "Can I switch plans later?", a: "Yes. You can upgrade or change your service level at any time. We'll work with you to find the right plan as your portfolio grows." },
  { q: "Do you handle evictions?", a: "Yes. The Professional and Commercial plans include eviction processing. Our team handles all legal documentation and court coordination in full compliance with applicable laws." },
  { q: "How do I access my financial reports?", a: "All owners receive access to our secure online portal where you can view real-time financial data, download monthly statements, and access tax documents 24/7." },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Transparent Pricing
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Simple, straightforward pricing with no hidden fees. Choose the plan that fits your portfolio.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className={`glass-card relative ${plan.popular ? "ring-2 ring-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-3 mb-1">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground text-sm"> /mo rent</span>}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <FontAwesomeIcon icon={faCheck} className="size-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full inline-flex">
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      Get Started <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg className="size-4 transition-transform group-open:rotate-180 flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
