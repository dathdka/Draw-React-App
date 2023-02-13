import styled from "@emotion/styled";
import { fabric } from "fabric";
import { useEffect, useState, useRef } from "react";

const Board: React.FC = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas(`canvas`, {
      backgroundColor: `yellow`,
      width: window.innerWidth,
      height: window.innerHeight
    });
    const circle = new fabric.Circle({
      width: 40,
      height: 40,
      fill: `red`,
    });
    canvas.add(circle);
  }, []);

  return (
    <>
      <canvas
        id="canvas"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
};

export default Board;
