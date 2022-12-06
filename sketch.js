
const canvasSketch = require('canvas-sketch');
const p5 = require('p5');

new p5()

let nb = 100;
let rot  = 1;
let dim = 360;
let f = 2;
let fmin = 0.01
let rotationIntensity = -0.015;



const settings = {
  pixelsPerInch: 300,
   // Tell canvas-sketch we're using p5.js
   p5: true,
   // Turn on a render loop (it's off by default in canvas-sketch)

   duration: 3,

    animate: true,
    // We can specify dimensions if we want a fixed size on the first render
    dimensions:[512, 512],
    // orientation: 'landscape',
    bleed: 1 / 8,
  
};



canvasSketch(() => {
  rectMode(CENTER);
  angleMode(DEGREES);
  rotationIntensity = random(-0.1, 0.1);
  // Return a renderer, which is like p5.js 'draw' loop





 return ({ width, height }) => {



clear();
  translate(width/2, height/2);
  stroke(0);
  strokeWeight(.5);
  noFill()
  for (let i = 0; i < nb; i++) {
f = map(i,0,nb-1,1,fmin);
   square(0, 0, f * dim);
   
    rotate(rot * frameCount * rotationIntensity);
  }


  }
},  settings);
