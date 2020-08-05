import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Sandbox = () => {
  const canvas = useRef(null);
  console.log(canvas);

  const showSvg = () => {
    const width = 600;
    const height = 400;

    const svg = d3
      .select(canvas.current)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", `${width}`)
      .attr("height", `${height}`)
      .style("background-color", "#fca311");
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
  width: 800px;
  padding: 0 100px;
  box-sizing: border-box;
`;

export default Sandbox;
