import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$49",
    period: "/month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Full gym access",
      "Cardio zone access",
      "Locker room amenities",
      "Mobile app access",
      "Monthly fitness assessment",
    ],
  },
  {
    name: "Pro",
    price: "$89",
    period: "/month",
    description: "For serious athletes ready to level up",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "2 personal training sessions/month",
      "Nutrition consultation",
      "Priority equipment access",
      "Guest pass (2/month)",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$149",
    period: "/month",
    description: "Ultimate package for champions",
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Custom meal planning",
      "Recovery & massage therapy",
      "24/7 gym access",
      "VIP locker",
      "Supplement discounts",
    ],
  },
];

const Membership = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="membership" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-display text-primary mb-4">
            Membership Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your goals. All memberships include no commitment cancellation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden hover-lift ${
                plan.popular ? "border-primary border-2" : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-3xl font-display mb-2">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-display text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-base mt-4">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full mt-6"
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
