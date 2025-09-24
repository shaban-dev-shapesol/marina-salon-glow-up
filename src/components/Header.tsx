import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Phone, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="glass-effect sticky top-0 z-50 w-full border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold luxury-gradient">
          Marina Salon
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-6">
            <NavigationMenuItem>
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-foreground hover:text-primary">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        to="/services"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          All Services
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Explore our complete range of beauty and wellness treatments
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/services/hair" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Hair Services</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Cuts, coloring, and treatments
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/services/nails" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Nails & Beauty</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professional nail care
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/services/facial" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Facial Treatments</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Rejuvenating skincare
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/services/eyes-brows" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Eyes & Brows</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Expert eye treatments
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/services/makeup" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Make-up</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professional makeup
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/services/massages" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Massages</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Relaxing treatments
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/services/aesthetics" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Aesthetics</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Advanced treatments
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/services/waxing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Waxing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Hair removal services
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>Book Now</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Manchester</span>
            </div>
          </div>
          <Button variant="luxury" size="sm">
            Book Appointment
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};