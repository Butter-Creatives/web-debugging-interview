import { useState } from "react";
import { Counter } from "../components/Counter";
import { Data } from "../components/Data";

export const MainView = ({ data }: { data: any }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Home</h1>
      <Data data={data} />
      <br />
      {data && (
        <Counter
          count={count}
          onIncrement={() => setCount(count + 1)}
          onDecrement={() => setCount(count - 1)}
        />
      )}
    </div>
  );
};
