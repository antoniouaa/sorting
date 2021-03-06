import React from "react";
import Sketch from "react-p5";

import { fisherYatesShuffle } from "./FisherYates";

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
};

export default function BubbleSort() {
  let array = [...Array(100).keys()];
  const canvasSide = 600;

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(22);
    p5.createCanvas(canvasSide, canvasSide).parent(canvasParentRef);
    fisherYatesShuffle(array);
  };

  const draw = (p5) => {
    p5.translate(0, canvasSide);
    bubbleSort(array);
    p5.background(0);
    p5.fill(255);
    array.forEach((r, i) => {
      const h = p5.map(r, 0, 100, 0, canvasSide);
      const w = canvasSide / array.length;
      p5.rect(w * (i + 1), 0, -w, -h);
    });
  };

  const resetSketch = (e) => {
    fisherYatesShuffle(array);
  };

  return (
    <div className="sketch">
      <h3>Bubble Sort</h3>
      <Sketch setup={setup} draw={draw} />
      <button onClick={(e) => resetSketch(e)}>Reset</button>
    </div>
  );
}
