import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PackagesPage = () => {
  useScrollAnimation();
  
  const packages = [
    {
      name: "4 Blow Dries",
      price: "£135",
      originalPrice: "£175",
      icon: <Sparkles className="h-6 w-6" />,
      popular: false,
      description: "MONDAY - THURSDAY 10-4pm. Treat yourself to flawless hair with our exclusive blow dry package!",
      services: [
        "4 luxurious blow dries",
        "Professional styling",
        "Valid Monday-Thursday 10am-4pm",
        "Perfect for monthly maintenance"
      ],
      duration: "Monthly package",
      savings: "£40"
    },
    {
      name: "Party Glam Package",
      price: "£120",
      originalPrice: "",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      description: "Perfect for everyone preparing for Xmas parties and special occasions",
      services: [
        "Party Glam Makeup (1 hr 20 mins)",
        "Tatti Lashes (5 mins)",
        "Kérastase Treatment (1 hour)",
        "Special Occasion Hair Style (1 hr 30 mins)"
      ],
      duration: "4 hours total",
      savings: ""
    },
    {
      name: "Full Head Colour Package",
      price: "£185",
      originalPrice: "",
      icon: <Sparkles className="h-6 w-6" />,
      popular: true,
      description: "Receive a free Kérastase hair treatment worth £50 with full head colour",
      services: [
        "Full Head Colour (40 mins - L'Oréal)",
        "Trim Cut & Curly Blow Dry (1 hr 10 mins)",
        "FREE Kérastase Fusio Dose treatment (30 mins)"
      ],
      duration: "2 hours 20 mins",
      savings: "Save £50"
    },
    {
      name: "Hot Stone & FKZ Facial",
      price: "£150",
      originalPrice: "",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      description: "Hot stone massage with our signature deep cleansing facial",
      services: [
        "Hot Stones Massage (1 hr 10 mins)",
        "FKZ Signature Facial (1 hour)",
        "FREE Head Massage (25 mins)"
      ],
      duration: "2 hours 35 mins",
      savings: ""
    },
    {
      name: "Hot Stones & Lymphatic Drainage with Spa Facial",
      price: "£140",
      originalPrice: "",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      description: "Complete relaxation package - massages should be done on different days",
      services: [
        "Hot Stones Massage (1 hr 10 mins)",
        "Lymphatic Drainage (1 hr 10 mins - 1 Area)",
        "FREE Smooth & Revitalise Facial (1 hr 20 mins)"
      ],
      duration: "Multi-session package",
      savings: ""
    },
    {
      name: "Lymphatic Drainage & Foot Massage with Spa Facial",
      price: "£100",
      originalPrice: "",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      description: "Detoxifying massage package - massages should be done on different days",
      services: [
        "Lymphatic Drainage (1 hr 10 mins - 1 Area)",
        "Foot Massage (40 mins)",
        "FREE Smooth & Glow Facial (1 hr 20 mins)"
      ],
      duration: "Multi-session package",
      savings: ""
    },
    {
      name: "Lux Manicure & Pedicure",
      price: "£80",
      originalPrice: "",
      icon: <Sparkles className="h-6 w-6" />,
      popular: false,
      description: "Pamper yourself with full luxury mani & pedi with shellac/gel",
      services: [
        "Lux Manicure with shellac (1 hr 10 mins)",
        "Lux Pedicure with shellac (1 hr 20 mins)",
        "Professional cuticle care",
        "Note: Does NOT include gel removal"
      ],
      duration: "2 hours 30 mins",
      savings: ""
    },
    {
      name: "1ml Lip Filler + 1ml Chin Filler",
      price: "£190",
      originalPrice: "",
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      description: "Transform your look - receive 2ml filler in total",
      services: [
        "Lip filler 1ml (55 mins)",
        "Chin filler 1ml (55 mins)",
        "Professional dermal fillers"
      ],
      duration: "1 hour 50 mins",
      savings: ""
    },
    {
      name: "BIAB with French + Shellac Toes",
      price: "£70",
      originalPrice: "",
      icon: <Sparkles className="h-6 w-6" />,
      popular: false,
      description: "BIAB on natural nails with French design plus shellac toes",
      services: [
        "BIAB - short/medium (1 hr 15 mins)",
        "French Mani design (20 mins)",
        "Gel polish toes - no removal (40 mins)",
        "French Pedi design (15 mins)",
        "Note: Removal NOT included"
      ],
      duration: "2 hours 30 mins",
      savings: ""
    },
    {
      name: "Gel Hands + Gel Toes (with removal)",
      price: "£58",
      originalPrice: "",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      description: "Long-lasting, glossy, chip resistant nails with removal",
      services: [
        "Gel removal + Gel Toes (1 hour)",
        "Gel removal + Gel hands (1 hr 10 mins)",
        "Cuticle care and shaping"
      ],
      duration: "2 hours 10 mins",
      savings: ""
    },
    {
      name: "Gel Hands and Toes",
      price: "£48",
      originalPrice: "",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      description: "Long-lasting, glossy nails for both hands and feet",
      services: [
        "Gel polish toes (40 mins)",
        "Gel polish hands - shellac (1 hour)",
        "Shaping and cuticle care",
        "Note: Does NOT include removal"
      ],
      duration: "1 hour 40 mins",
      savings: ""
    },
    {
      name: "LVL + Brow Lamination",
      price: "£75",
      originalPrice: "",
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      description: "Gorgeously curled lashes and laminated brows with tint",
      services: [
        "Eyelash Lift (LVL) with Tint (1 hour)",
        "Brow lamination with Tint + thread (45 mins)",
        "Choose threading or waxing"
      ],
      duration: "1 hour 45 mins",
      savings: ""
    },
    {
      name: "LVL + Brow Lamination (no tint/thread)",
      price: "£65",
      originalPrice: "",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      description: "Gorgeous lifted lashes and laminated brows - basic package",
      services: [
        "Brow lamination (35 mins)",
        "Eyelash Lift (LVL) - No tint (35 mins)",
        "Note: Tint and thread/wax NOT included"
      ],
      duration: "1 hour 10 mins",
      savings: ""
    },
    {
      name: "LVL + Brow Thread & Tint",
      price: "£45",
      originalPrice: "",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      description: "Gorgeous lifted lashes and freshly shaped brows with tinting",
      services: [
        "Eyelash Lift (LVL) with Tint (1 hour)",
        "Brow Threading (25 mins)",
        "Professional tinting for both"
      ],
      duration: "1 hour 25 mins",
      savings: ""
    },
    {
      name: "Express Manicure + Pedicure with Polish/Shellac",
      price: "£65",
      originalPrice: "",
      icon: <Sparkles className="h-6 w-6" />,
      popular: false,
      description: "Quick service with choice of normal polish or shellac",
      services: [
        "Express Manicure (35 mins)",
        "Express Pedicure (30 mins)",
        "Gel polish hands - shellac (1 hour)",
        "Gel polish toes (40 mins)"
      ],
      duration: "2 hours 45 mins",
      savings: ""
    },
    {
      name: "Express Manicure + Pedicure",
      price: "£45",
      originalPrice: "",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      description: "Cuticle cleaning, shaping, hard skin removal and massage",
      services: [
        "Express Manicure (35 mins)",
        "Express Pedicure (30 mins)",
        "Relaxing massage to finish",
        "Note: No polish or shellac included"
      ],
      duration: "1 hour 5 mins",
      savings: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
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
              <div className="text-center mb-16 animate-on-scroll">
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
                    className={`relative p-8 rounded-xl shadow-elegant transition-all duration-300 hover:shadow-luxury animate-on-scroll hover-scale flex flex-col ${
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

                    <ul className="space-y-3 mb-8 flex-grow">
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
                        Book Now
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
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h2 className="text-4xl font-bold mb-8">
                Why Choose Our <span className="luxury-gradient">Packages?</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center animate-on-scroll">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center hover-scale">
                    <Crown className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Premium Value</h3>
                  <p className="text-muted-foreground">
                    Save significantly compared to booking individual services
                  </p>
                </div>
                <div className="text-center animate-on-scroll">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center hover-scale">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Complete Experience</h3>
                  <p className="text-muted-foreground">
                    Carefully curated services for a cohesive beauty transformation
                  </p>
                </div>
                <div className="text-center animate-on-scroll">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center hover-scale">
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
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
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