import React, { useState, useEffect } from "react";

// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

const App = () => {
  // state = {
  //   data: {},
  //   country: ""
  // };
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  // async componentDidMount() {
  //   const fetchedData = await fetchData();
  //   this.setState({ data: fetchedData });
  // }
  useEffect(() => {
    const fetchedAPI = async () => {
      setData(await fetchData());
    };

    fetchedAPI();
  }, [setData]);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
    //this.setState({ data: fetchedData, country: country });
  };
  //render() {
  //const { data, country } = this.state;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};
//}

export default App;
