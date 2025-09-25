import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Sparkles } from "lucide-react";

const PackagesPage = () => {
  const packages = [
    {
      name: "Classic Beauty",
      price: "£180",
      originalPrice: "£220",
      icon: <Sparkles className="h-6 w-6" />,
      popular: false,
      description: "Perfect for those new to luxury beauty treatments",
      services: [
        "Professional haircut & style",
        "Classic manicure",
        "Express facial treatment",
        "Complimentary refreshments"
      ],
      duration: "3 hours",
      savings: "£40"
    },
    {
      name: "Luxury Experience",
      price: "£320",
      originalPrice: "£380",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      description: "Our most popular comprehensive beauty package",
      services: [
        "Cut, color & professional styling",
        "Premium facial treatment",
        "Gel manicure & pedicure",
        "Champagne & luxury amenities",
        "Personal consultation"
      ],
      duration: "5 hours",
      savings: "£60"
    },
    {
      name: "Bridal Package",
      price: "£450",
      originalPrice: "£520",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      description: "Complete bridal beauty package for your special day",
      services: [
        "Wedding hair styling",
        "Professional makeup",
        "Luxury facial (1 week before)",
        "Manicure & pedicure",
        "Trial session included"
      ],
      duration: "Full day",
      savings: "£70"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Beauty <span className="luxury-gradient">Packages</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover our carefully curated beauty packages that combine multiple services 
                for the ultimate luxury experience at exceptional value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" asChild>
                  <a href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722" target="_blank" rel="noopener noreferrer">
                    Book Package Now
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+123456789">
                    Call for Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Choose Your <span className="luxury-gradient">Experience</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Each package is designed to provide maximum value while delivering 
                  an unforgettable luxury beauty experience.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
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
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
                        {pkg.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                        <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                        <span>Duration: {pkg.duration}</span>
                        <span className="text-green-600 font-semibold">Save {pkg.savings}</span>
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
                      variant={pkg.popular ? "luxury" : "outline"} 
                      className="w-full"
                      asChild
                    >
                      <a href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722" target="_blank" rel="noopener noreferrer">
                        Book {pkg.name}
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                Why Choose Our <span className="luxury-gradient">Packages?</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Crown className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Premium Value</h3>
                  <p className="text-muted-foreground">
                    Save significantly compared to booking individual services
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Complete Experience</h3>
                  <p className="text-muted-foreground">
                    Carefully curated services for a cohesive beauty transformation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
                  <p className="text-muted-foreground">
                    Our skilled professionals ensure every detail is perfect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to <span className="luxury-gradient">Transform?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book your package today and experience the difference our comprehensive 
                beauty treatments can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" asChild>
                  <a href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722" target="_blank" rel="noopener noreferrer">
                    Book Your Package
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">
                    Get Custom Package
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PackagesPage;