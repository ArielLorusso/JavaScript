VIDEO 5 :
https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=5

# SEE DOCUMENTS 
```sh
test>  use school
db.students.find()                  //Returns all documments
```

# SORT BY FIELD
```sh
db.students.find().sort({name: 1}) # field: 1 = alphabetical  -1 reverse (CASE SENSITIVE)
db.students.find().sort({gpa: 1})  #  field: 1 = smaller to bigger
```
# LIMIT
```sh
db.students.find().limit(1)                     // returns first documment 
db.students.find().sort({name: -1}).limit(3)    // returns 
```

# COMPASS
```sh
SELECT DATABASE -> SELECT COLLECTION ->  DOCUMENTS
Filter      Type a query: { field: 'value' }        Reset   Find    More Options
```

#   MORE OPTIONS -> CLICK
```sh
Project     { field: 0 }
Sort        {name:1}                MaxTimeMS  60000
Collation   { locale: 'simple' }    Skip    0   Limit   0
```




