import { Coffee, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Cafe = () => {
  return (
    <section className="py-20 px-4 bg-accent/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coffee className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Visit Our Café
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enjoy a relaxing moment at Café 90 Delice, part of the Marina Salon family. 
            Owned and operated by the same team, our café offers the perfect complement to your salon experience.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-border max-w-md w-full text-center">
            <Coffee className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-foreground mb-3">Café 90 Delice</h3>
            <p className="text-muted-foreground mb-6">
              Discover our delicious menu and cozy atmosphere. Follow us on Instagram for the latest updates, 
              seasonal specials, and behind-the-scenes moments.
            </p>
            <Button
              variant="luxury"
              size="lg"
              className="w-full"
              onClick={() => window.open('https://instagram.com/cafe90delice', '_blank')}
            >
              <Instagram className="mr-2 h-5 w-5" />
              @cafe90delice
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
