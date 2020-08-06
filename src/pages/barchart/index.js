import React from "react";
import Header from "../../components/header";
import Chart from "../../components/chart";

const BarChart = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const yVals = [5, 6, 2, 7, 9, 1, 3, 4, 8, 3, 6, 7];

  return (
    <div className="barchart">
      <Header />
      <Chart
        xdim={720}
        ydim={480}
        margin={{
          top: 60,
          bottom: 60,
          left: 90,
          right: 90,
        }}
        xData={months}
        yData={yVals}
      />
    </div>
  );
};

export default BarChart;
