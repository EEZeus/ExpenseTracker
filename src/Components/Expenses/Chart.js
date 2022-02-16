import "./Chart.css";

import ChartBar from "./ChartBar";
import React from "react";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxAmount = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {
        props.dataPoints.map(dataPoints => (
          <ChartBar
            key={dataPoints.label}
            value={dataPoints.value}
            maxVal={maxAmount}
            label={dataPoints.label}
          />
        )
      )
    }
    </div>
  );
}
export default Chart;
