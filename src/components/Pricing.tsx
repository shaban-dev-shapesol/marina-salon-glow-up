import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Star, Crown, Sparkles } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "./BookingModal";

export const Pricing = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const hairServices = [
    { name: "Cut & Blow Dry", price: "£45-65", description: "Professional styling with premium products" },
    { name: "Color & Highlights", price: "£85-150", description: "Full color transformation with expert color matching" },
    { name: "Balayage/Ombre", price: "£120-200", description: "Hand-painted color for natural dimension" },
    { name: "Hair Treatment", price: "£35-55", description: "Deep conditioning and repair treatments" },
    { name: "Wedding Hair", price: "£150-250", description: "Complete bridal styling package" },
    { name: "Extensions", price: "£200-400", description: "Premium hair extensions and application" }
  ];

  const beautyServices = [
    { name: "Classic Facial", price: "£60-80", description: "Deep cleansing and rejuvenating treatment" },
    { name: "Anti-Aging Facial", price: "£85-120", description: "Advanced skincare with luxury products" },
    { name: "Chemical Peel", price: "£100-150", description: "Professional skin resurfacing treatment" },
    { name: "Microdermabrasion", price: "£75-95", description: "Exfoliating treatment for smooth skin" },
    { name: "Eye Treatment", price: "£45-65", description: "Specialized care for delicate eye area" },
    { name: "Full Facial Package", price: "£150-200", description: "Complete skincare experience" }
  ];

  const nailServices = [
    { name: "Classic Manicure", price: "£25-35", description: "Traditional nail care and polish" },
    { name: "Gel Manicure", price: "£35-45", description: "Long-lasting gel polish application" },
    { name: "Pedicure", price: "£35-50", description: "Complete foot care and styling" },
    { name: "Nail Art", price: "£15-30", description: "Custom designs and decorative elements" },
    { name: "Acrylic/Extensions", price: "£45-65", description: "Professional nail extensions" },
    { name: "Luxury Spa Package", price: "£80-120", description: "Premium hand and foot treatment" }
  ];

  const packages = [
    {
      name: "Classic Beauty",
      price: "£180",
      originalPrice: "£220",
      icon: <Sparkles className="h-6 w-6" />,
      popular: false,
      services: [
        "Professional haircut & style",
        "Classic manicure",
        "Express facial treatment",
        "Complimentary refreshments"
      ]
    },
    {
      name: "Luxury Experience",
      price: "£320",
      originalPrice: "£380",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      services: [
        "Cut, color & professional styling",
        "Premium facial treatment",
        "Gel manicure & pedicure",
        "Champagne & luxury amenities",
        "Personal consultation"
      ]
    },
    {
      name: "Bridal Package",
      price: "£450",
      originalPrice: "£520",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      services: [
        "Wedding hair styling",
        "Professional makeup",
        "Luxury facial (1 week before)",
        "Manicure & pedicure",
        "Trial session included"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Service <span className="luxury-gradient">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing for premium services. Book your appointment and experience luxury that's worth every penny.
            </p>
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-xl shadow-elegant transition-all duration-300 hover:shadow-luxury ${
                  pkg.popular
                    ? "bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 scale-105"
                    : "bg-card border border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 text-primary">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pkg.popular ? "book" : "elegant"} 
                  className="w-full"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book Package
                </Button>
              </div>
            ))}
          </div>

          {/* Individual Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hair Services */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-center">Hair Services</h3>
              <div className="space-y-4">
                {hairServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold">{service.name}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <span className="font-bold text-primary ml-4">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Beauty Services */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-center">Beauty & Facial</h3>
              <div className="space-y-4">
                {beautyServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold">{service.name}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <span className="font-bold text-primary ml-4">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nail Services */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-center">Nail Care</h3>
              <div className="space-y-4">
                {nailServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold">{service.name}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <span className="font-bold text-primary ml-4">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              All prices are starting from and may vary based on consultation. Book your appointment for a personalized quote.
            </p>
            <Button variant="book" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
};