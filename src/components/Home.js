import React from 'react'
//import { Route, Routes } from 'react-router-dom';

import Sketch from 'react-p5';

export const Home = () => {
  const dotsNum = 300;
  const radius = 300;
  const distance = 100;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1020, 720);
    p5.strokeWeight(0.25);
    p5.stroke(255, 255, 255);
  }
  const draw = p5 => {
    p5.background(26, 26, 26);
    p5.translate(p5.width / 2, p5.height / 2);

  let dots = [];
  for (let i = 0; i < dotsNum; i++) {  
    const noiseIndex = (p5.frameCount*0.01 + i) / 100;
    const a = p5.noise(noiseIndex, 0) * 3;
    const b = p5.noise(noiseIndex, 1) * 3;
    const theta = p5.map(i, 0, dotsNum, 0, p5.TWO_PI);    
    const t = p5.frameCount/240;
    const x = p5.cos(a * theta + t) * radius * 1.5;
    const y = p5.sin(b * theta + t) * radius;
    dots.push({ x, y });
  }
// Connect the dots
  for (let i = dots.length; i--; ) {
    const current = dots[i];
    for (let j = i; j--; ) {
      const other = dots[j];
      if ((current.x - other.x) ** 2 + (current.y - other.y) ** 2 < distance ** 2)
        p5.line(current.x, current.y, other.x, other.y);
    }
  }
  }


    // <Sketch setup={setup} draw={draw} />


  return (
    <>
      <div>
        <h1>Hello</h1>
        <p>This is the Homepage</p>
      </div>
      <div>
        <Sketch setup={setup} draw={draw} />
      </div>
    </>

  )
}
