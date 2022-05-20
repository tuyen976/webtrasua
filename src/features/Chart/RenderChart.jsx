import React from "react";
import "./Chart.css";
import Chart from "react-apexcharts";
function RenderChart(props) {
  var count = localStorage.getItem("count");
  const array = JSON.parse(localStorage.getItem("array"));
  let data = [];
  for (let index = 1; index <= 6; index++) {
    const count = array.filter((each) => each === index).length;
    data.push(count);
  }
  console.log(data);
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Trà sữa Gongcha",
          "Sữa tươi đường đen",
          "Trà sữa Archives",
          "Strawbery Earl Grey Latte",
          "Trà sữa Pudding",
          "Trà sữa Matcha",
        ],
      },
    },
    series: [
      {
        name: "Số Lượng Đặt Hàng: ",
        data: data,
      },
    ],
  };

  return (
    <div className="ChartPage">
      <h3>Thống kê doanh số bán hàng</h3>
      <div className="Chart-Container">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="900"
        />
      </div>
      <div
        className="chart-count"
        style={{
          textAlign: "center",
          fontWeight: 800,
          color: "blue",
        }}
      >
        <label htmlFor="">Tổng số lượng bán:</label>
        <p>{count} sản phẩm</p>
      </div>
    </div>
  );
}

export default RenderChart;
