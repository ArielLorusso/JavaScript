VIDEO 3 : https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=3 

# MONGOSH

### INSERT DOCUMENT 

    insert data to   studentsCOL (collection) of ShchoolDB (database) 

Shell imput :

```sh
test>  use school
school> db.students.insertOne({name:"Bob",age:20 , gpa:3.2})
OUTPUT:
{   acknowledged: true,
    insertedId: ObjectId("64cfebc8ecec6202d9061984")
}
```
Shell output :
```sh
Document consist in  field(key)/Value pairs 
field: name value= "Bob"   DataType= string
field: age  value= 20      DataType= integer
field: gpa  value= 3.2     DataType= double
``` 

# SEE COLECTION DOCUMENTS
```sh
school> db.students.find()
[
    {
        _id: ObjectId("64cfebc8ecec6202d9061984"),
        name: 'spongebob',
        age: 20,
        gpa: 3.2
    }
]
```     
#    INSERT MANY DOCUMENTS
```sh
school> db.students.insertMany([
    {name:"Patric",age:38,gpa:1.5},
    {name:"Sandy" ,age:27,gpa:4.0},
    {name:"Gary"  ,age:18,gpa:2.5}])
    {
    acknowledged: true,
    insertedIds: 
        {
            '0': ObjectId("64cfed9fecec6202d9061985"),
            '1': ObjectId("64cfed9fecec6202d9061986"),
            '2': ObjectId("64cfed9fecec6202d9061987")
        }
    }
```


#   COMPASS


>   SIDEBAR  -> DATABASE (school) -> COLLECTION(students)
    DOCUMENT -> ADD DATA -> INSERT DOCUMENT
```
delete default
[{name:"Patrick", age:38, gpa: 1.5},  
 {name:"Sandy"  , age:27, gpa: 4.0},
 {name:"Gary"   , age:18, gpa: 2.5}]
```            
#   PRE FORMAT
```
[
    { "name": "Patrick", "age": 38, "gpa": 1.5 },
    { "name": "Sandy"  , "age": 27, "gpa": 4.0 },
    { "name": "Gary"   , "age": 18, "gpa": 2.5 }
]
```