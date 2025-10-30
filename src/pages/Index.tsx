import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Gallery from "@/components/Gallery";
import Membership from "@/components/Membership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Classes />
      <Gallery />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
