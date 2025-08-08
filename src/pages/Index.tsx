import HeroSection from "@/components/HeroSection";
import DestinationExplorer from "@/components/DestinationExplorer";
import DestinationsPickedForYou from "@/components/DestinationsPickedForYou";
import UnderratedDestinations from "@/components/UnderratedDestinations";
import LastMinuteGetaways from "@/components/LastMinuteGetaways";
import TripBuilder from "@/components/TripBuilder";
import FiltersPanel from "@/components/FiltersPanel";
import ItineraryCards from "@/components/ItineraryCards";
import TrustElements from "@/components/TrustElements";
import StickyFooter from "@/components/StickyFooter";

const Index = () => {
  const itineraries = [
    {
      id: 1,
      title: "Bali Cultural Explorer",
      price: "$899",
      duration: "7 days",
      description: "Explore temples, rice terraces, and local culture",
      tags: [
        { label: "Culture", color: "primary" },
        { label: "Adventure", color: "accent" },
      ],
      match: "Perfect match for your preferences",
    },
    {
      id: 2,
      title: "Japan Heritage Journey",
      price: "$1,099",
      duration: "6 days",
      description: "Discover ancient temples and modern cities",
      tags: [
        { label: "Culture", color: "primary" },
        { label: "History", color: "success" },
      ],
      match: "95% match for your interests",
    },
    {
      id: 3,
      title: "Greek Island Hopper",
      price: "$1,299",
      duration: "8 days",
      description: "Santorini, Mykonos, and Crete island adventure",
      tags: [
        { label: "Beach", color: "accent" },
        { label: "Romance", color: "primary" },
      ],
      match: "90% match for your preferences",
    },
    {
      id: 4,
      title: "Italian Food & Wine Tour",
      price: "$1,499",
      duration: "9 days",
      description: "Tuscany and Amalfi Coast culinary experience",
      tags: [
        { label: "Food", color: "success" },
        { label: "Luxury", color: "accent" },
      ],
      match: "88% match for your interests",
    },
    {
      id: 5,
      title: "Costa Rica Eco Adventure",
      price: "$1,199",
      duration: "10 days",
      description: "Rainforests, volcanoes, and wildlife encounters",
      tags: [
        { label: "Adventure", color: "accent" },
        { label: "Nature", color: "success" },
      ],
      match: "92% match for your preferences",
    },
    {
      id: 6,
      title: "Moroccan Desert Trek",
      price: "$999",
      duration: "7 days",
      description: "From Marrakech to Sahara desert camps",
      tags: [
        { label: "Adventure", color: "accent" },
        { label: "Cultural", color: "primary" },
      ],
      match: "85% match for your interests",
    },
    {
      id: 7,
      title: "Swiss Alpine Explorer",
      price: "$1,799",
      duration: "6 days",
      description: "Scenic train journeys and mountain retreats",
      tags: [
        { label: "Mountains", color: "success" },
        { label: "Luxury", color: "accent" },
      ],
      match: "91% match for your preferences",
    },
    {
      id: 8,
      title: "Vietnam Highlights Tour",
      price: "$1,099",
      duration: "12 days",
      description: "From Hanoi to Ho Chi Minh City",
      tags: [
        { label: "Culture", color: "primary" },
        { label: "Food", color: "success" },
      ],
      match: "89% match for your interests",
    },
    {
      id: 6,
      title: "Moroccan Desert Trek",
      price: "$999",
      duration: "7 days",
      description: "From Marrakech to Sahara desert camps",
      tags: [
        { label: "Adventure", color: "accent" },
        { label: "Cultural", color: "primary" },
      ],
      match: "85% match for your interests",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Destination Explorer */}
      <DestinationExplorer />

      {/* Destinations Picked For You */}
      <div className="bg-muted/20">
        <DestinationsPickedForYou />
      </div>

      {/* Underrated Destinations */}
      <UnderratedDestinations />

      {/* Last Minute Getaways */}
      <div className="bg-muted/20">
        <LastMinuteGetaways />
      </div>

      {/* Trip Builder */}
      <TripBuilder />

      {/* Filters & Itinerary Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore & Customize
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Use our smart filters to find the perfect trip that matches your
              preferences and budget
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Filters Panel */}
            <div className="lg:col-span-1 mb-8 lg:mb-0">
              <FiltersPanel />
            </div>

            {/* Results Area */}
            <div className="lg:col-span-3">
              <div className="bg-background rounded-xl p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">
                    Recommended Itineraries
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    Found {itineraries.length + 1} perfect matches
                  </div>
                </div>

                {/* Itinerary cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {itineraries.map((itinerary) => (
                    <div
                      key={itinerary.id}
                      className="destination-card p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{itinerary.title}</h4>
                        <div className="text-primary font-bold">
                          {itinerary.price}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {itinerary.duration} {itinerary.description}
                      </p>
                      <div className="flex gap-2 mb-3">
                        {itinerary.tags.map((tag, index) => (
                          <div
                            key={index}
                            className={`text-xs bg-${tag.color}/10 text-${tag.color} px-2 py-1 rounded`}
                          >
                            {tag.label}
                          </div>
                        ))}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {itinerary.match}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      {/* <ItineraryCards /> */}

      {/* Trust Elements */}
      <TrustElements />

      {/* Mobile Sticky Footer */}
      <StickyFooter />
    </div>
  );
};

export default Index;
