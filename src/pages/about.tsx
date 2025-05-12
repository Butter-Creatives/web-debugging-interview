import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { getAboutData } from "../utils/getAboutData";

const About = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getAboutData().then(setData).catch(console.error);
  }, []);
  return (
    <div>
      <Header />
      <h1>About Us</h1>
      {data ? <div>{data.message}</div> : <div>Loading Data...</div>}
    </div>
  );
};

export default About;
