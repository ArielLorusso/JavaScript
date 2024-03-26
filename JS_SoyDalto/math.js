let numeros = [4,2,77,84,3,1]
let res;

res =  Math.min(...numeros);	//	1
res =  Math.max(...numeros);	//	84
res =  Math.random();			//	0.0001 ~ 0.9999

res =  Math.random() * 100;		//	0.0001 ~ 99.999
// document.write(res+"<br>");		//  70.84473429247096
res =  Math.round(res);			//	0 	   ~ 100
// document.write(res+"<br>");		//  70

/*
for (let i = 0; i< 1000; i++)       // P(cubrir numeros) = 1-((99/100)^100) = 0.99995
{
	res =  Math.random()*98 +1;		//	1.0001 ~ 98.999
	//res =  Math.floor(res);			//	1 	   ~ 99
	document.write(res+"<br>");			//	70
} */

let num = 70.03034560084473;
document.write(num +"<br>");			//	70.03034560084473
num = Math.fround(num)					// redondeado a valor Double 64-bit
document.write(num +"<br>");			//	70.03034210205078


num = res.toString();
if (num[1] != ',')	{res = num[0] + num[1];	}
else				{res = num[0] ;			}
// document.write(res);			//	70

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
pi = Math.PI 			//	3.141592653 589793
e  = Math.E 			//	2.718281828459045
sq1_2 = Math.SQRT1_2	//	0.7071067811865476
sq2 = Math.SQRT2		//	1.4142135623730951
ln2 = Math.LN2			//	0.6931471805599453
ln10 = Math.LN10		//	2.302585092994046
log2e = Math.LOG2E		//  1.4426950408889634
log10e = Math.LOG10E	//	0.4342944819032518
document.write( log2e+"<br>");			


//https://lenguajejs.com/javascript/number/bigint/
Properties
    Math.E
    Math.LN10
    Math.LN2
    Math.LOG10E
    Math.LOG2E
    Math.PI
    Math.SQRT1_2
    Math.SQRT2

Methods
    Math.abs()
    Math.acos()
    Math.acosh()
    Math.asin()
    Math.asinh()
    Math.atan()
    Math.atan2()
    Math.atanh()
	
    Math.cbrt()
    Math.ceil()
    Math.clz32()
    Math.cos()
    Math.cosh()
  
	Math.exp()
    Math.expm1()

    Math.floor()
    Math.fround()
    Math.hypot()
    Math.imul()

    Math.log()
    Math.log10()
    Math.log1p()
    Math.log2()

    Math.max()
    Math.min()
    Math.pow()
    Math.random()
    Math.round()
    Math.sign()
    Math.sin()
    Math.sinh()
    Math.sqrt()
    Math.tan()
    Math.tanh()
    Math.trunc()



Math.abs()
Math.ceil()

Math.acos()
Math.acosh()
Math.asin()
Math.asinh()
Math.atan()
Math.atan2()
Math.atanh()
Math.hypot()
Math.imul()

Math.log()
Math.log10()
Math.log1p()
Math.log2()

Math.sin()
Math.sinh()
Math.sqrt()
Math.tan()
Math.tanh()