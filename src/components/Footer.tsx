import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-display text-primary">Iron Paradise</h3>
            <p className="text-sm text-muted-foreground">
              Where Strength is Built. Join our community of champions and transform your life.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display uppercase">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">
                About Us
              </button>
              <button onClick={() => scrollToSection("classes")} className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">
                Classes
              </button>
              <button onClick={() => scrollToSection("membership")} className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">
                Membership
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">
                Contact
              </button>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display uppercase">Contact Info</h4>
            <div className="space-y-2">
              <a href="tel:+15555551234" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (555) 555-1234
              </a>
              <a href="mailto:info@ironparadise.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@ironparadise.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display uppercase">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Iron Paradise. All rights reserved. Built with passion and discipline.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
