import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-accent/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get in <span className="luxury-gradient">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your look? Contact Marina Salon today to book your appointment 
                or ask any questions about our services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="border-border/50">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Phone</CardTitle>
                          <CardDescription>Call us to book your appointment</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">+44 161 123 4567</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Email</CardTitle>
                          <CardDescription>Send us a message anytime</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">hello@marinasalon.co.uk</p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Location</CardTitle>
                          <CardDescription>Visit us in Manchester city center</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">
                        123 Beauty Street<br />
                        Manchester, M1 2AB<br />
                        United Kingdom
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">Opening Hours</CardTitle>
                          <CardDescription>We're here when you need us</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span className="font-semibold">9:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span className="font-semibold">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span className="font-semibold">10:00 AM - 5:00 PM</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Your last name" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+44 123 456 7890" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <select 
                          id="service" 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select a service</option>
                          <option value="hair">Hair Services</option>
                          <option value="nails">Nails & Beauty</option>
                          <option value="facial">Facial Treatments</option>
                          <option value="eyes-brows">Eyes & Brows</option>
                          <option value="makeup">Make-up</option>
                          <option value="massages">Massages</option>
                          <option value="aesthetics">Aesthetics</option>
                          <option value="waxing">Waxing</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your beauty goals or any questions you have..."
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" variant="luxury">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-lg text-muted-foreground">
                Located in the heart of Manchester, easily accessible by public transport
              </p>
            </div>
            <Card className="max-w-4xl mx-auto border-border/50">
              <CardContent className="p-0">
                <div className="bg-muted/30 h-64 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold">123 Beauty Street</p>
                    <p className="text-muted-foreground">Manchester, M1 2AB</p>
                    <Button variant="outline" className="mt-4">
                      Open in Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;