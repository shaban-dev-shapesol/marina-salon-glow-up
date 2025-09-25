import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Manchester",
      service: "Hair Styling & Color",
      rating: 5,
      text: "Absolutely phenomenal! FKZ and her team transformed my hair beyond my wildest dreams. The attention to detail and luxury experience at Marina Salon is unmatched. I've been coming here for 3 years and wouldn't go anywhere else.",
      image: "SM"
    },
    {
      name: "Emma Thompson",
      service: "Bridal Package",
      rating: 5,
      text: "My wedding day look was perfection thanks to Marina Salon. The team made me feel like royalty from the trial to the big day. Every detail was flawless - my hair stayed perfect all day and the makeup was stunning.",
      image: "ET"
    },
    {
      name: "Lisa Rodriguez",
      service: "Facial & Beauty Treatments",
      rating: 5,
      text: "The luxury facial treatments here are incredible. My skin has never looked better! The staff are so knowledgeable and the products they use are top quality. It's my monthly treat to myself.",
      image: "LR"
    },
    {
      name: "Jessica Chen",
      service: "Full Service Experience",
      rating: 5,
      text: "From the moment you walk in, you know you're somewhere special. The ambiance, the service, the results - everything exceeds expectations. Marina Salon has spoiled me for anywhere else!",
      image: "JC"
    },
    {
      name: "Rachel Williams",
      service: "Hair Transformation",
      rating: 5,
      text: "I was nervous about a major hair change, but the consultation process was so thorough and reassuring. The result was exactly what I envisioned. The team here are true artists!",
      image: "RW"
    },
    {
      name: "Sophie Anderson",
      service: "Nail Art & Extensions",
      rating: 5,
      text: "The nail artistry here is phenomenal! Every set is a masterpiece. The attention to detail and creativity keeps me coming back. Plus, the nails last for weeks looking perfect.",
      image: "SA"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="luxury-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about their luxury experience at Marina Salon.
            </p>
            <div className="flex items-center justify-center space-x-2 mt-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-lg font-semibold">5.0 Average Rating</span>
              <span className="text-muted-foreground">• 500+ Reviews</span>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-xl p-8 shadow-elegant hover:shadow-luxury transition-all duration-300 relative group h-full">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-primary/20">
                      <Quote className="h-8 w-8" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Review Platforms */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">Find Us On</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="p-4 rounded-lg bg-card shadow-soft">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Google</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">5.0 • 120 reviews</p>
              </div>
              <div className="p-4 rounded-lg bg-card shadow-soft">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Facebook</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">4.9 • 85 reviews</p>
              </div>
              <div className="p-4 rounded-lg bg-card shadow-soft">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Yelp</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">5.0 • 95 reviews</p>
              </div>
              <div className="p-4 rounded-lg bg-card shadow-soft">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Treatwell</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">4.8 • 200 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};