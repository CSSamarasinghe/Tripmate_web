import { useState } from "react";
import { Sliders, DollarSign, Calendar, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const FiltersPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    budget: [500, 3000],
    duration: [3, 14],
    pace: [] as string[],
    themes: [] as string[],
    activities: [] as string[],
  });

  const paceOptions = ["Relaxed", "Moderate", "Fast-paced"];
  const themeOptions = [
    "Adventure",
    "Cultural",
    "Romance",
    "Family",
    "Solo",
    "Luxury",
    "Relax",
  ];
  const activityOptions = [
    "Beach",
    "Mountains",
    "Cities",
    "Wildlife",
    "Food",
    "History",
    "Adventure",
  ];

  const updateBudget = (value: number, index: number) => {
    const newBudget = [...filters.budget];
    newBudget[index] = value;
    setFilters((prev) => ({ ...prev, budget: newBudget }));
  };

  const updateDuration = (value: number, index: number) => {
    const newDuration = [...filters.duration];
    newDuration[index] = value;
    setFilters((prev) => ({ ...prev, duration: newDuration }));
  };

  const toggleFilter = (
    category: "pace" | "themes" | "activities",
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      budget: [500, 3000],
      duration: [3, 14],
      pace: [],
      themes: [],
      activities: [],
    });
  };

  const activeFiltersCount =
    filters.pace.length + filters.themes.length + filters.activities.length;

  return (
    <div className="w-full lg:max-w-sm">
      {/* Mobile Toggle */}
      <div className="lg:hidden mb-4">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </div>
              <Sliders className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <FiltersContent
              filters={filters}
              updateBudget={updateBudget}
              updateDuration={updateDuration}
              toggleFilter={toggleFilter}
              clearAllFilters={clearAllFilters}
              paceOptions={paceOptions}
              themeOptions={themeOptions}
              activityOptions={activityOptions}
            />
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <FiltersContent
          filters={filters}
          updateBudget={updateBudget}
          updateDuration={updateDuration}
          toggleFilter={toggleFilter}
          clearAllFilters={clearAllFilters}
          paceOptions={paceOptions}
          themeOptions={themeOptions}
          activityOptions={activityOptions}
        />
      </div>
    </div>
  );
};

const FiltersContent = ({
  filters,
  updateBudget,
  updateDuration,
  toggleFilter,
  clearAllFilters,
  paceOptions,
  themeOptions,
  activityOptions,
}: any) => {
  return (
    <Card className="mt-4 lg:mt-0">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <Sliders className="h-5 w-5" />
            Filters
          </div>
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Budget Range */}
        <div>
          <Label className="flex items-center gap-2 text-sm font-semibold mb-3">
            <DollarSign className="h-4 w-4" />
            Budget (USD)
          </Label>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Min: ${filters.budget[0]}</span>
                <span>Max: ${filters.budget[1]}</span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={filters.budget[0]}
                onChange={(e) => updateBudget(parseInt(e.target.value), 0)}
                className="filter-slider w-full mb-2"
                style={
                  {
                    "--value": `${
                      ((filters.budget[0] - 500) / (5000 - 500)) * 100
                    }%`,
                  } as any
                }
              />
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={filters.budget[1]}
                onChange={(e) => updateBudget(parseInt(e.target.value), 1)}
                className="filter-slider w-full"
                style={
                  {
                    "--value": `${
                      ((filters.budget[1] - 500) / (5000 - 500)) * 100
                    }%`,
                  } as any
                }
              />
            </div>
          </div>
        </div>

        {/* Duration Range */}
        <div>
          <Label className="flex items-center gap-2 text-sm font-semibold mb-3">
            <Calendar className="h-4 w-4" />
            Duration (Days)
          </Label>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Min: {filters.duration[0]} days</span>
              <span>Max: {filters.duration[1]} days</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={filters.duration[0]}
              onChange={(e) => updateDuration(parseInt(e.target.value), 0)}
              className="filter-slider w-full mb-2"
              style={
                {
                  "--value": `${((filters.duration[0] - 1) / (30 - 1)) * 100}%`,
                } as any
              }
            />
            <input
              type="range"
              min="1"
              max="30"
              value={filters.duration[1]}
              onChange={(e) => updateDuration(parseInt(e.target.value), 1)}
              className="filter-slider w-full"
              style={
                {
                  "--value": `${((filters.duration[1] - 1) / (30 - 1)) * 100}%`,
                } as any
              }
            />
          </div>
        </div>

        {/* Travel Pace */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">
            Travel Pace
          </Label>
          <div className="space-y-2">
            {paceOptions.map((pace) => (
              <div key={pace} className="flex items-center space-x-2">
                <Checkbox
                  id={pace}
                  checked={filters.pace.includes(pace)}
                  onCheckedChange={() => toggleFilter("pace", pace)}
                />
                <Label htmlFor={pace} className="text-sm cursor-pointer">
                  {pace}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Themes */}
        <div>
          <Label className="text-sm font-semibold mb-3 block">
            Travel Themes
          </Label>
          <div className="grid grid-cols-2 gap-2">
            {themeOptions.map((theme) => (
              <Badge
                key={theme}
                variant={filters.themes.includes(theme) ? "default" : "outline"}
                className="cursor-pointer justify-center py-2 text-xs"
                onClick={() => toggleFilter("themes", theme)}
              >
                {theme}
              </Badge>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div>
          <Label className="flex items-center gap-2 text-sm font-semibold mb-3">
            <MapPin className="h-4 w-4" />
            Activities
          </Label>
          <div className="grid grid-cols-2 gap-2">
            {activityOptions.map((activity) => (
              <Badge
                key={activity}
                variant={
                  filters.activities.includes(activity) ? "default" : "outline"
                }
                className="cursor-pointer justify-center py-2 text-xs"
                onClick={() => toggleFilter("activities", activity)}
              >
                {activity}
              </Badge>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <Button className="w-full bg-primary hover:bg-primary-hover">
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default FiltersPanel;
