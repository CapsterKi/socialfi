export type Element = {
  id: "fire" | "water" | "earth" | "air";
  name: string;
  role: string;
  blurb: string;
  accent: string;
  light: string;
  stats: { farm: number; food: number; stamina: number; luck: number };
};

export const ELEMENTS: Element[] = [
  {
    id: "fire",
    name: "Fire",
    role: "The grinder",
    blurb: "Top farm rate, but it eats fast. Rewards players who show up every day and reinvest.",
    accent: "#FF5A36",
    light: "#FFB199",
    stats: { farm: 5, food: 5, stamina: 2, luck: 2 },
  },
  {
    id: "water",
    name: "Water",
    role: "The saver",
    blurb: "Food and buffs last longer. The easy pick for relaxed, casual play.",
    accent: "#2D9CFF",
    light: "#A5D4FF",
    stats: { farm: 3, food: 1, stamina: 3, luck: 2 },
  },
  {
    id: "earth",
    name: "Earth",
    role: "The holder",
    blurb: "A huge stamina reserve. Survives long gaps without food and without harsh penalties.",
    accent: "#8BD14B",
    light: "#D2F0A8",
    stats: { farm: 3, food: 3, stamina: 5, luck: 2 },
  },
  {
    id: "air",
    name: "Air",
    role: "The hunter",
    blurb: "Lower base farm, but a built-in bonus to rare drops from loot cases.",
    accent: "#B58CFF",
    light: "#DCCBFF",
    stats: { farm: 2, food: 3, stamina: 3, luck: 5 },
  },
];
