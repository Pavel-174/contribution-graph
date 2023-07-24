import React, { useEffect, useState } from "react";
import "./styles.scss";
import Calendar from "react-github-contribution-calendar";
import axios from "axios";

const baseURL= 'https://dpg.gg/test/calendar.json';

export default function App() {

  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setValues(response.data);
    });
  }, []);

  const panelAttributes = { rx: 6, ry: 6 };

  const until = new Date();

  return (
    <div className="App">
      <h1>Contribution Graph.</h1>
      <Calendar
        values={values}
        panelAttributes={panelAttributes}
        until={until}
      />
    </div>
  );
}

