VIDEO 6 :
https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=6

# FIND DOCUMENT
```sh
test>  use school
db.students.find({name: "spongebob"})
db.students.find({gpa: 4.0 })
db.students.find({fullTime: false })
```


# SHOW JUST THE FIELD
```sh
db.students.find( {} , { name: true})                   # show name of everyone
db.students.find( {} , {_id: false, name: true})              
db.students.find( {} , {_id: false, name: true, gpa: true})   # show name , gpa
```

# FIND & SHOW JUST FIELD
```sh
db.students.find( {name:"Spongebob"} , {_id: false, name: true, gpa: true})
```