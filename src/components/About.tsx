import { Award, Heart, Star, Users, Clock, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="luxury-gradient">Marina Salon</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over a decade, Marina Salon by FKZ has been Manchester's premier destination for luxury beauty and hair services, where expertise meets elegance.
            </p>
          </div>

          {/* Story & Stats */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story */}
            <div className="space-y-6 animate-on-scroll">
              <h3 className="text-2xl font-semibold">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded by master stylist Fatima Khan-Zaman (FKZ), Marina Salon was born from a vision to create a sanctuary where beauty meets artistry. Located in the heart of Manchester at Keepers Quay, our salon has become synonymous with excellence, innovation, and personalized service.
              </p>
              
              <h4 className="text-xl font-semibold pt-4">Meet Fatima – Founder & Master Hair Stylist</h4>
              <p className="text-muted-foreground leading-relaxed">
                With over 25 years of international experience, Fatima has honed her craft in Dubai, Morocco, and Paris — each city shaping her refined, artistic approach to hair styling. Her deep expertise in diverse hair types and techniques ensures every client receives tailored, high-quality results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Now based here, Fatima has trained her team to uphold the same high standards she's known for. Whether you're in her chair or a team member's, you can expect the same level of care, precision, and professionalism — every time.
              </p>
              
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Located at 3-5 Keepers Quay, Manchester</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 animate-on-scroll animate-on-scroll-delay">
              <div className="text-center p-6 rounded-lg bg-card shadow-soft hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold text-primary mb-2">5000+</h4>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card shadow-soft hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold text-primary mb-2">12+</h4>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card shadow-soft hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold text-primary mb-2">15+</h4>
                <p className="text-sm text-muted-foreground">Awards Won</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card shadow-soft hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-3xl font-bold text-primary mb-2">5.0</h4>
                <p className="text-sm text-muted-foreground">Star Rating</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-accent/20 shadow-elegant hover-lift animate-on-scroll">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Passion for Beauty</h4>
              <p className="text-muted-foreground">
                Every treatment is crafted with love and attention to detail, ensuring you leave feeling absolutely radiant.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-accent/20 shadow-elegant hover-lift animate-on-scroll animate-on-scroll-delay">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Excellence Standard</h4>
              <p className="text-muted-foreground">
                We maintain the highest standards of service, using only premium products and latest techniques.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-accent/20 shadow-elegant hover-lift animate-on-scroll animate-on-scroll-delay-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Personal Touch</h4>
              <p className="text-muted-foreground">
                Each client receives personalized consultation and care, because your beauty journey is unique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};