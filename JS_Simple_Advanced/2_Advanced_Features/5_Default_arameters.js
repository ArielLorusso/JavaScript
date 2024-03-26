
function greet (name, surname, salute="Hi",nickname=name+surname ) { // salute = salute || "Hi"
    console.log(salute, name,surname )               // default arguments should be at the end
    console.log("your nickname:"+nickname )
}
greet("Harby","Dent","hello","two-face")
greet("Harby", '',"hello")
greet("Harby",'',undefined) // no value -> dedault
greet("Harby",'',null)      // value = null