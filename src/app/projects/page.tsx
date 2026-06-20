import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "Browse our portfolio of managed residential and commercial properties across the Pacific Northwest.",
};

const projects = [
  { name: "Hillside Luxury Apartments", type: "Multi-Family Residential", units: 48, location: "Portland, OR", image: "/images/projects/hillside-luxury.svg", icon: faBuilding },
  { name: "Pearl District Condos", type: "Condo Association", units: 32, location: "Portland, OR", image: "/images/projects/pearl-district.svg", icon: faBuilding },
  { name: "Bridgeport Office Park", type: "Commercial Office", units: 12, location: "Tigard, OR", image: "/images/projects/bridgeport-office.svg", icon: faBuilding },
  { name: "Riverwalk Townhomes", type: "Townhouse Community", units: 24, location: "Vancouver, WA", image: "/images/projects/riverwalk-townhomes.svg", icon: faHome },
  { name: "Cedar Hills Retail", type: "Retail Center", units: 8, location: "Beaverton, OR", image: "/images/projects/cedar-hills.svg", icon: faBuilding },
  { name: "Lakeview Estates", type: "Single-Family Homes", units: 18, location: "Lake Oswego, OR", image: "/images/projects/lakeview-estates.svg", icon: faHome },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">Portfolio</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Properties We Manage
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A selection of residential and commercial properties across the Pacific Northwest that trust NestKey for professional management.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.name} className="glass-card overflow-hidden">
                <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <FontAwesomeIcon icon={project.icon} className="size-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{project.name}</h3>
                      <p className="text-xs text-muted-foreground">{project.type}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 text-xs text-muted-foreground">
                    <span>{project.units} units</span>
                    <span>&middot;</span>
                    <span>{project.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "350+", label: "Properties Managed" },
              { value: "98%", label: "Occupancy Rate" },
              { value: "12", label: "Team Members" },
              { value: "2", label: "States Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
