import { Button } from "@/components/ui/button";
import { Star, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/luxury-salon-hero.jpg";
export const Hero = () => {
  useScrollAnimation();

  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 parallax-element" style={{ transform: 'translateY(0px)' }}>
        <img 
          src={heroImage} 
          alt="Luxury Marina Salon Interior" 
          className="w-full h-full object-cover opacity-90 scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6 animate-on-scroll">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
            </div>
            <span className="text-sm text-muted-foreground">Rated 5 stars by our clients</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-on-scroll animate-on-scroll-delay">
            Transform Your
            <span className="block luxury-gradient py-[8px]">Beauty Journey</span>
            <span className="block">with Marina Salon</span>
          </h1>

          <p className="text-xl text-foreground mb-8 leading-relaxed animate-on-scroll animate-on-scroll-delay-2">
            Discover luxury beauty treatments and hair transformations at Manchester's premier salon. Our expert stylists create stunning results in an elegant, professional environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-on-scroll animate-on-scroll-delay-3">
            <Button 
              variant="default" 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg hover-lift hover-glow"
              asChild
            >
              <a href="https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722" target="_blank" rel="noopener noreferrer">
                Book Your Glow-Up
                <Heart className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg hover-scale"
              asChild
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm hover-lift animate-on-scroll">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Expert Stylists</h3>
                <p className="text-sm text-muted-foreground">Professional team</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm hover-lift animate-on-scroll animate-on-scroll-delay">
              <Heart className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Luxury Experience</h3>
                <p className="text-sm text-muted-foreground">Premium treatments</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm hover-lift animate-on-scroll animate-on-scroll-delay-2">
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
      <div className="absolute bottom-32 left-20 floating" style={{
      animationDelay: "1s"
    }}>
        <div className="w-6 h-6 bg-primary/30 rounded-full"></div>
      </div>
    </section>;
};