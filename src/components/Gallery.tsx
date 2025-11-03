import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/card";
import galleryImage1 from "@/assets/gallery/salon-interior-1.jpg";
import galleryImage2 from "@/assets/gallery/salon-interior-2.jpg";
import galleryImage3 from "@/assets/gallery/salon-interior-3.jpg";
import galleryImage4 from "@/assets/gallery/salon-interior-4.jpg";
import galleryImage5 from "@/assets/gallery/salon-interior-5.jpg";
import galleryImage6 from "@/assets/gallery/salon-interior-6.jpg";
import galleryImage7 from "@/assets/gallery/salon-interior-7.jpg";
import galleryImage8 from "@/assets/gallery/salon-interior-8.jpg";
import galleryImage9 from "@/assets/gallery/salon-interior-9.jpg";

const galleryImages = [
  {
    id: 1,
    image: galleryImage1,
    alt: "Marina Salon luxury lounge area with comfortable white seating",
    title: "Lounge Area"
  },
  {
    id: 2,
    image: galleryImage2,
    alt: "Marina Salon elegant reception and waiting area",
    title: "Reception Area"
  },
  {
    id: 3,
    image: galleryImage3,
    alt: "Marina Salon modern storefront exterior with signature gold branding",
    title: "Storefront"
  },
  {
    id: 4,
    image: galleryImage4,
    alt: "Marina Salon window display showcasing premium hair care products",
    title: "Product Display"
  },
  {
    id: 5,
    image: galleryImage5,
    alt: "Marina Salon outdoor entrance with stylish architectural design",
    title: "Entrance View"
  },
  {
    id: 6,
    image: galleryImage6,
    alt: "Marina Salon distinctive gold geometric window design",
    title: "Signature Design"
  },
  {
    id: 7,
    image: galleryImage7,
    alt: "Marina Salon full storefront view with elegant branding",
    title: "Front Facade"
  },
  {
    id: 8,
    image: galleryImage8,
    alt: "Marina Salon welcoming entrance with floor-to-ceiling windows",
    title: "Main Entrance"
  },
  {
    id: 9,
    image: galleryImage9,
    alt: "Marina Salon interior with professional styling stations and reception",
    title: "Styling Area"
  }
];

export const Gallery = () => {
  useScrollAnimation();

  return (
    <section className="py-20 px-4 md:px-8 bg-background" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">
            Our Salon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Step into our luxurious space designed for your ultimate comfort and beauty experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-elegant animate-on-scroll bg-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
