export interface Data {
  title: string;
  timestamp: Date;
}

export interface DataProps {
  data: Data | null;
  onRefetch?: () => any;
}

const formatData = (data: Data) => {
  return `${data.title} at ${data.timestamp}`;
};

export const Data = ({ data, onRefetch }: DataProps) => {
  if (!data) {
    return <div>Loading data...</div>;
  }
  return (
    <div>
      <div>{formatData(data)}</div>
      <button onClick={onRefetch}>Refetch Data</button>
    </div>
  );
};
