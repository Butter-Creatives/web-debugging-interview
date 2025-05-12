export const Counter = ({ count }: { count: number }) => {
  const now = performance.now();
  while (performance.now() - now < 30) {} // Intentional blocking

  return <div>Render Count: {count}</div>;
};
