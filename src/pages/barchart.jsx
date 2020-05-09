import React from "react";
import Header from "../components/header";

const BarChart = () => {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const yvals = [5,6,2,7,9,1,3,4,8,3,6,7]

    return (
        <div className="barchart">
            <Header />
        </div>
    );
}

export default BarChart;