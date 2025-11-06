import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-serif font-bold">
              Luxe<span className="text-accent">Design</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Transforming spaces into extraordinary experiences through innovative interior design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/commercial"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Commercial Design
                </Link>
              </li>
              <li>
                <Link
                  href="/industrial"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Industrial Design
                </Link>
              </li>
              <li>
                <Link
                  href="/residential"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Residential Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail size={16} />
                <span>info@luxedesign.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin size={16} />
                <span>123 Design Street, NY</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} LuxeDesign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
