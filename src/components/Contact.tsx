import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display text-primary mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey? Come by for a free tour and trial workout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="bg-card border-border hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-display">
                  <MapPin className="w-6 h-6 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Strength Street<br />
                  Fitness District, FT 12345<br />
                  United States
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-display">
                  <Clock className="w-6 h-6 text-primary" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-primary font-bold">5:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="text-primary font-bold">6:00 AM - 10:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Elite members have 24/7 access
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-display">
                  <Phone className="w-6 h-6 text-primary" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <a href="tel:+15555551234" className="hover:text-primary transition-colors">
                    (555) 555-1234
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <a href="mailto:info@ironparadise.com" className="hover:text-primary transition-colors">
                    info@ironparadise.com
                  </a>
                </div>
                <Button variant="default" className="w-full mt-4" asChild>
                  <a href="https://wa.me/15555551234" target="_blank" rel="noopener noreferrer">
                    Message on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border overflow-hidden hover-lift">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Iron Paradise Location"
                />
              </div>
            </Card>

            <Card className="bg-card border-border hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Tag us <span className="text-primary font-bold">@ironparadisegym</span> and share your progress!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
