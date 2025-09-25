import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit <span className="luxury-gradient">Marina Salon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Manchester, we're ready to transform your look
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-on-scroll">
            <Card className="glass-effect border-border/50 hover-lift transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unit 1, Mansion House<br />
                  3-5 Keepers Quay<br />
                  Manchester M4 6GL
                </p>
                <Button 
                  variant="elegant" 
                  className="mt-4 hover-scale"
                  onClick={() => window.open('https://www.google.com/maps/dir//Unit+1,+Mansion+House,+3-5+Keepers+Quay,+Manchester+M4+6GL', '_blank')}
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/50 hover-lift transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Opening Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border/50 hover-lift transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:01613322350" className="hover:text-primary transition-colors">
                    <span>Call to book: 0161 332 2350</span>
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:hello@marinasalonbyfkz.co.uk" className="hover:text-primary transition-colors">
                    <span>hello@marinasalonbyfkz.co.uk</span>
                  </a>
                </div>
                <div className="flex space-x-4 pt-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hover-scale"
                    onClick={() => window.open('https://www.instagram.com/fatima_fkz_/', '_blank')}
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="hover-scale">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking CTA */}
          <div className="flex flex-col justify-center animate-on-scroll animate-on-scroll-delay">
            <Card className="glass-effect border-primary/20 p-8 text-center hover-lift transition-all duration-500">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold luxury-gradient">
                    Ready for Your Transformation?
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Book your appointment today and experience the luxury of Marina Salon
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="book" 
                    className="w-full text-lg py-8 hover-glow"
                    onClick={() => window.open('https://www.fresha.com/a/marina-salon-by-fkz-hair-and-beauty-manchester-3-5-keepers-quay-ukvxpg8p/all-offer?menu=true&pId=449722', '_blank')}
                  >
                    Book Online Now
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Or call us directly at <a href="tel:01613322350" className="hover:text-primary transition-colors">0161 332 2350</a>
                  </p>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    New clients receive 15% off their first visit
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};