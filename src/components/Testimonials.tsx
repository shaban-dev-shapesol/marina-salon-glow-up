import { Star, Quote, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  useScrollAnimation();

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

  const googleReviews = [
    {
      name: "Maria K.",
      rating: 5,
      date: "2 weeks ago",
      text: "Outstanding service! The staff is incredibly professional and the results exceeded my expectations. I've been to many salons but Marina Salon is truly exceptional.",
      verified: true
    },
    {
      name: "Jennifer S.",
      rating: 5,
      date: "1 month ago", 
      text: "Best salon experience I've ever had. The attention to detail is remarkable and the atmosphere is so relaxing. Worth every penny!",
      verified: true
    },
    {
      name: "Amanda R.",
      rating: 5,
      date: "3 weeks ago",
      text: "Incredible transformation! The team listened to exactly what I wanted and delivered perfection. The salon is beautiful and the service is top-notch.",
      verified: true
    },
    {
      name: "Catherine M.",
      rating: 5,
      date: "1 week ago",
      text: "I drive an hour to come here and it's worth every minute. The quality of service and results are unmatched. Highly recommend!",
      verified: true
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
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
          <div className="animate-on-scroll animate-on-scroll-delay">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-elegant hover:shadow-luxury transition-all duration-500 relative group h-full hover-lift">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 text-primary/20">
                      <Quote className="h-6 w-6 md:h-8 md:w-8" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm md:text-base">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm md:text-base">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">{testimonial.name}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 hover-scale" />
            <CarouselNext className="hidden md:flex -right-12 hover-scale" />
          </Carousel>
          </div>

          {/* Google Reviews Section */}
          <div className="mt-20 animate-on-scroll animate-on-scroll-delay-2">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Google <span className="luxury-gradient">Reviews</span>
              </h3>
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xl font-semibold">5.0</span>
                <span className="text-muted-foreground">• Based on 150+ Google reviews</span>
              </div>
              <Button 
                variant="outline" 
                className="group hover-scale"
                onClick={() => window.open('https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Write a Google Review
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {googleReviews.map((review, index) => (
                <div 
                  key={index}
                  className={`bg-card rounded-xl p-6 shadow-elegant hover:shadow-luxury transition-all duration-500 hover-lift animate-on-scroll`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header with rating and verification */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    {review.verified && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Review text */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                    "{review.text}"
                  </p>

                  {/* Reviewer info */}
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{review.name}</span>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Business Link */}
            <div className="text-center mt-8">
              <Button 
                className="group hover-scale"
                onClick={() => window.open('https://g.page/YOUR_GOOGLE_BUSINESS_ID', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View All Google Reviews
              </Button>
            </div>
          </div>

          {/* Review Platforms */}
          <div className="mt-16 text-center animate-on-scroll animate-on-scroll-delay-2">
            <h3 className="text-2xl font-semibold mb-8">Find Us On</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <button 
                className="p-4 rounded-lg bg-card shadow-soft hover-lift transition-all duration-500 hover-scale group"
                onClick={() => window.open('https://g.page/YOUR_GOOGLE_BUSINESS_ID', '_blank')}
              >
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-primary group-hover:animate-pulse" />
                  <span className="font-semibold">Google</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground">5.0 • 150+ reviews</p>
                <p className="text-xs text-primary mt-1">Click to view</p>
              </button>
              <div className="p-4 rounded-lg bg-card shadow-soft hover-lift transition-all duration-500">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Facebook</span>
                </div>
                <p className="text-sm text-muted-foreground">4.9 • 85 reviews</p>
              </div>
              <div className="p-4 rounded-lg bg-card shadow-soft hover-lift transition-all duration-500">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Yelp</span>
                </div>
                <p className="text-sm text-muted-foreground">5.0 • 95 reviews</p>
              </div>
              <div className="p-4 rounded-lg bg-card shadow-soft hover-lift transition-all duration-500">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Treatwell</span>
                </div>
                <p className="text-sm text-muted-foreground">4.8 • 200 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};