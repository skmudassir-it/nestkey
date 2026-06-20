import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight, faShield, faHandshake, faEye,
  faEnvelope, faPhone
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "About NestKey Property Management",
  description: "Learn about our team, our values, and our commitment to professional property management.",
};

const values = [
  { icon: faShield, title: "Integrity", description: "We operate with complete transparency, earning trust through honest communication and ethical practices." },
  { icon: faHandshake, title: "Partnership", description: "We view every client relationship as a partnership, working together to achieve your property goals." },
  { icon: faEye, title: "Excellence", description: "We set high standards for ourselves and our contractors, delivering consistent quality in everything we do." },
];

const team = [
  { name: "Michael Torres", role: "Founder & CEO", initials: "MT" },
  { name: "Amanda Lee", role: "Director of Operations", initials: "AL" },
  { name: "David Park", role: "Senior Property Manager", initials: "DP" },
  { name: "Jessica Chen", role: "Tenant Relations Lead", initials: "JC" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">About Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Protecting Investments,<br />
              <span className="text-primary">Building Communities</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Founded in 2010, NestKey Property Management has grown from managing a handful of single-family homes to overseeing 350+ properties across the Pacific Northwest. Our mission remains the same: provide exceptional property management that protects owner investments while creating great living and working spaces for tenants.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  NestKey was born from a simple observation: property owners deserve better. After years in real estate, our founder Michael Torres saw how many property management companies prioritized their own fees over owner returns and tenant satisfaction.
                </p>
                <p>
                  Starting with just three properties in Portland, Michael built a company centered on transparency, communication, and results. Word spread quickly. Owners appreciated the detailed monthly reports. Tenants valued the responsive maintenance team. Contractors respected the fair, consistent expectations.
                </p>
                <p>
                  Today, NestKey manages a diverse portfolio of residential and commercial properties across Oregon and Washington. Our team of 12 dedicated professionals brings expertise in property law, financial management, maintenance coordination, and tenant relations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl font-extrabold text-primary mb-2">15+</div>
                  <div className="text-lg font-semibold text-foreground">Years of Excellence</div>
                  <div className="text-sm text-muted-foreground mt-1">Since 2010</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4" variant="secondary">Our Values</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">What Drives Us</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} className="glass-card text-center">
                <CardContent className="p-8">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-5">
                    <FontAwesomeIcon icon={v.icon} className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4" variant="secondary">Our Team</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Meet the NestKey Team</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <Card key={m.name} className="glass-card text-center">
                <CardContent className="p-6">
                  <div className="size-20 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">{m.initials}</span>
                  </div>
                  <h3 className="font-semibold">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-primary text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Ready to experience professional property management? We&apos;d love to discuss how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg" variant="secondary">
                Contact Us <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
