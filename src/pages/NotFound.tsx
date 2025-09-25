import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  useScrollAnimation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle">
      <div className="text-center animate-on-scroll">
        <h1 className="mb-4 text-6xl md:text-8xl font-bold luxury-gradient">404</h1>
        <h2 className="mb-4 text-2xl md:text-3xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back to somewhere beautiful.
        </p>
        <Button asChild variant="luxury" size="lg" className="hover-lift hover-glow">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
