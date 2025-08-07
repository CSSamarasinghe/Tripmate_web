import { useState } from "react";
import { Heart, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import baliImage from "@/assets/bali-destination.jpg";
import maldivesImage from "@/assets/maldives-destination.jpg";
import japanImage from "@/assets/japan-destination.jpg";
import santoriniImage from "@/assets/santorini-destination.jpg";
import pragueImage from "@/assets/prague-destination.jpg";
import patagoniaImage from "@/assets/patagonia-destination.jpg";

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: baliImage,
    price: "From $899",
    duration: "7 Days",
    rating: 4.8,
    reviews: 1203,
    highlights: ["Temples", "Beaches", "Culture"],
    description: "Tropical paradise with ancient temples and pristine beaches",
  },
  {
    id: 2,
    name: "Maldives",
    image: maldivesImage,
    price: "From $1,299",
    duration: "5 Days",
    rating: 4.9,
    reviews: 892,
    highlights: ["Luxury", "Overwater Villas", "Diving"],
    description: "Ultimate luxury escape with crystal clear waters",
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image: japanImage,
    price: "From $1,099",
    duration: "6 Days",
    rating: 4.7,
    reviews: 756,
    highlights: ["Culture", "Temples", "Gardens"],
    description: "Ancient traditions meet modern elegance",
  },
  {
    id: 4,
    name: "Santorini, Greece",
    image: santoriniImage,
    price: "From $1,199",
    duration: "5 Days",
    rating: 4.8,
    reviews: 934,
    highlights: ["Sunset", "Architecture", "Wine"],
    description: "Iconic white buildings overlooking the Aegean Sea",
  },
  {
    id: 5,
    name: "Prague, Czech Republic",
    image: pragueImage,
    price: "From $799",
    duration: "4 Days",
    rating: 4.6,
    reviews: 651,
    highlights: ["Architecture", "History", "Culture"],
    description: "Fairy-tale city with stunning medieval architecture",
  },
  {
    id: 6,
    name: "Patagonia, Argentina",
    image: patagoniaImage,
    price: "From $1,599",
    duration: "10 Days",
    rating: 4.9,
    reviews: 423,
    highlights: ["Nature", "Adventure", "Hiking"],
    description: "Breathtaking landscapes and pristine wilderness",
  },
];

const DestinationExplorer = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Popular Destinations
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore handpicked destinations that offer unforgettable experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="destination-card group cursor-pointer"
            onMouseEnter={() => setHoveredCard(destination.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="destination-overlay">
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-foreground"
                    >
                      {destination.duration}
                    </Badge>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20 p-1 h-8 w-8"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-sm opacity-90 mb-3">
                      {destination.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {destination.highlights.map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="outline"
                          className="border-white/50 text-white bg-white/10 text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Heart Icon */}
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-4 right-4 text-white hover:bg-white/20 p-1 h-8 w-8 z-10"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Card Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{destination.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="text-sm font-medium">
                    {destination.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({destination.reviews})
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {destination.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Asia
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-primary">
                  {destination.price}
                </div>
                <Button
                  size="sm"
                  className={`transition-all duration-300 ${
                    hoveredCard === destination.id
                      ? "bg-primary hover:bg-primary-hover"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationExplorer;
