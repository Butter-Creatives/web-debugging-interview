import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { getData } from "../utils/getData";
import { MainView } from "../views/MainView";

const Home = () => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getData().then(setData).catch(console.error);
  }, []);

  return (
    <div>
      <Header />
      <MainView
        data={data}
        count={count}
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(count - 1)}
      />
    </div>
  );
};

export default Home;
