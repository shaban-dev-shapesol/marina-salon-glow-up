import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Sparkles, Eye, Hand, Flower, Palette, Heart, Zap, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import hairService from "@/assets/hair-service.jpg";
import nailService from "@/assets/nail-service.jpg";
import facialService from "@/assets/facial-service.jpg";
import eyesBrowsService from "@/assets/eyes-brows-service.jpg";
import makeupService from "@/assets/makeup-service.jpg";
import massageService from "@/assets/massage-service.jpg";
import aestheticsService from "@/assets/aesthetics-service.jpg";
import waxingService from "@/assets/waxing-service.jpg";

const services = [
  {
    id: "hair",
    icon: Scissors,
    title: "Hair Services",
    description: "Expert cuts, coloring, and treatments by our skilled stylists",
    image: hairService,
    duration: "60-180 min",
    startingPrice: "£35",
    services: [
      { name: "Hair Cut & Blow Dry", price: "£45", duration: "60 min" },
      { name: "Hair Coloring", price: "£75", duration: "120 min" },
      { name: "Hair Treatments", price: "£35", duration: "45 min" },
      { name: "Wedding Styling", price: "£85", duration: "90 min" }
    ]
  },
  {
    id: "nails",
    icon: Hand,
    title: "Nails & Beauty",
    description: "Professional nail care and stunning nail art designs",
    image: nailService,
    duration: "30-90 min",
    startingPrice: "£25",
    services: [
      { name: "Classic Manicure", price: "£25", duration: "45 min" },
      { name: "Gel Manicure", price: "£35", duration: "60 min" },
      { name: "Classic Pedicure", price: "£30", duration: "50 min" },
      { name: "Nail Art", price: "£40", duration: "75 min" }
    ]
  },
  {
    id: "facial",
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Rejuvenating skincare treatments for all skin types",
    image: facialService,
    duration: "45-90 min",
    startingPrice: "£55",
    services: [
      { name: "Deep Cleansing Facial", price: "£55", duration: "60 min" },
      { name: "Anti-Aging Treatment", price: "£75", duration: "75 min" },
      { name: "Hydrating Facial", price: "£65", duration: "60 min" },
      { name: "Brightening Treatment", price: "£70", duration: "70 min" }
    ]
  },
  {
    id: "eyes-brows",
    icon: Eye,
    title: "Eyes & Brows",
    description: "Perfect your look with expert eye and brow treatments",
    image: eyesBrowsService,
    duration: "20-60 min",
    startingPrice: "£15",
    services: [
      { name: "Eyebrow Shaping", price: "£15", duration: "20 min" },
      { name: "Lash Extensions", price: "£65", duration: "90 min" },
      { name: "Brow & Lash Tinting", price: "£25", duration: "30 min" },
      { name: "Threading", price: "£12", duration: "15 min" }
    ]
  },
  {
    id: "makeup",
    icon: Palette,
    title: "Make-up",
    description: "Professional makeup services for any special occasion",
    image: makeupService,
    duration: "45-120 min",
    startingPrice: "£45",
    services: [
      { name: "Special Event Makeup", price: "£45", duration: "60 min" },
      { name: "Bridal Makeup", price: "£85", duration: "90 min" },
      { name: "Photoshoot Makeup", price: "£65", duration: "75 min" },
      { name: "Makeup Lessons", price: "£55", duration: "90 min" }
    ]
  },
  {
    id: "massages",
    icon: Heart,
    title: "Massages",
    description: "Relaxing therapeutic treatments for body and mind",
    image: massageService,
    duration: "30-90 min",
    startingPrice: "£40",
    services: [
      { name: "Swedish Massage", price: "£40", duration: "60 min" },
      { name: "Deep Tissue Massage", price: "£50", duration: "60 min" },
      { name: "Hot Stone Massage", price: "£65", duration: "75 min" },
      { name: "Aromatherapy Massage", price: "£55", duration: "70 min" }
    ]
  },
  {
    id: "aesthetics",
    icon: Zap,
    title: "Aesthetics",
    description: "Advanced cosmetic treatments for enhanced natural beauty",
    image: aestheticsService,
    duration: "30-90 min",
    startingPrice: "£150",
    services: [
      { name: "Botox Treatment", price: "£150", duration: "30 min" },
      { name: "Dermal Fillers", price: "£300", duration: "45 min" },
      { name: "Chemical Peels", price: "£85", duration: "60 min" },
      { name: "Microneedling", price: "£120", duration: "75 min" }
    ]
  },
  {
    id: "waxing",
    icon: Flower,
    title: "Waxing",
    description: "Professional hair removal with premium quality wax",
    image: waxingService,
    duration: "15-60 min",
    startingPrice: "£12",
    services: [
      { name: "Eyebrow Wax", price: "£12", duration: "15 min" },
      { name: "Upper Lip", price: "£8", duration: "10 min" },
      { name: "Brazilian Wax", price: "£35", duration: "45 min" },
      { name: "Full Leg Wax", price: "£40", duration: "60 min" }
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="luxury-gradient">Premium</span> Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience luxury and transformation with our comprehensive range of beauty and wellness services, 
                delivered by experienced professionals in an elegant Manchester setting.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full">
                          <img 
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              From {service.startingPrice}
                            </Badge>
                          </div>
                          <CardDescription className="text-base">
                            {service.description}
                          </CardDescription>
                          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{service.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              <span>Expert Care</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="space-y-2 mb-6">
                            {service.services.slice(0, 3).map((item) => (
                              <div key={item.name} className="flex justify-between items-center text-sm">
                                <span>{item.name}</span>
                                <span className="font-semibold text-primary">{item.price}</span>
                              </div>
                            ))}
                            {service.services.length > 3 && (
                              <div className="text-sm text-muted-foreground">
                                +{service.services.length - 3} more services...
                              </div>
                            )}
                          </div>
                          <div className="flex gap-3">
                            <Button asChild variant="luxury" className="flex-1">
                              <Link to={`/services/${service.id}`}>
                                View Details
                              </Link>
                            </Button>
                            <Button variant="elegant" className="flex-1" asChild>
                              <a href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722" target="_blank" rel="noopener noreferrer">
                                Book Now
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Appointment?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your look and feel your best with our professional beauty services. 
              Contact us today to schedule your appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="luxury" asChild>
                <a href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722" target="_blank" rel="noopener noreferrer">
                  Book Appointment
                </a>
              </Button>
              <Button size="lg" variant="elegant" asChild>
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

export default ServicesPage;