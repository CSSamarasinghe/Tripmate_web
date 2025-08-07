import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/370467925.sd.mp4?s=1b95d7f923ab4ad5c6f4a7b6c5c7b9a0d2e4f6a7&profile_id=165"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Discover Your Next
          <span className="block gradient-text bg-gradient-to-r from-sunset to-yellow-300">
            Adventure
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Create personalized itineraries and explore the world's most beautiful
          destinations
        </p>

        {/* Search Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
              <Input
                placeholder="Where do you want to go?"
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
              />
            </div>
            <Button
              size="lg"
              className="h-12 px-8 bg-accent hover:bg-accent-hover text-white font-semibold"
            >
              <Search className="mr-2 h-5 w-5" />
              Explore
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">
              150+
            </div>
            <div className="text-white/80 text-sm">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">
              50K+
            </div>
            <div className="text-white/80 text-sm">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">4.9</div>
            <div className="text-white/80 text-sm">Rating</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
    </section>
  );
};

export default HeroSection;
