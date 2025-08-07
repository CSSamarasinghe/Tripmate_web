import { Clock, MapPin, Plane, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const lastMinuteDeals = [
  {
    id: 1,
    destination: "Singapore",
    country: "Singapore",
    price: "$899",
    originalPrice: "$1,299",
    discount: "31% OFF",
    duration: "4 Days",
    departure: "Tomorrow",
    highlights: ["No Visa", "City Break", "Food Paradise"],
    description: "Modern city-state with incredible cuisine",
    urgency: "3 spots left",
  },
  {
    id: 2,
    destination: "Dubai, UAE",
    country: "United Arab Emirates",
    price: "$1,199",
    originalPrice: "$1,699",
    discount: "29% OFF",
    duration: "5 Days",
    departure: "This Weekend",
    highlights: ["No Visa", "Luxury", "Shopping"],
    description: "Luxury desert metropolis",
    urgency: "5 spots left",
  },
  {
    id: 3,
    destination: "Kuala Lumpur",
    country: "Malaysia",
    price: "$649",
    originalPrice: "$899",
    discount: "28% OFF",
    duration: "3 Days",
    departure: "Next Week",
    highlights: ["No Visa", "Culture", "Food"],
    description: "Vibrant cultural melting pot",
    urgency: "2 spots left",
  },
  {
    id: 4,
    destination: "Mauritius",
    country: "Mauritius",
    price: "$1,599",
    originalPrice: "$2,199",
    discount: "27% OFF",
    duration: "6 Days",
    departure: "This Friday",
    highlights: ["No Visa", "Beaches", "Romance"],
    description: "Tropical island paradise",
    urgency: "1 spot left",
  },
];

const LastMinuteGetaways = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap className="h-6 w-6 text-warning" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Last Minute Getaways
          </h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          No visa required holidays departing soon. Perfect for spontaneous
          adventures with incredible savings
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Large Featured Deal */}
        <Card className="md:col-span-2 lg:row-span-2 relative overflow-hidden group cursor-pointer hover:shadow-[var(--shadow-large)] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20" />
          <CardContent className="p-8 relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-warning text-white">
                  <Zap className="h-3 w-3 mr-1" />
                  Flash Deal
                </Badge>
                <Badge
                  variant="outline"
                  className="border-success text-success"
                >
                  No Visa Required
                </Badge>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {lastMinuteDeals[0].destination}
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                {lastMinuteDeals[0].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {lastMinuteDeals[0].highlights.map((highlight) => (
                  <Badge
                    key={highlight}
                    variant="secondary"
                    className="text-xs"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {lastMinuteDeals[0].duration}
                </div>
                <div className="flex items-center gap-1">
                  <Plane className="h-4 w-4" />
                  {lastMinuteDeals[0].departure}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">
                      {lastMinuteDeals[0].price}
                    </span>
                    <Badge className="bg-success text-white">
                      {lastMinuteDeals[0].discount}
                    </Badge>
                  </div>
                  <span className="text-sm line-through text-muted-foreground">
                    {lastMinuteDeals[0].originalPrice}
                  </span>
                </div>
                <Button className="bg-accent hover:bg-accent-hover">
                  Book Now
                </Button>
              </div>

              <div className="text-xs text-warning font-medium">
                ⚡ {lastMinuteDeals[0].urgency}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Smaller Deal Cards */}
        {lastMinuteDeals.slice(1).map((deal) => (
          <Card
            key={deal.id}
            className="relative overflow-hidden group cursor-pointer hover:shadow-[var(--shadow-large)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            <CardContent className="p-6 relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant="outline"
                    className="border-success text-success text-xs"
                  >
                    No Visa
                  </Badge>
                  <Badge className="bg-warning text-white text-xs">
                    {deal.discount}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-2">{deal.destination}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {deal.description}
                </p>

                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {deal.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Plane className="h-3 w-3" />
                    {deal.departure}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-primary">
                      {deal.price}
                    </div>
                    <span className="text-xs line-through text-muted-foreground">
                      {deal.originalPrice}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary-hover text-xs"
                  >
                    Book
                  </Button>
                </div>
                <div className="text-xs text-warning font-medium">
                  ⚡ {deal.urgency}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LastMinuteGetaways;
