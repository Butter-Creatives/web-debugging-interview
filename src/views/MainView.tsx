import { useState } from "react";
import { Counter } from "../components/Counter";
import { Data } from "../components/Data";

export const MainView = ({ data }: { data: any }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Debugging Interview Page</h1>
      <Counter count={count} />
      <Data data={data} />
    </div>
  );
};
