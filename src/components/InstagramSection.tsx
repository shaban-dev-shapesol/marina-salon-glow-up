import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface InstagramPost {
  id: string;
  image: string;
  description: string;
}

// Sample Instagram posts - you can replace these with actual Instagram feed data
const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop&crop=center",
    description: "Beautiful hair transformation at Marina Salon"
  },
  {
    id: "2", 
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop&crop=center",
    description: "Perfect eyebrow shaping and tinting"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop&crop=center",
    description: "Stunning nail art designs"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop&crop=center",
    description: "Relaxing facial treatment session"
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&h=300&fit=crop&crop=center",
    description: "Professional makeup for special events"
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300&h=300&fit=crop&crop=center",
    description: "Luxury salon experience"
  }
];

export const InstagramSection = () => {
  useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Follow Our <span className="luxury-gradient">Instagram</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay updated with our latest work, beauty tips, and behind-the-scenes moments at Marina Salon
          </p>
          <a 
            href="https://www.instagram.com/fatima_fkz_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-luxury hover:scale-105 transition-all duration-300"
          >
            <Instagram className="h-6 w-6" />
            @fatima_fkz_
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="https://www.instagram.com/fatima_fkz_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg aspect-square hover-scale animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={post.image}
                alt={post.description}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <p className="text-muted-foreground mb-6">
            Tag us in your photos for a chance to be featured!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="text-lg font-semibold">#MarinaSalonByFKZ</span>
            <span className="text-lg font-semibold">#ManchesterBeauty</span>
            <span className="text-lg font-semibold">#FatimaFKZ</span>
          </div>
        </div>
      </div>
    </section>
  );
};