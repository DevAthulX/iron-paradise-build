import trainersImage from "@/assets/trainers-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-display text-primary">
              Our Mission
            </h2>
            <h3 className="text-2xl md:text-3xl font-display">
              Building Champions, One Rep at a Time
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Iron Paradise isn't just a gym—it's a movement. We're a community of dedicated athletes, 
              fitness enthusiasts, and champions who believe that true strength comes from discipline, 
              consistency, and pushing beyond your limits.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by athletes for athletes, we've created a space where everyone from beginners 
              to elite competitors can train, grow, and achieve their goals. Our philosophy is simple: 
              show up, work hard, and never give up.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display text-primary mb-2">500+</div>
                <div className="text-sm uppercase tracking-wider">Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display text-primary mb-2">15+</div>
                <div className="text-sm uppercase tracking-wider">Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-display text-primary mb-2">24/7</div>
                <div className="text-sm uppercase tracking-wider">Access</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <img
              src={trainersImage}
              alt="Iron Paradise Training Team"
              className="rounded-lg shadow-2xl hover-lift"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
