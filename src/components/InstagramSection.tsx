import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import instagram1 from "@/assets/instagram/instagram-1.jpeg";
import instagram2 from "@/assets/instagram/instagram-2.jpeg";
import instagram3 from "@/assets/instagram/instagram-3.jpeg";
import instagram4 from "@/assets/instagram/instagram-4.jpeg";
import instagram5 from "@/assets/instagram/instagram-5.jpeg";
import instagram6 from "@/assets/instagram/instagram-6.jpeg";

interface InstagramPost {
  id: string;
  image: string;
  description: string;
}

// Real Instagram posts from Marina Salon
const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    image: instagram1,
    description: "Beautiful hair transformation at Marina Salon"
  },
  {
    id: "2", 
    image: instagram2,
    description: "Perfect eyebrow shaping and beauty treatment"
  },
  {
    id: "3",
    image: instagram3,
    description: "Stunning nail art and beauty services"
  },
  {
    id: "4",
    image: instagram4,
    description: "Professional makeup and beauty treatment"
  },
  {
    id: "5",
    image: instagram5,
    description: "Relaxing facial and skincare treatment"
  },
  {
    id: "6",
    image: instagram6,
    description: "Luxury salon experience at Marina Salon"
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
            href="https://www.instagram.com/marinasalonbyfkz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-luxury hover:scale-105 transition-all duration-300"
          >
            <Instagram className="h-6 w-6" />
            @marinasalonbyfkz
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="https://www.instagram.com/marinasalonbyfkz/"
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