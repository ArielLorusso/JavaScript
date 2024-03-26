VIDEO 8 :
https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=8

|timestamp| command explained |
|--|--|
|00:00| export collection (compass)
|00:43| MongoDB shell delete
|00:53| .deleteOne()
|01:32| .deleteMany()
|01:59| $exists
|02:56| import collection


# COMPASS 
### EXPORT DB
        SELECT DATABASE -> SELECT COLLECTION ->  DOCUMENTS 
        -> EXPORT COLLECTION 
            -> Export query with filters  (Recommended) <-   Export Full Collection
            Select Fields  : all fields selected
            Select output  :   ->`JSON`<-    CSV     -> output -> export

### DELETE
        SELECT DATABASE -> SELECT COLLECTION ->  DOCUMENTS   
        -> Trash(icon)


# SHELL

### DELETE ONE  
```sh
test>  use school
# larry
db.students.deleteOne({name:"Larry"})
```    
### DELETE MANY 
```sh
# EVERYONE
db.students.deleteMany({})
# everyione who's  fullTime is false
db.students.deleteMany({fullTime:false})
# everyone  who has not  registerDate 
db.students.deleteMany({registerDate:{$exists:false}})
```