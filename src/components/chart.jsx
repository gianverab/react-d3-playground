import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import "./styles/chart.css";

const Chart = ({xdim, ydim, margin, xdata, ydata}) => {
    const canvas = useRef(null)

    useEffect(() => {
        let svg = d3.select(canvas.current)
        console.log(svg)
        addAxes(svg);
        addBars(svg);
        addText(svg);
    }, [xdim, ydim, margin, xdata, ydata])

    const addAxes = (svg) => {

        const xAxis = d3.axisBottom(xscale);

        svg.append("g")
            .call(xAxis)
            .attr("transform", `translate(0, ${ydim + margin.top})`)
            .selectAll("text")
            .attr("text-anchor", "start")
            .attr("transform", "rotate(45)")

        const yAxis = d3.axisLeft(yscale)
        
        svg.append("g")
            .call(yAxis)
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

    };

    const addBars = (svg) => {

        const linearScale = d3.scaleLinear()
            .domain([0, d3.max(ydata)])
            .range([0, ydim])
        
        const scaledVals = ydata.map(yval => {
            return linearScale(yval)
        })

        svg.selectAll("rect")
            .data(scaledVals)
            .enter()
            .append("rect")
            .attr("width", xscale.bandwidth())
            .attr("height", (d) => {
                return d
            })
            .attr("fill", "dodgerblue")
            .attr("stroke", "navy")
            .attr("x", (d, i) => {
                return xscale(xdata[i])
            })
            .attr("y", (d, i) => {
                return ydim - d + margin.top
            })
    }

    const addText = (svg) => {
        svg.append("text")
            .attr("x", 2/3*xdim)
            .attr("y", 70)
            .text("2019 Earthquakes in Dullsville")
            .attr("fill", "black")
            .style("font-family", "Rubik")
        
        svg.append("text")
            .attr("x", -(margin.top + ydim + margin.bottom)/2)
            .attr("y", margin.left/2)
            .text("Number of Quakes")
            .attr("transform", "rotate(-90)")
            

    }

    const xscale = d3.scaleBand()
        .domain(xdata)
        .range([margin.left, xdim + margin.left])
        .padding(.1)

    const yscale = d3.scaleLinear()
        .domain([0, d3.max(ydata)])
        .range([ydim, 0])

    return (
        <div className="canvas">
            <svg 
                viewBox={`0 0 990 660`} 
                preserveAspectRatio="xMinYMin"
                width="100%"
                height="100%"
                style={{backgroundColor: "white"}}
                ref={canvas}
            >
            </svg>
        </div>
    );
}

export default Chart;