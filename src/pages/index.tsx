import { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import { MainView } from "../views/MainView";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then(setData).catch(console.error);
  }, []);

  return (
    <MainView
      data={data}
      onRefetch={() => {
        getData().then(setData).catch(console.error);
      }}
    />
  );
};

export default Home;
