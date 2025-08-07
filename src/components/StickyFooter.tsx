import { useState } from "react";
import { ArrowRight, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyFooter = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  return (
    <div className="sticky-footer">
      <div className="flex items-center justify-between">
        {/* Progress & Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="text-sm">
              <span className="font-semibold">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden max-w-24">
              <div
                className="h-full bg-primary transition-all duration-300 rounded-full"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {currentStep === 1 && "Choose your destination"}
            {currentStep === 2 && "Select dates & travelers"}
            {currentStep === 3 && "Customize your trip"}
            {currentStep === 4 && "Review & book"}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="p-2 h-10 w-10">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="p-2 h-10 w-10">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary-hover text-white px-6"
            onClick={() =>
              setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
            }
          >
            {currentStep === totalSteps ? "Book Now" : "Continue"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
