import type { CarTypes, Colours, Makes, Models } from "./config/config";

export interface Car {
	carType?: CarTypes | undefined;
	make?: Makes | undefined;
	model?: Models | undefined;
	colour?: Colours | undefined;
}

export interface Auth {
	isLoggedIn: boolean;
	userId: string | undefined;
}

export interface State {
	userAuth: Auth;
	car: Car;
}
