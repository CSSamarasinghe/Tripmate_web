import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  Camera,
  Utensils,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const itineraryData = [
  {
    day: 1,
    title: "Arrival & Cultural Immersion",
    location: "Ubud, Bali",
    activities: [
      {
        time: "10:00 AM",
        title: "Airport Pickup & Hotel Check-in",
        description:
          "Arrive at Ngurah Rai Airport and transfer to your boutique hotel in Ubud",
        icon: Car,
        duration: "2 hours",
      },
      {
        time: "2:00 PM",
        title: "Ubud Monkey Forest Sanctuary",
        description:
          "Explore the sacred forest and interact with local wildlife",
        icon: Camera,
        duration: "1.5 hours",
      },
      {
        time: "6:00 PM",
        title: "Traditional Balinese Dinner",
        description: "Enjoy authentic local cuisine at a family-run warung",
        icon: Utensils,
        duration: "2 hours",
      },
    ],
  },
  {
    day: 2,
    title: "Temples & Rice Terraces",
    location: "Central Bali",
    activities: [
      {
        time: "8:00 AM",
        title: "Tegallalang Rice Terraces",
        description:
          "Witness stunning sunrise views over the famous terraced landscapes",
        icon: Camera,
        duration: "2 hours",
      },
      {
        time: "11:00 AM",
        title: "Tirta Empul Temple",
        description: "Experience the sacred water purification ritual",
        icon: MapPin,
        duration: "1.5 hours",
      },
      {
        time: "3:00 PM",
        title: "Coffee Plantation Tour",
        description:
          "Learn about traditional coffee making and taste local varieties",
        icon: Utensils,
        duration: "2 hours",
      },
    ],
  },
  {
    day: 3,
    title: "Beach Day & Sunset",
    location: "Seminyak Beach",
    activities: [
      {
        time: "9:00 AM",
        title: "Beach Relaxation",
        description: "Unwind at one of Bali's most beautiful beaches",
        icon: Camera,
        duration: "3 hours",
      },
      {
        time: "1:00 PM",
        title: "Beachfront Lunch",
        description: "Fresh seafood with ocean views",
        icon: Utensils,
        duration: "1 hour",
      },
      {
        time: "6:00 PM",
        title: "Tanah Lot Sunset",
        description: "Visit the iconic sea temple for spectacular sunset views",
        icon: Camera,
        duration: "2 hours",
      },
    ],
  },
];

const ItineraryCards = () => {
  const [openDays, setOpenDays] = useState<number[]>([1]);

  const toggleDay = (day: number) => {
    setOpenDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Personalized Itinerary
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A carefully crafted day-by-day plan tailored to your preferences
        </p>
      </div>

      <div className="space-y-4">
        {itineraryData.map((dayPlan) => {
          const isOpen = openDays.includes(dayPlan.day);

          return (
            <Card
              key={dayPlan.day}
              className="overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-medium)]"
            >
              <Collapsible>
                <CollapsibleTrigger
                  className="w-full"
                  onClick={() => toggleDay(dayPlan.day)}
                >
                  <CardHeader className="cursor-pointer hover:bg-card-hover transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                          {dayPlan.day}
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl mb-1">
                            {dayPlan.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{dayPlan.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {dayPlan.activities.length} activities
                        </Badge>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {dayPlan.activities.map((activity, index) => {
                        const Icon = activity.icon;

                        return (
                          <div
                            key={index}
                            className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Icon className="h-5 w-5 text-primary" />
                              </div>
                            </div>

                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold text-base">
                                    {activity.title}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {activity.description}
                                  </p>
                                </div>
                                <div className="text-right text-sm text-muted-foreground ml-4">
                                  <div className="font-medium">
                                    {activity.time}
                                  </div>
                                  <div className="flex items-center gap-1 mt-1">
                                    <Clock className="h-3 w-3" />
                                    {activity.duration}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Day Summary */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-medium">
                            Day {dayPlan.day} Complete
                          </span>
                          <span className="text-muted-foreground ml-2">
                            • {dayPlan.activities.length} experiences
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          Full Day
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
        <Button size="lg" className="bg-primary hover:bg-primary-hover">
          Customize Itinerary
        </Button>
        <Button size="lg" variant="outline">
          Download PDF
        </Button>
        <Button size="lg" className="bg-accent hover:bg-accent-hover">
          Book This Trip
        </Button>
      </div>
    </section>
  );
};

export default ItineraryCards;
