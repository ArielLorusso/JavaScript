VIDEO 9 : 
https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=9

# SHELL
```sh
test>  use school
```
lets show every object wich name is not 'spongebob' 
```sh
# !=    NOT EQUAL   'spongebob'
db.students.find({name:{$ne:"spongebob"}})
# <    LESS THAN
db.students.find({age:{$lt:20}})
# <=   LESS OR EQUAL
db.students.find({age:{$lte:27}})
# >    GREATHER THAN
db.students.find({age:{$gt:27}})
# >=   GREATER OR EQUAL
db.students.find({age:{$gte:27}})

#  3 < GPA < 4  RANGE
db.students.find({gpa:{$gte:3, $lte:4}})

# OBJECTS IN THE ARAY 
db.students.find({name:{$in: ["spongebob", "Patric", "Sandy"]}}) 
# NOT IN THE ARRAY
db.students.find({name:{$nin: ["spongebob", "Patric", "Sandy"]}})
```
# COMPASS

SELECT DATABASE -> SELECT COLLECTION ->  DOCUMENTS
Filter      Type a query: { field: 'value' }    Reset   Find   More Options
            {gpa:{$gte:3, $lte:4}}                      Find