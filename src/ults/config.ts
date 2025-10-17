import { carConfig, type CarConfig } from "../config/config";
import type { State } from "../types";

export const getCarConfig = (userState: State): CarConfig => {
    const isSporty = userState.car.carType === "Sporty";
    return Object.fromEntries(
        Object.entries(carConfig)
            .filter(([_, car]) => car.isSporty === isSporty)
    ) as CarConfig;
};