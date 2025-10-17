export const makes = {Ferrari: "Ferrari", Maserati: "Maserati", Ford: "Ford", Volkswagen: "Volkswagen"} as const;

export type CarTypes = "Sporty" | "Practical";

export type Makes = keyof typeof makes;

export type Models = "488 GTB" | "F8 Tributo" | "Roma" | "Ghibli" | "Levante" | "Quattroporte" | "Fiesta" | "Focus" | "Mustang" | "Golf" | "Passat" | "Tiguan";

export type Colours = "Red" | "Blue" | "Black" | "White" | "Silver" | "Green" | "Yellow" | "Dark Blue" | "Purple";

export type CarConfig = Record<Makes, { models: Models[], colours: Colours[], isSporty: boolean }>;

export const carConfig: CarConfig = {
  Ferrari: {
    colours: ['Red', 'Yellow'],
    models: ['488 GTB', 'F8 Tributo', 'Roma'],
    isSporty: true,
  },  
  Maserati: {
    colours: ['Blue', 'Black', 'Green', 'Purple'],
    models: ['Ghibli', 'Levante', 'Quattroporte'],
    isSporty: true,
  },
  Ford: {
    colours: ['Black', 'White', 'Silver', 'Dark Blue'],
    models: ['Fiesta', 'Focus', 'Mustang'],
    isSporty: false,
  },
  Volkswagen: {
    colours: ['Blue', 'Black', 'White', 'Silver', 'Green'],
    models: ['Golf', 'Passat', 'Tiguan'],
    isSporty: false,
  },
};

