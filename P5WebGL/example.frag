precision mediump float;
varying vec2 pos; //aTexCoord; from vertex shader

void main (){
  //make it white   1,1,1,1
  gl_FragColor = vec4(pos.x,pos.y, 1./(pos.x*3.), 1.0);
  
}

// precision mediump float;
// varying vec2 pos;
//
// void main() {
//   // Custom colours using mix
//   vec4 c1 = vec4(0.5, 0.1, 0.9, 1.);
//   vec4 c2 = vec4(0.1, 0.8, 0.7, 1.);
//   vec4 c = mix(c1, c2, pos.x);
//   gl_FragColor = c;
// }