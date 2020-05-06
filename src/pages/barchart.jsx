import React from "react";
import Chart from "../components/chart"
import Header from "../components/header";
import "./styles/barchart.css";

const BarChart = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const yvals = [5,6,2,7,9,1,3,4,8,3,6,7]

    return (
        <div className="barchart">
            <Header />
            <div className="chartwrapper">
                <Chart 
                    xdim={750}
                    ydim={500}
                    margin={{
                        top: 80,
                        bottom: 80,
                        left: 120,
                        right: 120
                    }}
                    xdata={months}
                    ydata={yvals}
                />
            </div>
        </div>
    );
}

export default BarChart;