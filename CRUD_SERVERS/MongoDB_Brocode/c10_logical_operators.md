VIDEO 10 :
https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=10

# SHELL
```sh
test>  use school
# &&   AND             fullTime:true  &&  age: <= 22
db.students.find({$and: [{fullTime:true}, {age:{$lte:22}}]})
# ||   OR              fullTime:true  ||  age: <= 22
db.students.find({$or: [{fullTime:true}, {age:{$lte:22}}]})
# !||  NOR           ! fullTime:true  ||  age: <= 22
db.students.find({$nor: [{fullTime:true}, {age:{$lte:22}}]})
# !    NOT            ! age: >= 30
db.students.find({age:{$not:{$gte:30}}})
```