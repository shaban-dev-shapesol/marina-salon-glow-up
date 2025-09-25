import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Scissors, Sparkles, Eye, Hand, Flower, Palette, Heart, Zap, Brush, Star, Wrench, Wind } from "lucide-react";
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

const services = [
  {
    icon: Brush,
    title: "Hair Colouring",
    description: "Expert hair coloring and creative color techniques",
    image: hairColoringService,
    services: ["Full Color", "Highlights", "Balayage", "Color Correction"],
    link: "/services/hair-colouring"
  },
  {
    icon: Scissors,
    title: "Haircuts",
    description: "Precision cuts tailored to your style",
    image: haircutsService,
    services: ["Cut & Blow Dry", "Restyle", "Trim", "Layers"],
    link: "/services/haircuts"
  },
  {
    icon: Star,
    title: "Hair Treatment",
    description: "Nourishing treatments for healthy hair",
    image: hairTreatmentService,
    services: ["Keratin", "Deep Conditioning", "Scalp Treatment", "Protein"],
    link: "/services/hair-treatment"
  },
  {
    icon: Zap,
    title: "Aesthetics",
    description: "Advanced beauty treatments",
    image: aestheticsService,
    services: ["Botox", "Fillers", "Chemical Peels", "Microneedling"],
    link: "/services/aesthetics"
  },
  {
    icon: Eye,
    title: "Eyes & Brows",
    description: "Perfect your look with expert eye treatments",
    image: eyesBrowsService,
    services: ["Eyebrow Shaping", "Lash Extensions", "Tinting", "Microblading"],
    link: "/services/eyes-brows"
  },
  {
    icon: Hand,
    title: "Nails",
    description: "Professional nail care and art",
    image: nailService,
    services: ["Manicures", "Pedicures", "Nail Art", "Gel Polish"],
    link: "/services/nails"
  },
  {
    icon: Sparkles,
    title: "Facials",
    description: "Rejuvenating skincare treatments",
    image: facialService,
    services: ["Deep Cleansing", "Anti-Aging", "Hydrating", "Brightening"],
    link: "/services/facials"
  },
  {
    icon: Palette,
    title: "Make-up",
    description: "Professional makeup for any occasion",
    image: makeupService,
    services: ["Special Events", "Bridal", "Photoshoots", "Lessons"],
    link: "/services/makeup"
  },
  {
    icon: Heart,
    title: "Massages",
    description: "Relaxing therapeutic treatments",
    image: massageService,
    services: ["Swedish", "Deep Tissue", "Hot Stone", "Aromatherapy"],
    link: "/services/massages"
  },
  {
    icon: Flower,
    title: "Waxing",
    description: "Professional hair removal services",
    image: waxingService,
    services: ["Full Body", "Brazilian", "Eyebrow", "Upper Lip"],
    link: "/services/waxing"
  },
  {
    icon: Wind,
    title: "Threading",
    description: "Precise hair removal technique",
    image: threadingService,
    services: ["Eyebrow Threading", "Upper Lip", "Chin", "Full Face"],
    link: "/services/threading"
  }
];

export const Services = () => {
  useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="luxury-gradient">Premium</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of beauty and wellness services, 
            delivered by experienced professionals in a luxurious setting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-border/50 backdrop-blur-sm bg-card/80 hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  {service.image && (
                    <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
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
                  <Button variant="elegant" className="w-full" asChild>
                    <Link to={service.link}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button variant="luxury" size="lg" className="hover-scale hover-glow" asChild>
            <Link to="/services">
              View All Services & Pricing
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};