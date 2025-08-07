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
                    Found 24 perfect matches
                  </div>
                </div>

                {/* Sample itinerary preview cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="destination-card p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">Bali Cultural Explorer</h4>
                      <div className="text-primary font-bold">$899</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      7 days exploring temples, rice terraces, and local culture
                    </p>
                    <div className="flex gap-2 mb-3">
                      <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Culture
                      </div>
                      <div className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                        Adventure
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Perfect match for your preferences
                    </div>
                  </div>

                  <div className="destination-card p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">Japan Heritage Journey</h4>
                      <div className="text-primary font-bold">$1,099</div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      6 days discovering ancient temples and modern cities
                    </p>
                    <div className="flex gap-2 mb-3">
                      <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Culture
                      </div>
                      <div className="text-xs bg-success/10 text-success px-2 py-1 rounded">
                        History
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      95% match for your interests
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <ItineraryCards />

      {/* Trust Elements */}
      <TrustElements />

      {/* Mobile Sticky Footer */}
      <StickyFooter />
    </div>
  );
};

export default Index;
