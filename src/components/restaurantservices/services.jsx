import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Dine-In Experience",
    description:
      "Enjoy a peaceful sattvic dining experience with freshly prepared vegetarian meals in a serene atmosphere.",
    link: "#",
  },
  {
    title: "Home Delivery",
    description:
      "Pure and healthy sattvic meals delivered right to your doorstep, maintaining freshness and hygiene.",
    link: "#",
  },
  {
    title: "Catering Services",
    description:
      "Specialized catering for weddings, corporate events, and spiritual gatherings with authentic sattvic cuisine.",
    link: "#",
  },
  {
    title: "Meal Subscription Plans",
    description:
      "Weekly and monthly sattvic meal plans for health-conscious individuals and families.",
    link: "#",
  },
  {
    title: "Corporate Lunch Boxes",
    description:
      "Wholesome sattvic lunch boxes prepared for offices and organizations to promote healthy eating at work.",
    link: "#",
  },
  {
    title: "Customized Diet Meals",
    description:
      "Personalized sattvic diet meals crafted according to Ayurvedic principles and individual health needs.",
    link: "#",
  },
];

