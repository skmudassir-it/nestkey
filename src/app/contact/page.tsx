"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  if (status === "sent") {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
            <FontAwesomeIcon icon={faCheckCircle} className="size-8" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3">Message Sent!</h1>
          <p className="text-muted-foreground text-lg">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Contact</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to discuss your property management needs? Fill out the form and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                        <Input placeholder="John Smith" value={form.name} onChange={(e) => handleChange("name", e.target.value)} required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Email *</label>
                        <Input type="email" placeholder="john@example.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} required />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Phone</label>
                        <Input type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Service Interest</label>
                        <Select value={form.service} onValueChange={(v: string | null) => handleChange("service", v || "")}>
                          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential Management</SelectItem>
                            <SelectItem value="commercial">Commercial Management</SelectItem>
                            <SelectItem value="tenant-screening">Tenant Screening</SelectItem>
                            <SelectItem value="maintenance">Maintenance & Repairs</SelectItem>
                            <SelectItem value="other">Other / General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message *</label>
                      <Textarea placeholder="Tell us about your property and what you need..." rows={5} value={form.message} onChange={(e) => handleChange("message", e.target.value)} required />
                    </div>
                    <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
                      <FontAwesomeIcon icon={faPaperPlane} className="size-4 mr-2" />
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass-card">
                <CardContent className="p-6 space-y-5">
                  <div className="flex gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <FontAwesomeIcon icon={faPhone} className="size-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Phone</h3>
                      <p className="text-sm text-muted-foreground">(555) 234-5678</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <FontAwesomeIcon icon={faEnvelope} className="size-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Email</h3>
                      <p className="text-sm text-muted-foreground">hello@nestkeypm.com</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="size-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Office</h3>
                      <p className="text-sm text-muted-foreground">123 Business Park Dr, Suite 200<br />Portland, OR 97201</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <FontAwesomeIcon icon={faClock} className="size-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Hours</h3>
                      <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM<br />Emergency 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
