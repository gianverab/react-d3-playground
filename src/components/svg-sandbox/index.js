import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Sandbox = () => {
  const canvas = useRef(null);
  console.log(canvas);

  const showSvg = () => {
    const width = 600;
    const height = 400;
    const margin = {
      top: 20,
      bottom: 20,
      left: 30,
      right: 30,
    };
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
    const xVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const yVals = [5, 6, 2, 7, 9, 1, 3, 4, 8, 3, 6, 7];

    const svg = d3
      .select(canvas.current)
      .append("svg")
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`
      )
      .attr("width", `${width}`)
      .attr("height", `${height}`)
      .attr("preserveAspectRatio", "xMinYMin")
      .style("background-color", "#ffcad4");

    const xScale = d3
      .scaleBand()
      .domain(xVals)
      .range([margin.left, width + margin.left]);
    const yScale = d3
      .scaleBand()
      .domain(yVals)
      .range([height + margin.bottom, margin.top]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${height + margin.top})`);
    svg
      .append("g")
      .call(yAxis)
      .attr("transform", `translate(${margin.left}, 0)`);
  };

  useEffect(() => {
    showSvg();
  }, []);

  return (
    <SandboxWrapper>
      <Canvas ref={canvas}></Canvas>
    </SandboxWrapper>
  );
};

const SandboxWrapper = styled.div`
  padding: 100px 0;
`;

const Canvas = styled.div`
  margin: 0 auto;
  width: 640px;
  padding: 0 20px;
  box-sizing: border-box;
`;

export default Sandbox;
