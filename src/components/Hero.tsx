import { Button } from "@/components/ui/button";
import { Star, Award, Heart } from "lucide-react";
import heroImage from "@/assets/salon-hero.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Luxury Marina Salon Interior"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Rated 5 stars by our clients</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Professional
            <span className="block luxury-gradient">Beauty & Hair</span>
            <span className="block">Services</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience luxury at Marina Salon by FKZ. From stunning hair transformations to rejuvenating beauty treatments, we provide exceptional services in an elegant Manchester location.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="book" className="group">
              Book Your Appointment
              <Heart className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="elegant" size="lg">
              View Our Services
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Expert Stylists</h3>
                <p className="text-sm text-muted-foreground">Professional team</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Heart className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Luxury Experience</h3>
                <p className="text-sm text-muted-foreground">Premium treatments</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Star className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">5-Star Service</h3>
                <p className="text-sm text-muted-foreground">Exceptional quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 floating">
        <div className="w-4 h-4 bg-primary/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-20 floating" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-6 bg-primary/30 rounded-full"></div>
      </div>
    </section>
  );
};