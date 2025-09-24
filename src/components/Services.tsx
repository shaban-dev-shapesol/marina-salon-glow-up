import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Eye, Hand, Flower, Palette, Heart, Zap } from "lucide-react";
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
    icon: Scissors,
    title: "Hair Services",
    description: "Expert cuts, coloring, and treatments",
    image: hairService,
    services: ["Hair Cuts", "Hair Coloring", "Hair Treatments", "Styling"]
  },
  {
    icon: Hand,
    title: "Nails & Beauty",
    description: "Professional nail care and art",
    image: nailService,
    services: ["Manicures", "Pedicures", "Nail Art", "Gel Polish"]
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Rejuvenating skincare services",
    image: facialService,
    services: ["Deep Cleansing", "Anti-Aging", "Hydrating", "Brightening"]
  },
  {
    icon: Eye,
    title: "Eyes & Brows",
    description: "Perfect your look with expert eye treatments",
    image: eyesBrowsService,
    services: ["Eyebrow Shaping", "Lash Extensions", "Tinting", "Threading"]
  },
  {
    icon: Palette,
    title: "Make-up",
    description: "Professional makeup for any occasion",
    image: makeupService,
    services: ["Special Events", "Bridal", "Photoshoots", "Lessons"]
  },
  {
    icon: Heart,
    title: "Massages",
    description: "Relaxing therapeutic treatments",
    image: massageService,
    services: ["Swedish", "Deep Tissue", "Hot Stone", "Aromatherapy"]
  },
  {
    icon: Zap,
    title: "Aesthetics",
    description: "Advanced beauty treatments",
    image: aestheticsService,
    services: ["Botox", "Fillers", "Chemical Peels", "Microneedling"]
  },
  {
    icon: Flower,
    title: "Waxing",
    description: "Professional hair removal services",
    image: waxingService,
    services: ["Full Body", "Brazilian", "Eyebrow", "Upper Lip"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="luxury-gradient">Premium</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of beauty and wellness services, 
            delivered by experienced professionals in a luxurious setting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm bg-card/80"
              >
                <CardHeader className="text-center">
                  {service.image && (
                    <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}
                  {!service.image && (
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  )}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.services.map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="elegant" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="luxury" size="lg">
            View All Services & Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};