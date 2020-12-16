import React from "react";
import Sketch from "react-p5";

const fisherYatesShuffle = (arr) => {
  let currentIndex = arr.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
};

export default function BubbleSort() {
  let array = [...Array(100).keys()];

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(22);
    p5.createCanvas(600, 800).parent(canvasParentRef);
    fisherYatesShuffle(array);
  };

  const draw = (p5) => {
    bubbleSort(array);
    p5.background(0);
    p5.fill(255);
    array.forEach((r, i) => {
      const h = p5.map(r, 0, 100, 0, 800);
      const w = 600 / array.length;
      p5.rect(w * i, 0, w, h);
    });
  };

  const resetSketch = (e) => {
    fisherYatesShuffle(array);
  };

  return (
    <div>
      <span>Algo</span>
      <Sketch setup={setup} draw={draw} />
      <button onClick={(e) => resetSketch(e)}>Reset</button>
    </div>
  );
}
