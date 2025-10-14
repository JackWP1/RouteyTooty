export const makes = {Audi: "Audi", BMW: "BMW"} as const;

export type Makes = keyof typeof makes;

export type AllAudiModels = "A4" | "Q5" | "A6";
export type AllBMWModels = "X3" | "X5" | "3 Series";

export type Models = AllAudiModels | AllBMWModels;

export type Colours = "Red" | "Blue" | "Black" | "White" | "Silver" | "Green";

interface CarConfig {
  colours: Colours[];
  models: Models[];
}

export const carConfig: Record<Makes, CarConfig> = {
  Audi: {
    colours: ['Red', 'Black', 'White'],
    models: ['A4', 'Q5', 'A6'],
  },
  BMW: {
    colours: ['Blue', 'Black', 'White', 'Silver', 'Green'],
    models: ['X3', 'X5', '3 Series'],
  },
};

