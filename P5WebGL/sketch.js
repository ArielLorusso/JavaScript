// https://www.youtube.com/watch?v=3mfvZ-mdtZQ 


let exampleShader;
function preload() {
  // load the shader definitions from files
  exampleShader = loadShader('example.vert', 'example.frag');
}


function setup() {
  createCanvas(600, 600, WEBGL);
  shader(exampleShader);
  noStroke();
  exampleShader.setUniform("resolution", [width, height]); // Add this line to pass resolution as a uniform
}

function draw() {
  //let time = millis() / 1000.0;
  //exampleShader.setUniform("time", time);
  clear();
  // rect(0, 0, width, height);
  ellipse(0, 0, width, height, 8);

}