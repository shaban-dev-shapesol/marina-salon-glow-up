import { Heart, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Marina Salon</h3>
            <p className="text-sm opacity-90">
              Professional hair, beauty, and wellness services in the heart of Manchester.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 opacity-70 hover:opacity-100 hover:text-primary transition-colors cursor-pointer" onClick={() => window.open('https://instagram.com/marinasalon', '_blank')} />
              <Facebook className="h-5 w-5 opacity-70 hover:opacity-100 hover:text-primary transition-colors cursor-pointer" onClick={() => window.open('https://facebook.com/marinasalon', '_blank')} />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/services/hair-colouring" className="hover:text-primary transition-colors cursor-pointer">Hair Colouring</Link></li>
              <li><Link to="/services/haircuts" className="hover:text-primary transition-colors cursor-pointer">Haircuts</Link></li>
              <li><Link to="/services/hair-treatment" className="hover:text-primary transition-colors cursor-pointer">Hair Treatment</Link></li>
              <li><Link to="/services/aesthetics" className="hover:text-primary transition-colors cursor-pointer">Aesthetics</Link></li>
              <li><Link to="/services/eyes-brows" className="hover:text-primary transition-colors cursor-pointer">Eyes & Brows</Link></li>
              <li><Link to="/services/nails" className="hover:text-primary transition-colors cursor-pointer">Nails</Link></li>
              <li><Link to="/services/facials" className="hover:text-primary transition-colors cursor-pointer">Facials</Link></li>
              <li><Link to="/services/makeup" className="hover:text-primary transition-colors cursor-pointer">Make-up</Link></li>
              <li><Link to="/services/massages" className="hover:text-primary transition-colors cursor-pointer">Massages</Link></li>
              <li><Link to="/services/waxing" className="hover:text-primary transition-colors cursor-pointer">Waxing</Link></li>
              <li><Link to="/services/threading" className="hover:text-primary transition-colors cursor-pointer">Threading</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer" onClick={() => window.open('https://maps.google.com/?q=3-5+Keepers+Quay,+Manchester', '_blank')}>
                <MapPin className="h-4 w-4" />
                <span>3-5 Keepers Quay, Manchester</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer" onClick={() => window.open('tel:01611234567')}>
                <Phone className="h-4 w-4" />
                <span>0161 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer" onClick={() => window.open('mailto:info@marinasalonbyfkz.co.uk')}>
                <Mail className="h-4 w-4" />
                <span>info@marinasalonbyfkz.co.uk</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <div className="space-y-1 text-sm opacity-90">
              <div className="flex justify-between">
                <span>Mon-Fri</span>
                <span>9AM-8PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9AM-6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10AM-5PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-70 flex items-center justify-center space-x-1">
            <span>© 2024 Marina Salon. </span>
            
            
          </p>
        </div>
      </div>
    </footer>;
};