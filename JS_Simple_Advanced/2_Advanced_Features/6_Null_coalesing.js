
function greet (name, surname='dias', salute="Hi") { // defaults use ??
    salute = salute ?? "Hi"                 // if salute == undef use "hi"  if 0 use 0
    salute = salute || "Hi"                 // if salute == undef || 0 || ''  use "hi"
    console.log(salute, name,surname )               
}

greet("kyle",0,0)                                      
                                        // sintactic  ERROR  only 2 same level operation allowed
console.log( undefined || false && (true ||false))   //undefined ?? false && true