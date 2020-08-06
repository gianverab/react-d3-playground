/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Chart = ({ xdim, ydim, margin, xData, yData }) => {
  const canvas = useRef(null);

  const addAxes = (svg) => {
    const xScale = d3
      .scaleBand()
      .domain(xData)
      .range([margin.left, xdim - margin.left]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(yData)])
      .range([ydim - margin.bottom, margin.top]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${ydim - margin.top})`)
      .selectAll("text")
      .attr("text-anchor", "start")
      .attr("transform", "rotate(45)")
      .attr("x", 10);
    svg
      .append("g")
      .call(yAxis)
      .attr("transform", `translate(${margin.left}, 0)`);
  };

  useEffect(() => {
    const svg = d3.select(canvas.current);
    addAxes(svg);
  }, [xdim, ydim, margin, xData, yData, addAxes]);

  return (
    <CanvasWrapper>
      <Canvas>
        <svg
          viewBox="0 0 720 480"
          preserveAspectRatio="xMinYMin"
          width="100%"
          height="100%"
          style={{ backgroundColor: "#ffcad4" }}
          ref={canvas}
        ></svg>
      </Canvas>
    </CanvasWrapper>
  );
};

const CanvasWrapper = styled.div`
  display: grid;
  grid-template-rows: calc(100vh - 52px);
`;

const Canvas = styled.div`
  margin: 0 auto;
  width: 540px;
  height: auto;
  align-self: center;

  @media screen and (min-width: 769px) {
    width: 720px;
  }
`;

export default Chart;
