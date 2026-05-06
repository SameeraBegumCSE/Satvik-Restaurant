import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.jsx";
import { Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Textarea } from "../../components/ui/textarea.jsx";
import { Badge } from "../../components/ui/badge.jsx";
import { Plus, X, ChefHat, Clock, Users, Sparkles, Heart } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";

export default function CustomRecipe() {
  const { color } = useTheme();
  const [mealName, setMealName] = useState("");
  const [newItem, setNewItem] = useState("");
  const [mealInstructions, setMealInstructions] = useState("");
  const [items, setItems] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const itemInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mealName.trim() || items.length === 0) return;

    setIsPending(true);

    setTimeout(() => {
      setIsPending(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);
      setMealName("");
      setMealInstructions("");
      setItems([]);
    }, 1000);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const item = newItem.trim();
    if (item && !items.includes(item)) {
      setItems((prev) => [...prev, item]);
    }
    setNewItem("");
    itemInput.current?.focus();
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-28">
      {/* pt-28 = safe spacing below fixed navbar */}

      <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-10"
            style={{ backgroundColor: `${color}10` }}
          >
            <ChefHat className="w-12 h-12" style={{ color }} />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Craft Your
            <span
              className="block bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${color}, ${color}80)`,
              }}
            >
              Perfect Meal
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Design your ideal satvik experience with fresh ingredients and
            personalized touches
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <Sparkles className="w-4 h-4" style={{ color }} />
                  </div>
                  Recipe Creator
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Meal Name */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 font-medium">
                      <Heart className="w-4 h-4" style={{ color }} />
                      Meal Name
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g., Harmony Garden Thali"
                      value={mealName}
                      onChange={(e) => setMealName(e.target.value)}
                      className="h-12 border-0 bg-background/50"
                      required
                    />
                  </div>

                  {/* Add Ingredients */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 font-medium">
                      <Plus className="w-4 h-4" style={{ color }} />
                      Add Ingredients
                    </label>
                    <div className="flex gap-3">
                      <Input
                        type="text"
                        placeholder="e.g., Paneer Butter Masala"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        ref={itemInput}
                        className="flex-1 h-12 border-0 bg-background/50"
                      />
                      <Button
                        type="button"
                        onClick={handleAddItem}
                        size="icon"
                        className="h-12 w-12 rounded-xl"
                        style={{ backgroundColor: color }}
                      >
                        <Plus className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 font-medium">
                      <ChefHat className="w-4 h-4" style={{ color }} />
                      Special Instructions
                    </label>
                    <Textarea
                      value={mealInstructions}
                      onChange={(e) => setMealInstructions(e.target.value)}
                      className="min-h-[120px] border-0 bg-background/50 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full h-14 rounded-xl font-semibold"
                    disabled={
                      isPending || !mealName.trim() || items.length === 0
                    }
                    style={{
                      backgroundColor: color,
                      opacity:
                        isPending || !mealName.trim() || items.length === 0
                          ? 0.7
                          : 1,
                    }}
                  >
                    {isPending
                      ? "Creating Magic..."
                      : isSubmitted
                        ? "Added Successfully!"
                        : "Add to Cart - ₹199"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Ingredients */}
            <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-3">
                    <Users className="w-4 h-4" style={{ color }} />
                    Ingredients
                  </span>
                  <Badge style={{ backgroundColor: `${color}10`, color }}>
                    {items.length}
                  </Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                {items.length === 0 ? (
                  <p className="text-center text-muted-foreground py-12">
                    No ingredients yet
                  </p>
                ) : (
                  items.map((item) => (
                    <div
                      key={item}
                      className="flex justify-between items-center p-3 rounded-xl bg-background/50"
                    >
                      <span>{item}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            {/* Meal Info */}
            <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-4 h-4" style={{ color }} />
                  Meal Details
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Prep Time</span>
                  <Badge variant="outline">15–20 mins</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Serves</span>
                  <Badge variant="outline">2–3 people</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Price</span>
                  <Badge style={{ backgroundColor: color, color: "white" }}>
                    ₹199
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
