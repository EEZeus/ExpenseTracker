import './ChartBar.css';

import React from 'react'

function ChartBar(props) {
  let fillHeight = '0%';
  if (props.maxVal > 0)
    fillHeight = Math.round((props.value / props.maxVal) * 100) + '%';
  console.log(fillHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillHeight }}></div>
      </div>
      <div className="chart-bar__lable">{props.label}</div>
    </div>
  );
}
export default ChartBar;