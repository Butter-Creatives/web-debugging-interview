import { useRef } from "react";

export interface Data {
  title: string;
  timestamp: Date;
}

export interface DataProps {
  data: Data | null;
}

const formatData = (data: Data) => {
  return `${data.title} at ${data.timestamp}`;
};

export const Data = ({ data }: DataProps) => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  if (!data) {
    return <div>Loading data...</div>;
  }
  return (
    <div>
      <div>Renders: {renderCount.current}</div>
      <div>{formatData(data)}</div>
      <button onClick={() => {}}>Refetch Data</button>
    </div>
  );
};
