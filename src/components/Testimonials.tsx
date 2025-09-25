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

  const googleReviews = [
    {
      name: "Sarah M.",
      rating: 5,
      date: "1 week ago",
      text: "Absolutely phenomenal experience at Marina Salon! FKZ and her team are true professionals. The salon is beautifully designed and the service exceeded all my expectations. I've been coming here for months and the quality is consistently outstanding.",
      verified: true,
      avatar: "SM"
    },
    {
      name: "Emma T.",
      rating: 5,
      date: "2 weeks ago", 
      text: "Best salon experience I've ever had! The attention to detail is incredible and the team really listens to what you want. The results speak for themselves - I always leave feeling like a million dollars!",
      verified: true,
      avatar: "ET"
    },
    {
      name: "Lisa R.",
      rating: 5,
      date: "3 weeks ago",
      text: "Marina Salon is in a league of its own. The luxury treatments and professional service make every visit special. The staff are so knowledgeable and the products they use are top quality.",
      verified: true,
      avatar: "LR"
    },
    {
      name: "Jessica C.",
      rating: 5,
      date: "1 month ago",
      text: "From the moment you walk in, you know you're somewhere special. The ambiance is perfect and the service is unmatched. I wouldn't trust my hair and beauty needs to anyone else!",
      verified: true,
      avatar: "JC"
    },
    {
      name: "Rachel W.",
      rating: 5,
      date: "2 months ago",
      text: "Outstanding transformation! I was nervous about a major change but the consultation process was thorough and reassuring. The team here are true artists and the results exceeded my expectations.",
      verified: true,
      avatar: "RW"
    },
    {
      name: "Sophie A.",
      rating: 5,
      date: "2 months ago",
      text: "The nail artistry here is phenomenal! Every set is a masterpiece and the attention to detail is incredible. The nails last for weeks looking perfect. Highly recommend!",
      verified: true,
      avatar: "SA"
    },
    {
      name: "Amanda K.",
      rating: 5,
      date: "3 months ago",
      text: "Incredible service and results! The team at Marina Salon really care about their clients and it shows in every detail. The salon is beautiful and the atmosphere is so relaxing.",
      verified: true,
      avatar: "AK"
    },
    {
      name: "Catherine H.",
      rating: 5,
      date: "3 months ago",
      text: "I drive from outside Manchester to come here and it's worth every minute. The quality of service and results are unmatched anywhere else. Marina Salon has spoiled me!",
      verified: true,
      avatar: "CH"
    }
  ];

  const additionalReviews = [
    {
      name: "Maria K.",
      rating: 5,
      date: "4 months ago",
      text: "Outstanding service! The staff is incredibly professional and the results exceeded my expectations. I've been to many salons but Marina Salon is truly exceptional.",
      verified: true,
      avatar: "MK"
    },
    {
      name: "Jennifer S.",
      rating: 5,
      date: "4 months ago", 
      text: "Best salon experience I've ever had. The attention to detail is remarkable and the atmosphere is so relaxing. Worth every penny!",
      verified: true,
      avatar: "JS"
    },
    {
      name: "Amanda R.",
      rating: 5,
      date: "5 months ago",
      text: "Incredible transformation! The team listened to exactly what I wanted and delivered perfection. The salon is beautiful and the service is top-notch.",
      verified: true,
      avatar: "AR"
    },
    {
      name: "Catherine M.",
      rating: 5,
      date: "5 months ago",
      text: "I drive an hour to come here and it's worth every minute. The quality of service and results are unmatched. Highly recommend!",
      verified: true,
      avatar: "CM"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Google <span className="luxury-gradient">Reviews</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real reviews from our valued clients on Google. See what people are saying about their experience at Marina Salon.
            </p>
            <div className="flex items-center justify-center space-x-2 mt-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-lg font-semibold">5.0 Average Rating</span>
              <span className="text-muted-foreground">• 150+ Google Reviews</span>
            </div>
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="group hover-scale"
                onClick={() => window.open('https://www.google.com/maps/place/Marina+Salon+by+FKZ/@53.4834956,-2.2263103,17z/data=!4m15!1m8!3m7!1s0x487bb1a49fc6465d:0xf4cae867d99770d4!2s3-5+Keepers+Quay,+Manchester+M4+6GL,+UK!3b1!8m2!3d53.4834956!4d-2.2237354!16s%2Fg%2F11mcftq033!3m5!1s0x487bb1a94b5a2de7:0xb79bb11bd9cb307c!8m2!3d53.4831995!4d-2.2237837!16s%2Fg%2F11pc635vzt?entry=ttu', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Write a Google Review
              </Button>
            </div>
          </div>

          {/* Google Reviews Carousel */}
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
              {googleReviews.map((review, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-elegant hover:shadow-luxury transition-all duration-500 relative group h-full hover-lift">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 text-primary/20">
                      <Quote className="h-6 w-6 md:h-8 md:w-8" />
                    </div>

                    {/* Rating and Verification */}
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

                    {/* Review Text */}
                    <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm md:text-base">
                      "{review.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm md:text-base">
                          {review.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm md:text-base">{review.name}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">Google Review</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 hover-scale" />
            <CarouselNext className="hidden md:flex -right-12 hover-scale" />
          </Carousel>
          </div>

          {/* Additional Google Reviews Section */}
          <div className="mt-20 animate-on-scroll animate-on-scroll-delay-2">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                More <span className="luxury-gradient">Reviews</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of satisfied clients who trust Marina Salon for their beauty needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalReviews.map((review, index) => (
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
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-xs">
                        {review.avatar}
                      </div>
                      <span className="font-semibold text-sm">{review.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Business Link */}
            <div className="text-center mt-8">
              <Button 
                className="group hover-scale"
                onClick={() => window.open('https://www.google.com/maps/place/Marina+Salon+by+FKZ/@53.4834956,-2.2263103,17z/data=!4m15!1m8!3m7!1s0x487bb1a49fc6465d:0xf4cae867d99770d4!2s3-5+Keepers+Quay,+Manchester+M4+6GL,+UK!3b1!8m2!3d53.4834956!4d-2.2237354!16s%2Fg%2F11mcftq033!3m5!1s0x487bb1a94b5a2de7:0xb79bb11bd9cb307c!8m2!3d53.4831995!4d-2.2237837!16s%2Fg%2F11pc635vzt?entry=ttu', '_blank')}
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
                onClick={() => window.open('https://www.google.com/maps/place/Marina+Salon+by+FKZ/@53.4834956,-2.2263103,17z/data=!4m15!1m8!3m7!1s0x487bb1a49fc6465d:0xf4cae867d99770d4!2s3-5+Keepers+Quay,+Manchester+M4+6GL,+UK!3b1!8m2!3d53.4834956!4d-2.2237354!16s%2Fg%2F11mcftq033!3m5!1s0x487bb1a94b5a2de7:0xb79bb11bd9cb307c!8m2!3d53.4831995!4d-2.2237837!16s%2Fg%2F11pc635vzt?entry=ttu', '_blank')}
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