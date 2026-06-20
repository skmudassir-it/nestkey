import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faKey} className="size-5 text-primary" />
              <span className="text-xl font-bold text-white">
                <span className="text-primary">Nest</span>Key
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional property management services for residential and commercial properties. Protecting your investment, maximizing your returns.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/residential-management" className="hover:text-white transition-colors">Residential Management</Link></li>
              <li><Link href="/services/commercial-management" className="hover:text-white transition-colors">Commercial Management</Link></li>
              <li><Link href="/services/tenant-screening" className="hover:text-white transition-colors">Tenant Screening</Link></li>
              <li><Link href="/services/maintenance-coordination" className="hover:text-white transition-colors">Maintenance & Repairs</Link></li>
              <li><Link href="/services/rent-collection" className="hover:text-white transition-colors">Rent Collection</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-3.5 mt-0.5 text-primary" />
                <span>(555) 234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-3.5 mt-0.5 text-primary" />
                <span>hello@nestkeypm.com</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="size-3.5 mt-0.5 text-primary" />
                <span>123 Business Park Dr, Suite 200<br />Portland, OR 97201</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} NestKey Property Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
