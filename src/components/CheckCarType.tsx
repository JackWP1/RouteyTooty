import { CarTypePage } from "../pages/CarTypePage";
import type { State } from "../types";
import { Outlet } from "react-router-dom";

type Props = {
  state: State;
};

export const CheckCarType = ({ state }: Props) => {
  if (!state?.car?.carType) {
    return <CarTypePage />;
  }
  return <Outlet />;
};