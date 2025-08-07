import { useState } from "react";
import { Heart, Star, Clock, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const estoniaImage =
  "https://raw.githubusercontent.com/CSSamarasinghe/Tripmate_web/main/src/assets/estonia-destination.jpg";
const faroeImage =
  "https://raw.githubusercontent.com/CSSamarasinghe/Tripmate_web/main/src/assets/Faroe.jpg";
const madagascarImage =
  "https://raw.githubusercontent.com/CSSamarasinghe/Tripmate_web/main/src/assets/Madagascar.jpg";
const switzerlandImage =
  "https://github.com/CSSamarasinghe/Tripmate_web/blob/main/src/assets/Swiss.png?raw=true";
const bhutanImage =
  "https://github.com/CSSamarasinghe/Tripmate_web/blob/main/src/assets/Bhutan.jpg?raw=true";
const sloveniaImage =
  "https://github.com/CSSamarasinghe/Tripmate_web/blob/main/src/assets/Estonia.jpg?raw=true";

const underratedDestinations = [
  {
    id: 1,
    name: "Tallinn, Estonia",
    image: estoniaImage,
    price: "From LKR 300,699",
    duration: "4 Days",
    rating: 4.7,
    reviews: 198,
    highlights: ["Medieval", "Digital", "Baltic"],
    description: "Medieval charm meets digital innovation",
    trendScore: "+200% interest",
    savingsBadge: "40% less than similar destinations",
    region: "Europe",
  },
  {
    id: 2,
    name: "Faroe Islands",
    image: faroeImage,
    price: "From LKR 431,299",
    duration: "5 Days",
    rating: 4.9,
    reviews: 156,
    highlights: ["Remote", "Nature", "Authentic"],
    description: "Untouched Nordic wilderness",
    trendScore: "+150% interest",
    savingsBadge: "Hidden gem pricing",
    region: "Europe",
  },
  {
    id: 3,
    name: "Madagascar",
    image: madagascarImage,
    price: "From LKR 425,599",
    duration: "9 Days",
    rating: 4.8,
    reviews: 123,
    highlights: ["Unique", "Wildlife", "Adventure"],
    description: "8th continent with unique biodiversity",
    trendScore: "+180% interest",
    savingsBadge: "Exclusive wildlife access",
    region: "Africa",
  },
  {
    id: 4,
    name: "Swiss Alps, Switzerland",
    image: switzerlandImage,
    price: "From LKR 543,499",
    duration: "5 Days",
    rating: 4.9,
    reviews: 287,
    highlights: ["Mountains", "Lakes", "Charming Villages"],
    description: "Breathtaking alpine scenery beyond the tourist hotspots",
    trendScore: "+220% interest",
    savingsBadge: "30% off-season deals",
    region: "Europe",
  },
  {
    id: 5,
    name: "Bhutan",
    image: bhutanImage,
    price: "From LKR 342,899",
    duration: "7 Days",
    rating: 4.8,
    reviews: 145,
    highlights: ["Buddhism", "Himalayas", "Culture"],
    description: "Last Shangri-La with untouched Himalayan culture",
    trendScore: "+250% interest",
    savingsBadge: "Exclusive cultural access",
    region: "Asia",
  },
  {
    id: 6,
    name: "Slovenia",
    image: sloveniaImage,
    price: "From LKR 230,899",
    duration: "6 Days",
    rating: 4.7,
    reviews: 176,
    highlights: ["Castles", "Caves", "Alpine Lakes"],
    description: "Europe's best kept secret with fairytale landscapes",
    trendScore: "+190% interest",
    savingsBadge: "50% less crowded than neighbors",
    region: "Europe",
  },
];

const UnderratedDestinations = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Underrated Destinations
          </h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover hidden gems before they become mainstream. These destinations
          offer authentic experiences away from crowds
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {underratedDestinations.map((destination) => (
          <div
            key={destination.id}
            className="destination-card group cursor-pointer"
            onMouseEnter={() => setHoveredCard(destination.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Trending Badge */}
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-success text-white">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Rising
                </Badge>
              </div>

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
            </div>

            {/* Card Content */}
            <div className="p-6">
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

              {/* Trend & Savings Info */}
              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 p-2 bg-success/10 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-xs text-success font-medium">
                    {destination.trendScore}
                  </span>
                </div>
                <div className="text-xs text-accent font-medium bg-accent/10 p-2 rounded-lg">
                  💰 {destination.savingsBadge}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {destination.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {destination.region}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-primary">
                  {destination.price}
                </div>
                <Button
                  size="sm"
                  className="bg-primary text-background  hover:bg-white/90 hover:text-foreground transition-all duration-300"
                >
                  Discover
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnderratedDestinations;
