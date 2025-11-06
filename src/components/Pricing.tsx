import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, Star, Crown, Sparkles } from "lucide-react";

export const Pricing = () => {
  useScrollAnimation();

  const hairServices = [
    { name: "Men's Haircut", price: "£39", description: "Professional styling for men" },
    { name: "Restyle Cut & Blow Dry", price: "£70-80", description: "Complete restyle with professional blow dry" },
    { name: "Trim Cut & Blow Dry", price: "£50-70", description: "Fresh trim with straight or curly blow dry" },
    { name: "Children's Haircut", price: "£30-35", description: "Kids haircuts aged 2-12 years" },
    { name: "Hair Extensions", price: "£100-150", description: "Professional hair extensions application" },
    { name: "Dry Hair Cut", price: "£45", description: "Quick trim without wash (up to 1 inch)" }
  ];

  const beautyServices = [
    { name: "Full Head Colour", price: "£95-160", description: "Complete hair color transformation" },
    { name: "Half Head Highlights", price: "£100", description: "Partial highlighting without toner" },
    { name: "Full Head Highlights", price: "£150", description: "Complete highlighting service" },
    { name: "Ombre/Balayage", price: "£160", description: "Hand-painted color technique" },
    { name: "Halo/Money Piece", price: "£40", description: "Face-framing highlights" },
    { name: "Colour Correction", price: "£130", description: "Professional color correction service" }
  ];

  const nailServices = [
    { name: "Express Manicure", price: "£20", description: "Quick nail refresh without polish" },
    { name: "Lux Manicure", price: "£35-40", description: "Luxury manicure with optional shellac" },
    { name: "Gel Polish Hands", price: "£27-35", description: "Long-lasting shellac application" },
    { name: "Express Pedicure", price: "£30", description: "Quick pedicure for busy schedules" },
    { name: "Lux Pedicure", price: "£50-55", description: "Luxury pedicure with optional shellac" },
    { name: "BIAB Extensions", price: "£40-45", description: "Builder gel nail extensions" }
  ];

  const packages = [
    {
      name: "4 Blow Dries",
      price: "£135",
      originalPrice: "£175",
      icon: <Sparkles className="h-6 w-6" />,
      popular: false,
      services: [
        "4 luxurious blow dries",
        "Monday-Thursday 10-4pm",
        "Perfect for monthly maintenance",
        "Save £40 on regular pricing"
      ]
    },
    {
      name: "Party Glam Package",
      price: "£120",
      originalPrice: "£140",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      services: [
        "Party glam makeup with lashes",
        "Kérastase hair treatment",
        "Special occasion hair styling",
        "Perfect for Christmas parties"
      ]
    },
    {
      name: "Full Head Colour Package",
      price: "£185",
      originalPrice: "£235",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      services: [
        "Full head colour",
        "Trim cut & curly blow dry",
        "Free Kérastase treatment (worth £50)",
        "Complete transformation"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Service <span className="luxury-gradient">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing for premium services. Book your appointment and experience luxury that's worth every penny.
            </p>
          </div>

          {/* Individual Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Hair Services */}
            <div className="bg-card rounded-xl p-8 shadow-soft hover-lift transition-all duration-500 animate-on-scroll">
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
            <div className="bg-card rounded-xl p-8 shadow-soft hover-lift transition-all duration-500 animate-on-scroll animate-on-scroll-delay">
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
            <div className="bg-card rounded-xl p-8 shadow-soft hover-lift transition-all duration-500 animate-on-scroll animate-on-scroll-delay-2">
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

          {/* Packages */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-xl shadow-elegant transition-all duration-500 hover:shadow-luxury hover-lift animate-on-scroll flex flex-col ${
                  pkg.popular
                    ? "bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 scale-105"
                    : "bg-card border border-border"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
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

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pkg.popular ? "book" : "elegant"} 
                  className="w-full hover-glow mt-auto"
                  asChild
                >
                  <a href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722" target="_blank" rel="noopener noreferrer">
                    Book Package
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-on-scroll animate-on-scroll-delay-3">
            <p className="text-muted-foreground mb-6">
              All prices are starting from and may vary based on consultation. Book your appointment for a personalized quote.
            </p>
            <Button variant="book" size="lg" className="hover-lift hover-glow" asChild>
              <a href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};