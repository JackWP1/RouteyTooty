import type { Colours, Makes } from "../types";

export const makes: Makes[] = ['Audi', 'BMW'];

export const colourOptions: Record<Makes, Colours[]> = {
  Audi: ['Red', 'Black', 'White'],
  BMW: ['Blue', 'Black', 'White'],
};