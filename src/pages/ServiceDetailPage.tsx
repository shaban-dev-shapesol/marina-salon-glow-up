import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstagramSection } from "@/components/InstagramSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Scissors, Sparkles, Eye, Hand, Flower, Palette, Heart, Zap, Clock, Star, ArrowLeft, Brush, Wrench, Wind } from "lucide-react";
import hairService from "@/assets/hair-service.jpg";
import haircutsService from "@/assets/haircuts-service.jpg";
import hairColoringService from "@/assets/hair-coloring-service.jpg";
import hairTreatmentService from "@/assets/hair-treatment-service.jpg";
import nailService from "@/assets/nail-service.jpg";
import facialService from "@/assets/facial-service.jpg";
import eyesBrowsService from "@/assets/eyes-brows-service.jpg";
import makeupService from "@/assets/makeup-service.jpg";
import massageService from "@/assets/massage-service.jpg";
import aestheticsService from "@/assets/aesthetics-service.jpg";
import waxingService from "@/assets/waxing-service.jpg";
import threadingService from "@/assets/threading-service.jpg";

const serviceData = {
  "hair-colouring": {
    icon: Brush,
    title: "Hair Colouring",
    description: "Expert hair coloring and creative color techniques using premium products and latest fashion trends.",
    image: hairColoringService,
    duration: "90-180 min",
    startingPrice: "£75",
    services: [
      { name: "Full Color", price: "£75", duration: "120 min", description: "Complete hair color transformation" },
      { name: "Highlights", price: "£85", duration: "150 min", description: "Professional highlighting technique" },
      { name: "Balayage", price: "£95", duration: "180 min", description: "Hand-painted natural highlights" },
      { name: "Color Correction", price: "£120", duration: "180 min", description: "Expert color correction and repair" },
      { name: "Root Touch-up", price: "£45", duration: "90 min", description: "Maintain your color between visits" },
      { name: "Fashion Colors", price: "£85", duration: "150 min", description: "Bold and creative fashion colors" }
    ],
    benefits: [
      "Premium organic color products",
      "Expert color consultation",
      "Color protection aftercare",
      "Color guarantee included"
    ]
  },
  haircuts: {
    icon: Scissors,
    title: "Haircuts",
    description: "Precision cuts tailored to your style and face shape by our expert stylists.",
    image: haircutsService,
    duration: "45-90 min",
    startingPrice: "£35",
    services: [
      { name: "Cut & Blow Dry", price: "£45", duration: "60 min", description: "Professional cut with styling finish" },
      { name: "Restyle", price: "£55", duration: "75 min", description: "Complete style transformation" },
      { name: "Trim", price: "£35", duration: "45 min", description: "Maintain your current style" },
      { name: "Wedding Styling", price: "£85", duration: "90 min", description: "Elegant styling for your special day" },
      { name: "Children's Cut", price: "£25", duration: "30 min", description: "Gentle styling for little ones" },
      { name: "Fringe Trim", price: "£15", duration: "20 min", description: "Quick fringe maintenance" }
    ],
    benefits: [
      "Expert stylists with 10+ years experience",
      "Complimentary consultation",
      "Styling tips and advice",
      "Perfect cut guarantee"
    ]
  },
  "hair-treatment": {
    icon: Star,
    title: "Hair Treatment",
    description: "Nourishing treatments for healthy, strong, and beautiful hair using premium products.",
    image: hairTreatmentService,
    duration: "30-120 min",
    startingPrice: "£35",
    services: [
      { name: "Keratin Treatment", price: "£85", duration: "120 min", description: "Smooth and frizz-free hair" },
      { name: "Deep Conditioning", price: "£35", duration: "45 min", description: "Intensive moisture restoration" },
      { name: "Scalp Treatment", price: "£45", duration: "60 min", description: "Healthy scalp and hair growth" },
      { name: "Protein Treatment", price: "£50", duration: "60 min", description: "Strengthen damaged hair" },
      { name: "Olaplex Treatment", price: "£65", duration: "75 min", description: "Bond rebuilding treatment" },
      { name: "Hair Mask", price: "£30", duration: "30 min", description: "Nourishing hair mask" }
    ],
    benefits: [
      "Premium treatment products",
      "Customized for your hair type",
      "Long-lasting results",
      "Home care recommendations"
    ]
  },
  aesthetics: {
    icon: Zap,
    title: "Aesthetics",
    description: "Advanced cosmetic treatments for enhanced natural beauty by certified professionals.",
    image: aestheticsService,
    duration: "30-90 min",
    startingPrice: "£150",
    services: [
      { name: "Botox Treatment", price: "£150", duration: "30 min", description: "Wrinkle reduction treatment" },
      { name: "Dermal Fillers", price: "£300", duration: "45 min", description: "Volume restoration and enhancement" },
      { name: "Chemical Peels", price: "£85", duration: "60 min", description: "Skin resurfacing treatment" },
      { name: "Microneedling", price: "£120", duration: "75 min", description: "Collagen stimulation therapy" },
      { name: "Laser Hair Removal", price: "£80", duration: "45 min", description: "Permanent hair reduction" },
      { name: "Skin Rejuvenation", price: "£100", duration: "60 min", description: "Advanced skin renewal treatment" }
    ],
    benefits: [
      "Certified aesthetic practitioners",
      "FDA-approved treatments",
      "Free consultation included",
      "Aftercare support provided"
    ]
  },
  "eyes-brows": {
    icon: Eye,
    title: "Eyes & Brows",
    description: "Perfect your look with expert eye and brow treatments using precision techniques.",
    image: eyesBrowsService,
    duration: "20-120 min",
    startingPrice: "£15",
    services: [
      { name: "Eyebrow Shaping", price: "£15", duration: "20 min", description: "Professional eyebrow shaping" },
      { name: "Lash Extensions", price: "£65", duration: "90 min", description: "Beautiful individual lash extensions" },
      { name: "Brow & Lash Tinting", price: "£25", duration: "30 min", description: "Color enhancement for brows and lashes" },
      { name: "Microblading", price: "£200", duration: "120 min", description: "Semi-permanent brow enhancement" },
      { name: "Lash Lift", price: "£35", duration: "45 min", description: "Natural lash curling treatment" },
      { name: "Henna Brows", price: "£30", duration: "40 min", description: "Natural henna brow tinting" }
    ],
    benefits: [
      "Precision shaping techniques",
      "High-quality products",
      "Patch test included",
      "Perfect symmetry guaranteed"
    ]
  },
  nails: {
    icon: Hand,
    title: "Nails",
    description: "Professional nail care and stunning nail art designs using the latest techniques and premium products.",
    image: nailService,
    duration: "30-90 min",
    startingPrice: "£25",
    services: [
      { name: "Classic Manicure", price: "£25", duration: "45 min", description: "Traditional manicure with polish" },
      { name: "Gel Manicure", price: "£35", duration: "60 min", description: "Long-lasting gel polish application" },
      { name: "Classic Pedicure", price: "£30", duration: "50 min", description: "Relaxing foot care treatment" },
      { name: "Nail Art", price: "£40", duration: "75 min", description: "Custom nail art designs" },
      { name: "French Manicure", price: "£30", duration: "50 min", description: "Classic French tip style" },
      { name: "Nail Extensions", price: "£45", duration: "90 min", description: "Beautiful nail extensions" }
    ],
    benefits: [
      "Sterilized tools for hygiene",
      "Premium nail products",
      "Custom nail art available",
      "Relaxing hand massage included"
    ]
  },
  facials: {
    icon: Sparkles,
    title: "Facials",
    description: "Rejuvenating skincare treatments for all skin types using advanced techniques and premium products.",
    image: facialService,
    duration: "45-90 min",
    startingPrice: "£55",
    services: [
      { name: "Deep Cleansing Facial", price: "£55", duration: "60 min", description: "Thorough skin cleansing and purification" },
      { name: "Anti-Aging Treatment", price: "£75", duration: "75 min", description: "Advanced anti-aging skincare treatment" },
      { name: "Hydrating Facial", price: "£65", duration: "60 min", description: "Intensive moisture restoration" },
      { name: "Brightening Treatment", price: "£70", duration: "70 min", description: "Skin brightening and even tone" },
      { name: "Acne Treatment", price: "£60", duration: "60 min", description: "Specialized acne care treatment" },
      { name: "Sensitive Skin Facial", price: "£55", duration: "55 min", description: "Gentle treatment for sensitive skin" }
    ],
    benefits: [
      "Customized for your skin type",
      "Premium skincare products",
      "Relaxing facial massage",
      "Skincare routine advice"
    ]
  },
  makeup: {
    icon: Palette,
    title: "Make-up",
    description: "Professional makeup services for any special occasion using premium cosmetics.",
    image: makeupService,
    duration: "45-120 min",
    startingPrice: "£45",
    services: [
      { name: "Special Event Makeup", price: "£45", duration: "60 min", description: "Perfect look for any special occasion" },
      { name: "Bridal Makeup", price: "£85", duration: "90 min", description: "Flawless bridal look with trial" },
      { name: "Photoshoot Makeup", price: "£65", duration: "75 min", description: "Camera-ready professional makeup" },
      { name: "Makeup Lessons", price: "£55", duration: "90 min", description: "Learn professional makeup techniques" },
      { name: "Party Makeup", price: "£40", duration: "50 min", description: "Glamorous party-ready look" },
      { name: "Corporate Makeup", price: "£35", duration: "45 min", description: "Professional business look" }
    ],
    benefits: [
      "Premium makeup brands",
      "Professional makeup artists",
      "Long-lasting formulas",
      "Touch-up tips included"
    ]
  },
  massages: {
    icon: Heart,
    title: "Massages",
    description: "Relaxing therapeutic treatments for body and mind in a tranquil environment.",
    image: massageService,
    duration: "30-90 min",
    startingPrice: "£40",
    services: [
      { name: "Swedish Massage", price: "£40", duration: "60 min", description: "Classic relaxation massage" },
      { name: "Deep Tissue Massage", price: "£50", duration: "60 min", description: "Therapeutic muscle tension relief" },
      { name: "Hot Stone Massage", price: "£65", duration: "75 min", description: "Heated stones for deep relaxation" },
      { name: "Aromatherapy Massage", price: "£55", duration: "70 min", description: "Essential oils for relaxation" },
      { name: "Sports Massage", price: "£55", duration: "60 min", description: "Targeted muscle recovery" },
      { name: "Couples Massage", price: "£90", duration: "60 min", description: "Relaxing massage for two" }
    ],
    benefits: [
      "Qualified massage therapists",
      "Premium oils and lotions",
      "Tranquil treatment rooms",
      "Stress relief guarantee"
    ]
  },
  waxing: {
    icon: Flower,
    title: "Waxing",
    description: "Professional hair removal with premium quality wax in a comfortable private setting.",
    image: waxingService,
    duration: "15-60 min",
    startingPrice: "£12",
    services: [
      { name: "Eyebrow Wax", price: "£12", duration: "15 min", description: "Precise eyebrow shaping" },
      { name: "Upper Lip", price: "£8", duration: "10 min", description: "Quick and comfortable removal" },
      { name: "Brazilian Wax", price: "£35", duration: "45 min", description: "Complete bikini area treatment" },
      { name: "Full Leg Wax", price: "£40", duration: "60 min", description: "Smooth legs from thigh to ankle" },
      { name: "Half Leg Wax", price: "£25", duration: "35 min", description: "Lower leg hair removal" },
      { name: "Full Arm Wax", price: "£30", duration: "40 min", description: "Complete arm hair removal" }
    ],
    benefits: [
      "Premium quality wax",
      "Hygienic single-use products",
      "Experienced technicians",
      "Aftercare products included"
    ]
  },
  threading: {
    icon: Wind,
    title: "Threading",
    description: "Precise hair removal technique using cotton thread for perfect results every time.",
    image: threadingService,
    duration: "10-30 min",
    startingPrice: "£8",
    services: [
      { name: "Eyebrow Threading", price: "£12", duration: "15 min", description: "Precise eyebrow shaping with thread" },
      { name: "Upper Lip Threading", price: "£8", duration: "10 min", description: "Gentle upper lip hair removal" },
      { name: "Chin Threading", price: "£10", duration: "12 min", description: "Clean chin hair removal" },
      { name: "Full Face Threading", price: "£25", duration: "30 min", description: "Complete facial hair removal" },
      { name: "Forehead Threading", price: "£12", duration: "15 min", description: "Forehead hair removal" },
      { name: "Sideburn Threading", price: "£10", duration: "12 min", description: "Neat sideburn shaping" }
    ],
    benefits: [
      "Precise hair removal technique",
      "No chemicals or wax",
      "Perfect for sensitive skin",
      "Long-lasting results"
    ]
  }
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId as keyof typeof serviceData];
  
  useScrollAnimation();

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/20">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/services" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    From {service.startingPrice}
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span>Expert Care</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" variant="luxury" className="hover-lift hover-glow" asChild>
                    <a href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722" target="_blank" rel="noopener noreferrer">
                      Book Appointment
                    </a>
                  </Button>
                  <Button size="lg" variant="elegant" className="hover-scale" asChild>
                    <Link to="/contact">Ask Questions</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-on-scroll animate-on-scroll-delay">
                <div className="relative overflow-hidden rounded-2xl h-96">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">
              Our {service.title} <span className="luxury-gradient">Treatments</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.services.map((treatment, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-500 border-border/50 hover-lift animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{treatment.name}</CardTitle>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {treatment.price}
                      </Badge>
                    </div>
                    <CardDescription>{treatment.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{treatment.duration}</span>
                      </div>
                      <Button size="sm" variant="elegant" className="hover-scale" asChild>
                        <a href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722" target="_blank" rel="noopener noreferrer">
                          Book Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-on-scroll">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Why Choose Our {service.title}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <InstagramSection />

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your {service.title}?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the luxury and expertise of Marina Salon. Book your appointment today 
              and let us help you look and feel your absolute best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="luxury" className="hover-lift hover-glow" asChild>
                <a href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
              <Button size="lg" variant="elegant" className="hover-scale" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;