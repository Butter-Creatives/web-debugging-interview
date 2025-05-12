export const Counter = ({
  count,
  onIncrement,
  onDecrement,
}: {
  count: number;
  onIncrement: () => any;
  onDecrement: () => any;
}) => {
  return (
    <div>
      My Counter: {count}
      <br />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};
