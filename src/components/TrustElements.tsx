import { Star, Shield, Award, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sanduni Perera",
    location: "Mawanella, Sri Lanka",
    rating: 5,
    comment:
      "Absolutely incredible trip! Every detail was perfectly planned and the experiences were unforgettable.",
    avatar: "PS",
    verified: true,
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    comment:
      "The best travel experience I've ever had. Professional service and amazing local insights.",
    avatar: "MC",
    verified: true,
  },
  {
    name: "Umaira Marikkar",
    location: "Kandy, Sri Lanka",
    rating: 5,
    comment:
      "Perfect balance of adventure and relaxation. Highly recommend to anyone looking for authentic travel.",
    avatar: "UM",
    verified: true,
  },
];

const stats = [
  { icon: Users, label: "Happy Travelers", value: 50000, suffix: "+" },
  { icon: Award, label: "Travel Awards", value: 25, suffix: "+" },
  { icon: Shield, label: "Years Experience", value: 15, suffix: "+" },
  { icon: CheckCircle, label: "Trip Success Rate", value: 99.8, suffix: "%" },
];

const TrustElements = () => {
  // State for each counter
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    // Animation duration in milliseconds
    const duration = 2000;
    // Frame rate (how often we update the counter)
    const frameRate = 30;
    // Total frames
    const totalFrames = Math.round(duration / (1000 / frameRate));

    // Start the animation for each counter
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / totalFrames;
      let currentCount = 0;
      let currentFrame = 0;

      return setInterval(() => {
        currentFrame += 1;
        currentCount += increment;

        // Stop at the target value
        if (currentFrame >= totalFrames) {
          currentCount = stat.value;
          clearInterval(intervals[index]);
        }

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.round(currentCount);
          return newCounters;
        });
      }, 1000 / frameRate);
    });

    // Clean up intervals on unmount
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {counters[index].toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Rest of your component remains the same */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning text-warning" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span className="text-muted-foreground">from 2,847 reviews</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from travelers who've
            experienced unforgettable journeys with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-[var(--shadow-medium)] transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-success/10 text-success border-success/20"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-warning text-warning"
                    />
                  ))}
                </div>

                <p className="text-sm text-foreground leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Trusted & Secure</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">IATA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustElements;
