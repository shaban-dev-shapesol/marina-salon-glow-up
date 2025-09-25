import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "Hair Services", link: "/services/hair" },
    { name: "Nails & Beauty", link: "/services/nails" },
    { name: "Facial Treatments", link: "/services/facial" },
    { name: "Eyes & Brows", link: "/services/eyes-brows" },
    { name: "Make-up", link: "/services/makeup" },
    { name: "Massages", link: "/services/massages" },
    { name: "Aesthetics", link: "/services/aesthetics" },
    { name: "Waxing", link: "/services/waxing" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="lg:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <Link 
              to="/" 
              className="text-xl font-bold luxury-gradient"
              onClick={() => setOpen(false)}
            >
              Marina Salon
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-base font-medium hover:text-primary transition-colors">
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 pl-4">
                <Link
                  to="/services"
                  className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.link}
                    className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Link
              to="/contact"
              className="block py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>

          {/* Book Appointment Button */}
          <div className="p-6 border-t">
            <Button
              variant="luxury"
              className="w-full"
              asChild
            >
              <a
                href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};