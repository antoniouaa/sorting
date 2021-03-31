import React from "react";
import Sketch from "react-p5";

import { fisherYatesShuffle } from "./FisherYates";

const partition = (arr, start, end) => {
  const pivot = arr[end];
  let index = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  [arr[index], arr[end]] = [arr[end], arr[index]];
  return index;
};

const quicksort = (arr, stack) => {
  const end = stack.pop();
  const start = stack.pop();
  const index = partition(arr, start, end);

  if (index - 1 > start) {
    stack.push(start);
    stack.push(index - 1);
  }
  if (index + 1 < end) {
    stack.push(index + 1);
    stack.push(end);
  }
};

const resetStack = (array) => {
  let stack = [];
  stack.push(0);
  stack.push(array.length - 1);
  return stack;
};

export default function QuickSort() {
  let array = [...Array(100).keys()];
  const canvasSide = 600;
  let stack = resetStack(array);

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(22);
    p5.createCanvas(canvasSide, canvasSide).parent(canvasParentRef);
    fisherYatesShuffle(array);
  };

  const draw = (p5) => {
    p5.translate(0, canvasSide);
    quicksort(array, stack);
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
    stack = resetStack(array);
  };

  return (
    <div className="sketch">
      <h3>Quick Sort</h3>
      <Sketch setup={setup} draw={draw} />
      <button onClick={(e) => resetSketch(e)}>Reset</button>
    </div>
  );
}
