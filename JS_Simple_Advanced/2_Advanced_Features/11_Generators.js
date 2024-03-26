// SIMPLE GENERATOR
function* simpleGenerator() {
  process.stdout.write("Pre  1 ")
  yield 1 
  process.stdout.write("Pre  2 ")
  yield 2 
  process.stdout.write("Pre  3 ")
  yield 3
  process.stdout.write("Pre  4 ")
}
const gene = simpleGenerator()

function* fibonacciGenerator(){
  let a = 0
  let b = 1
  yield 0
  yield 1
  while(true){
    const result = a + b ;
    yield result
    a = b
    b = result
  }
}
const fibo = fibonacciGenerator()
for (let i = 0 ; i < 30 ; i++) {
  process.stdout.write(fibo.next().value+" ")
  if(i==29)  console.log()
} 

function* idGenerator(){
  let a = 0
  while(true){
    yield  ++a
  }
}
const id = idGenerator()
for (let i = 0 ; i < 30 ; i++) {
  process.stdout.write(id.next().value+' ')
  if(i==29)  console.log()
} 

console.log(gene.next()) // Pre  1  value: 1, done: false
console.log(gene.next()) // Pre  2  value: 2, done: false
console.log(gene.next()) // Pre  3  value: 3, done: false
console.log(gene.next()) // Pre  4  value: undefined, done: true
console.log(gene.next()) //         value: undefined, done: true