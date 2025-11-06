import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";

export const ChristmasPromoPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenPromo = localStorage.getItem("christmas-promo-seen");
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("christmas-promo-seen", "true");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader className="text-center space-y-3">
          <div className="flex justify-center">
            <Sparkles className="h-12 w-12 text-primary animate-pulse" />
          </div>
          <DialogTitle className="text-2xl font-bold">
            🎄 Christmas Special Offer! 🎄
          </DialogTitle>
          <DialogDescription className="text-lg space-y-4">
            <p className="font-semibold text-foreground">
              Christmas appointments are now being taken!
            </p>
            <p className="text-xl font-bold text-primary">
              20% OFF Massage & Facials
            </p>
            <p className="text-sm text-muted-foreground">
              Treat yourself or your loved ones this festive season
            </p>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-4">
          <Button
            onClick={handleClose}
            className="w-full"
            size="lg"
          >
            Book Your Appointment
          </Button>
          <Button
            onClick={handleClose}
            variant="outline"
            className="w-full"
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
