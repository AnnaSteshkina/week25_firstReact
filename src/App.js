import './App.css';
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Месяц", "Количество в мм"],
  ["Январь", 30.7],
  ["Февраль", 22.9],
  ["Март", 29.7],
  ["Апрель", 40],
  ["Май", 54.1],
  ["Июнь", 46.9],
  ["Июль", 59.1],
  ["Август", 35.3],
  ["Сентябрь", 49],
  ["Октябрь", 35.3],
  ["Ноябрь", 35.4],
  ["Декабрь", 30.8],
];

export const options = {
  title: "Количество осадков",
  pieHole: 0.4,
  is3D: true,
};

export function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        width="100%"
        height="600px"
        data={data}
        options={options}
          />
    </div>
  );
}

export default App;
