import React, { useState, useEffect } from "react";
//import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";
import { Form, Select } from "antd";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);
  return (
    // <FormControl className={styles.formControl}>
    //   <NativeSelect
    //     defaultValue=""
    //     onChange={(e) => handleCountryChange(e.target.value)}
    //   >
    //     <option value="">Global</option>
    //     {fetchedCountries.map((country, i) => (
    //       <option key={i} value={country}>
    //         {country}
    //       </option>
    //     ))}
    //   </NativeSelect>
    // </FormControl>
    //
    <Form.Item className={styles.formControl}>
      <Select defaultValue="Global" onChange={(e) => handleCountryChange(e)}>
        <Select.Option value="">Global</Select.Option>
        {fetchedCountries.map((country, i) => (
          <Select.Option key={i} value={country}>
            {country}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default CountryPicker;
