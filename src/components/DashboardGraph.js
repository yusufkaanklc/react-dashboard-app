import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import DashboardGraphCSS from "./DashboardGraph.module.css";

const { CanvasJSChart } = CanvasJSReact;

class DashboardGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartHeight: this.calculateChartHeight(),
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  calculateChartHeight() {
    const windowWidth = window.innerWidth;
    return windowWidth <= 1280 ? (windowWidth <= 1024 ? 100 : 150) : 250;
  }

  handleResize = () => {
    this.setState({
      chartHeight: this.calculateChartHeight(),
    });
  };

  render() {
    const options = {
      animationEnabled: true,
      axisX: {
        valueFormatString: "MMM",
        tickThickness: 0,
        lineThickness: 0,
        gridColor: "transparent",
      },
      axisY: {
        tickThickness: 0,
        lineThickness: 0,
        labelFormatter: function () {
          return "";
        },
        gridColor: "rgba(0, 0, 0, 0.1)",
      },
      height: this.state.chartHeight,
      data: [
        {
          xValueFormatString: "MMMM",
          type: "spline",
          color: "rgba(0, 0, 0, 0.6)",
          dataPoints: [
            { x: new Date(2023, 1), y: 1 },
            { x: new Date(2023, 2), y: 20 },
            { x: new Date(2023, 3), y: 10 },
            { x: new Date(2023, 4), y: 30 },
            { x: new Date(2023, 5), y: 20 },
            { x: new Date(2023, 6), y: 40 },
            { x: new Date(2023, 7), y: 25 },
            { x: new Date(2023, 8), y: 30 },
            { x: new Date(2023, 9), y: 10 },
          ],
        },
      ],
    };

    return (
      <div className={DashboardGraphCSS["graph-box"]}>
        <div className={DashboardGraphCSS["graph-header"]}>My activity</div>
        <CanvasJSChart options={options} />
        <div className={DashboardGraphCSS["graph-footer"]}>
          <div className={DashboardGraphCSS["percentage"]}>30%</div>
          <div className={DashboardGraphCSS["title"]}>
            Your productivity is 30% higher compared to last month
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardGraph;
