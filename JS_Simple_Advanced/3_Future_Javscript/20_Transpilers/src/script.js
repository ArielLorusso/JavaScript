const person = {
    name:"kyle",
    address:{
      street: "1234"
    }
}
console.log(person?.addres?.street)
const clone = {... person}   