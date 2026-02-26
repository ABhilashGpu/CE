import { Link } from "react-router-dom";
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-8 w-8" />
              <span className="font-display text-xl font-semibold">CafeEngine</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Blending Quality, Comfort & Efficiency. Your perfect coffee destination for work, study, or relaxation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Menu
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  123 Coffee Street, Downtown,<br />City Center, 10001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">hello@cafeengine.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p>Mon - Fri: 7:00 AM - 10:00 PM</p>
                  <p>Sat - Sun: 8:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} CafeEngine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
