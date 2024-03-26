VIDEO 2 :
https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=2 

https://www.mongodb.com/docs/manual/crud/

# MONGOSH

### SEE
```sh
test> show dbs       #  will let us see all current databases

admin   40.00 KiB
config  72.00 KiB
local   40.00 KiB
```

### SELECT

```sh
# we are currently working on `test` database
test> use admin     # `use` will let us change selected database
switched to db admin # now any following action is performed to `admin` 

admin> use school   #  we can change to an unexistant database to create it
switched to db school
```

```sh
school> show dbs    #  the new database is not yet created 
admin   40.00 KiB
config  72.00 KiB
local   40.00 KiB
```
    
### CREATE

```sh
school> bd.create   //  Lets create it 
school> show dbs    //  Not visible cause its empty
admin   40.00 KiB
config  60.00 KiB
local   40.00 KiB
```                        
### ADD COLLECTION          

`Lets add a colection to it`

    school> db.createCollection ("students")
    { ok: 1 }
    school> show dbs
    admin   40.00 KiB
    config  60.00 KiB
    local   40.00 KiB
    school   8.00 KiB   
    
### DELETE
*   Lets empty it with drop (not deleted)


```SH
school> db.createCollection ("students")
{ ok: 1 }

school> show dbs    // Show result
admin   40.00 KiB
config  60.00 KiB
local   40.00 KiB
school   8.00 KiB

school> db.createCollection ("students")
{ ok: 1 }
```

# COMPASS
>   NEW CONECTION -> connect to port 27017

    SIDE BAR: We can see our 4 databases
    TOP BAR : Querries Databases Performance


### CREATE Database
    Database Name : school
    Collection Name :students
    Time series : Y/N
    Aditional Preferences : ...
        
### DELETE Database
    Delete Database -> sidebar trashbin icon -> database name :
