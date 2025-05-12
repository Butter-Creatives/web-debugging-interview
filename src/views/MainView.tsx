import { Counter, CounterProps } from "../components/Counter";
import { Data, DataProps } from "../components/Data";

export type MainViewProps = DataProps & CounterProps;

export const MainView = ({
  data,
  count,
  onDecrement,
  onIncrement,
}: MainViewProps) => {
  return (
    <div>
      <h1>Home</h1>
      <Data data={data} />
      <br />
      {data && (
        <Counter
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      )}
    </div>
  );
};
