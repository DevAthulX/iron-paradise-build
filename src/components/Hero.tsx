import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display mb-6 text-shadow-strong">
          Iron Paradise
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl font-display mb-8 text-primary text-shadow-strong">
          Where Strength is Built
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-shadow-strong">
          Transform your body and mind at our premium fitness center. Join our community of champions.
        </p>
        <Button
          variant="hero"
          size="xl"
          onClick={() => scrollToSection("contact")}
          className="animate-scale-in"
        >
          Join Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
