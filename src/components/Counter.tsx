export interface CounterProps {
  count: number;
  onIncrement: () => any;
  onDecrement: () => any;
}

export const Counter = ({ count, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div>
      My Counter: {count}
      <br />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};
