attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 pos;



void main() {
  pos = aTexCoord; // vector position asigned to texture position
  vec4 position = vec4(aPosition, 1.0); //
  // remap from 0..1   to  -1..1
  position.xy = position.xy *2.0 - 1.0;
  //move
  //position.y += 0.1;
  //slant
  //position.y += position.x/2.;

  //ANIMATE
  // position.y += sin(time/1000.0 + position.x * 8.0)/8.0;
  gl_Position = position;

  // ellipse(0,0,width,heigth,150);
 
}

/* 13:21
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uProjectionMatrix * uModelViewMatrix * position  */


