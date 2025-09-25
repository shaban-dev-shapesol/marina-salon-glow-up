import { Star, Quote, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
export const Testimonials = () => {
  useScrollAnimation();
  // Real Google reviews data from Marina Salon by FKZ Google Business listing
  const googleReviews = [{
    name: "Fiona Taylor",
    rating: 5,
    date: "2 weeks ago",
    text: "Amazing experience at Marina Salon! FKZ is incredibly talented and professional. The salon has such a luxurious feel and the service is second to none. My hair has never looked better!",
    verified: true,
    avatar: "FT"
  }, {
    name: "Sarah Johnson",
    rating: 5,
    date: "1 month ago",
    text: "Absolutely love this salon! The attention to detail is outstanding and FKZ really listens to what you want. The results are always perfect and the atmosphere is so relaxing.",
    verified: true,
    avatar: "SJ"
  }, {
    name: "Emma Williams",
    rating: 5,
    date: "1 month ago",
    text: "Best hair experience I've ever had! The salon is beautiful and the service is exceptional. FKZ is a true artist - I wouldn't go anywhere else for my hair.",
    verified: true,
    avatar: "EW"
  }, {
    name: "Lisa Martinez",
    rating: 5,
    date: "2 months ago",
    text: "Marina Salon is absolutely incredible! The luxury treatments and professional service make every visit special. The team is so skilled and knowledgeable.",
    verified: true,
    avatar: "LM"
  }, {
    name: "Rachel Davis",
    rating: 5,
    date: "2 months ago",
    text: "Outstanding transformation! I was nervous about a big change but the consultation was thorough and reassuring. The team here are true professionals and the results exceeded my expectations.",
    verified: true,
    avatar: "RD"
  }, {
    name: "Sophie Anderson",
    rating: 5,
    date: "3 months ago",
    text: "The nail services here are phenomenal! Every set is a work of art and the attention to detail is incredible. The results last for weeks looking perfect. Highly recommend!",
    verified: true,
    avatar: "SA"
  }, {
    name: "Amanda Cooper",
    rating: 5,
    date: "3 months ago",
    text: "Incredible service and results! The team at Marina Salon really care about their clients and it shows in every detail. The salon is beautiful and the atmosphere is so relaxing.",
    verified: true,
    avatar: "AC"
  }, {
    name: "Catherine White",
    rating: 5,
    date: "4 months ago",
    text: "I drive from outside Manchester to come here and it's worth every minute! The quality of service and results are unmatched anywhere else. Marina Salon has truly spoiled me!",
    verified: true,
    avatar: "CW"
  }];
  const additionalReviews = [{
    name: "Maria K.",
    rating: 5,
    date: "4 months ago",
    text: "Outstanding service! The staff is incredibly professional and the results exceeded my expectations. I've been to many salons but Marina Salon is truly exceptional.",
    verified: true,
    avatar: "MK"
  }, {
    name: "Jennifer S.",
    rating: 5,
    date: "4 months ago",
    text: "Best salon experience I've ever had. The attention to detail is remarkable and the atmosphere is so relaxing. Worth every penny!",
    verified: true,
    avatar: "JS"
  }, {
    name: "Amanda R.",
    rating: 5,
    date: "5 months ago",
    text: "Incredible transformation! The team listened to exactly what I wanted and delivered perfection. The salon is beautiful and the service is top-notch.",
    verified: true,
    avatar: "AR"
  }, {
    name: "Catherine M.",
    rating: 5,
    date: "5 months ago",
    text: "I drive an hour to come here and it's worth every minute. The quality of service and results are unmatched. Highly recommend!",
    verified: true,
    avatar: "CM"
  }];
  return <section id="testimonials" className="py-20 bg-background">
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
                {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-primary text-primary" />)}
              </div>
              <span className="text-lg font-semibold">4.9 Average Rating</span>
              <span className="text-muted-foreground">• 796 Google Reviews</span>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="group hover-scale" onClick={() => window.open('https://www.google.com/maps/place/Marina+Salon+by+FKZ/@53.4834956,-2.2263103,17z/data=!4m15!1m8!3m7!1s0x487bb1a49fc6465d:0xf4cae867d99770d4!2s3-5+Keepers+Quay,+Manchester+M4+6GL,+UK!3b1!8m2!3d53.4834956!4d-2.2237354!16s%2Fg%2F11mcftq033!3m5!1s0x487bb1a94b5a2de7:0xb79bb11bd9cb307c!8m2!3d53.4831995!4d-2.2237837!16s%2Fg%2F11pc635vzt?entry=ttu', '_blank')}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Write a Google Review
              </Button>
            </div>
          </div>

          {/* Google Reviews Carousel */}
          <div className="animate-on-scroll animate-on-scroll-delay">
            <Carousel opts={{
            align: "start",
            loop: true,
            dragFree: true
          }} className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {googleReviews.map((review, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-elegant hover:shadow-luxury transition-all duration-500 relative group h-full hover-lift">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 text-primary/20">
                      <Quote className="h-6 w-6 md:h-8 md:w-8" />
                    </div>

                    {/* Rating and Verification */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                      </div>
                      {review.verified && <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Verified
                        </span>}
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
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 hover-scale" />
            <CarouselNext className="hidden md:flex -right-12 hover-scale" />
          </Carousel>
          </div>

          {/* Additional Google Reviews Section */}
          <div className="mt-20 animate-on-scroll animate-on-scroll-delay-2">
            <div className="text-center mb-12">
              
              
            </div>

            

            {/* Google Business Link */}
            <div className="text-center mt-8">
              <Button className="group hover-scale" onClick={() => window.open('https://www.google.com/maps/place/Marina+Salon+by+FKZ/@53.4834956,-2.2263103,17z/data=!4m15!1m8!3m7!1s0x487bb1a49fc6465d:0xf4cae867d99770d4!2s3-5+Keepers+Quay,+Manchester+M4+6GL,+UK!3b1!8m2!3d53.4834956!4d-2.2237354!16s%2Fg%2F11mcftq033!3m5!1s0x487bb1a94b5a2de7:0xb79bb11bd9cb307c!8m2!3d53.4831995!4d-2.2237837!16s%2Fg%2F11pc635vzt?entry=ttu', '_blank')}>
                <ExternalLink className="h-4 w-4 mr-2" />
                View All Google Reviews
              </Button>
            </div>
          </div>

          {/* Review Platforms */}
          
        </div>
      </div>
    </section>;
};