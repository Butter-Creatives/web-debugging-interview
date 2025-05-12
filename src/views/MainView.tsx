import { useEffect, useState } from "react";
import { Counter } from "../components/Counter";
import { Data } from "../components/Data";

export const MainView = ({ data }: { data: any }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [data]);

  return (
    <div>
      <h1>Debugging Interview Page</h1>
      <Counter count={count} />
      <br />
      <Data data={data} />
    </div>
  );
};
