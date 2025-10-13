// src/types.ts

export type Makes = 'Audi' | 'BMW';
export type Colours = 'Red' | 'Blue' | 'Black' | 'White';

export interface Car {
  make?: Makes;
  colour?: Colours;
}

export interface State {
  userIsLoggedIn: boolean;
  car: Car;
}
