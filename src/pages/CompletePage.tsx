import { useStateContext } from "../context/StateContext";

export const CompletePage = () => {
    const { state } = useStateContext();
  return (
    <div>
      <h1>Configuration Complete</h1>
      <p>Your car configuration has been saved!</p>
      <ul>
        <li>Make: {state.car.make}</li>
        <li>Model: {state.car.model}</li>
        <li>Colour: {state.car.colour}</li>
      </ul>
    </div>
  );
};
