import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { getData } from "../utils/getData";
import { MainView } from "../views/MainView";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then(setData).catch(console.error);
  }, []);

  return (
    <div>
      <Header />
      <MainView data={data} />
    </div>
  );
};

export default Home;
