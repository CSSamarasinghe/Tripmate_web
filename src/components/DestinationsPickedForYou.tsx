import { useState } from "react";
import { Heart, Star, Clock, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const faroeImage =
  "https://raw.githubusercontent.com/CSSamarasinghe/Tripmate_web/main/src/assets/Faroe.jpg";
const madagascarImage =
  "https://raw.githubusercontent.com/CSSamarasinghe/Tripmate_web/main/src/assets/Madagascar.jpg";
const moroccoImage =
  "https://github.com/CSSamarasinghe/Tripmate_web/blob/main/src/assets/Morocco.jpg?raw=true";
const icelandImage =
  "https://github.com/CSSamarasinghe/Tripmate_web/blob/main/src/assets/Iceland.png?raw=true";
const vietnamImage =
  "https://github.com/CSSamarasinghe/Tripmate_web/blob/main/src/assets/Vietnam.jpg?raw=true";
const peruImage =
  "https://github.com/CSSamarasinghe/Tripmate_web/blob/main/src/assets/Peru.png?raw=true";

const pickedDestinations = [
  {
    id: 1,
    name: "Faroe Islands",
    image: faroeImage,
    price: "From LKR 431,399",
    duration: "6 Days",
    rating: 4.9,
    reviews: 312,
    highlights: ["Remote", "Nature", "Nordic"],
    description: "Dramatic landscapes and untouched Nordic beauty",
    personalizedReason: "Perfect for your love of remote destinations",
    region: "Europe",
  },
  {
    id: 2,
    name: "Morocco",
    image: moroccoImage,
    price: "From LKR 374,999",
    duration: "8 Days",
    rating: 4.7,
    reviews: 789,
    highlights: ["Culture", "Desert", "Architecture"],
    description: "Imperial cities and Sahara desert adventure",
    personalizedReason: "Matches your interest in cultural experiences",
    region: "Africa",
  },
  {
    id: 3,
    name: "Madagascar",
    image: madagascarImage,
    price: "From LKR 321,799",
    duration: "12 Days",
    rating: 4.8,
    reviews: 234,
    highlights: ["Wildlife", "Unique", "Adventure"],
    description: "World's 4th largest island with unique biodiversity",
    personalizedReason: "Great for wildlife and adventure lovers",
    region: "Africa",
  },
  {
    id: 4,
    name: "Iceland",
    image: icelandImage,
    price: "From LKR 541,599",
    duration: "7 Days",
    rating: 4.9,
    reviews: 876,
    highlights: ["Northern Lights", "Waterfalls", "Geothermal"],
    description: "Land of fire and ice with breathtaking natural wonders",
    personalizedReason: "Ideal for your passion for unique landscapes",
    region: "Europe",
  },
  {
    id: 5,
    name: "Vietnam",
    image: vietnamImage,
    price: "From LKR 435,899",
    duration: "10 Days",
    rating: 4.6,
    reviews: 543,
    highlights: ["Food", "History", "Beaches"],
    description: "Vibrant culture with stunning coastline and rich history",
    personalizedReason: "Matches your love for authentic cuisine",
    region: "Asia",
  },
  {
    id: 6,
    name: "Peru",
    image: peruImage,
    price: "From LKR 341,299",
    duration: "9 Days",
    rating: 4.7,
    reviews: 432,
    highlights: ["Machu Picchu", "Andes", "Culture"],
    description: "Ancient ruins and diverse landscapes from coast to jungle",
    personalizedReason: "Perfect for your interest in ancient civilizations",
    region: "South America",
  },
];

const DestinationsPickedForYou = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Destinations Picked For You
          </h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Based on your preferences and travel history, we've curated these
          perfect destinations just for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pickedDestinations.map((destination) => (
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

              {/* Personalized Recommendation */}
              <div className="flex items-center gap-2 mb-3 p-2 bg-accent/10 rounded-lg">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-xs text-accent font-medium">
                  {destination.personalizedReason}
                </span>
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
                  className="bg-primary text-background hover:bg-white/90 hover:text-background transition-all duration-300"
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

export default DestinationsPickedForYou;
