import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import strengthImage from "@/assets/strength-training.jpg";
import crossfitImage from "@/assets/crossfit-class.jpg";
import functionalImage from "@/assets/functional-training.jpg";
import cardioImage from "@/assets/cardio-zone.jpg";
import personalImage from "@/assets/personal-training.jpg";

const classes = [
  {
    title: "Strength Training",
    description: "Build raw power with barbells, dumbbells, and heavy compound movements. Perfect for powerlifters and strength athletes.",
    image: strengthImage,
  },
  {
    title: "CrossFit",
    description: "High-intensity functional fitness combining weightlifting, gymnastics, and cardio. Push your limits every session.",
    image: crossfitImage,
  },
  {
    title: "Functional Fitness",
    description: "Improve everyday movement patterns with kettlebells, medicine balls, and bodyweight exercises.",
    image: functionalImage,
  },
  {
    title: "Cardio Zone",
    description: "State-of-the-art cardio equipment including treadmills, rowers, bikes, and more. Burn calories and build endurance.",
    image: cardioImage,
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching with certified trainers. Customized programs designed to help you reach your specific goals.",
    image: personalImage,
  },
];

const Classes = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="classes" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display text-primary mb-4">
            Training Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your path to greatness. All programs include expert coaching and unlimited access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary">
                  {classItem.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {classItem.description}
                </CardDescription>
                <Button variant="outline" onClick={scrollToContact} className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
