import React, { useState } from "react";
import { Calendar, MapPin, Users, Plane, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  { id: 1, title: "Destination", icon: MapPin },
  { id: 2, title: "Dates", icon: Calendar },
  { id: 3, title: "Travelers", icon: Users },
  { id: 4, title: "Customize", icon: Plane },
];

const TripBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tripData, setTripData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 2,
    budget: 2000,
    interests: [] as string[],
  });

  const interests = [
    "Adventure",
    "Culture",
    "Relaxation",
    "Food",
    "Nature",
    "History",
    "Photography",
    "Beach",
    "Mountains",
    "Cities",
  ];

  const toggleInterest = (interest: string) => {
    setTripData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Plan Your Perfect Trip
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Tell us your preferences and we'll create a personalized itinerary
          just for you
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`step-indicator ${
                      isCompleted
                        ? "completed"
                        : isActive
                        ? "active"
                        : "pending"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Icon className="h-4 w-4" />
                    )}
                  </div>
                  <span
                    className={`text-xs mt-2 font-medium ${
                      isActive
                        ? "text-primary"
                        : isCompleted
                        ? "text-success"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-0.5 mx-4 mt-[-20px] ${
                      isCompleted ? "bg-success" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {React.createElement(steps[currentStep - 1].icon, {
              className: "h-5 w-5",
            })}
            Step {currentStep}: {steps[currentStep - 1].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Destination */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="destination">Where would you like to go?</Label>
                <Input
                  id="destination"
                  placeholder="e.g., Bali, Tokyo, Paris..."
                  value={tripData.destination}
                  onChange={(e) =>
                    setTripData((prev) => ({
                      ...prev,
                      destination: e.target.value,
                    }))
                  }
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Bali",
                  "Tokyo",
                  "Paris",
                  "Maldives",
                  "Thailand",
                  "Greece",
                ].map((dest) => (
                  <Button
                    key={dest}
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setTripData((prev) => ({ ...prev, destination: dest }))
                    }
                    className={
                      tripData.destination === dest
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {dest}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Dates */}
          {currentStep === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Departure Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={tripData.startDate}
                  onChange={(e) =>
                    setTripData((prev) => ({
                      ...prev,
                      startDate: e.target.value,
                    }))
                  }
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="endDate">Return Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={tripData.endDate}
                  onChange={(e) =>
                    setTripData((prev) => ({
                      ...prev,
                      endDate: e.target.value,
                    }))
                  }
                  className="mt-1"
                />
              </div>
            </div>
          )}

          {/* Step 3: Travelers */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="travelers">Number of Travelers</Label>
                <Input
                  id="travelers"
                  type="number"
                  min="1"
                  max="10"
                  value={tripData.travelers}
                  onChange={(e) =>
                    setTripData((prev) => ({
                      ...prev,
                      travelers: parseInt(e.target.value),
                    }))
                  }
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="budget">Budget per person (USD)</Label>
                <div className="mt-1">
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={tripData.budget}
                    onChange={(e) =>
                      setTripData((prev) => ({
                        ...prev,
                        budget: parseInt(e.target.value),
                      }))
                    }
                    className="filter-slider w-full"
                    style={
                      {
                        "--value": `${
                          ((tripData.budget - 500) / (5000 - 500)) * 100
                        }%`,
                      } as any
                    }
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>$500</span>
                    <span className="font-semibold text-primary">
                      ${tripData.budget}
                    </span>
                    <span>$5000+</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Customize */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <Label>What interests you? (Select all that apply)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {interests.map((interest) => (
                    <Badge
                      key={interest}
                      variant={
                        tripData.interests.includes(interest)
                          ? "default"
                          : "outline"
                      }
                      className="cursor-pointer justify-center py-2 transition-all hover:scale-105"
                      onClick={() => toggleInterest(interest)}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              {tripData.interests.length > 0 && (
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Your Trip Summary:</h4>
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>Destination:</strong> {tripData.destination}
                    </p>
                    <p>
                      <strong>Duration:</strong> {tripData.startDate} to{" "}
                      {tripData.endDate}
                    </p>
                    <p>
                      <strong>Travelers:</strong> {tripData.travelers} people
                    </p>
                    <p>
                      <strong>Budget:</strong> ${tripData.budget} per person
                    </p>
                    <p>
                      <strong>Interests:</strong>{" "}
                      {tripData.interests.join(", ")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Previous
            </Button>

            {currentStep < steps.length ? (
              <Button
                onClick={nextStep}
                className="bg-primary hover:bg-primary-hover"
              >
                Next Step
              </Button>
            ) : (
              <Button className="bg-accent hover:bg-accent-hover">
                Create My Itinerary
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default TripBuilder;
