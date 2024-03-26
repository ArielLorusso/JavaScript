
// ********************** index.js **********************

//  MUST BE PROBIDED BY LIVE SERVER OR LOCAL SERVER EJ:NODE.JS

//import {PI, getCircumference, getArea} from "./math_util.js";
import * as MathUtil from "./math_util.js";

console.log(MathUtil.pi);

let circumference = MathUtil.circlePerimeter(10);
console.log(circumference);

let area = MathUtil.circleArea(10);
console.log(area);

