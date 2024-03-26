VIDEO 4 :
https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=4
    
    https://www.mongodb.com/docs/manual/reference/bson-types/#std-label-objectid

# TABLE
|    Type   |     Number   |         Alias   |    Notes  |  
|---|---|---|---|
|   Double         | 1  |         "double"
|   String         | 2  |         "string"
|   Object         | 3  |         "object"    
|   Array          | 4  |         "array"
|   Binary data    | 5  |         "binData"
|   Undefined      | 6  |         "undefined"   | Deprecated.
|   ObjectId       | 7  |         "objectId"  
|   Boolean        | 8  |         "bool"          
|   Date           | 9  |         "date"  
|   Null           | 10 |         "null"
|   Regular Express| 11 |         "regex"
|   DBPointer      | 12 |         "dbPointer"    | Deprecated.
|   JavaScript     | 13 |         "javascript"    
|   Symbol         | 14 |         "symbol"       | Deprecated.
|   JS with scope  | 15 |     "javascriptWithScope"  | Deprecated in MongoDB 4.4.
|   32-bit integer | 16 |         "int"
|   Timestamp      | 17 |         "timestamp"
|   64-bit integer | 18 |         "long"
|   Decimal128     | 19 |         "decimal"
|   Min key        | -1 |         "minKey"

# SHELL
```sh
test>  use school

db.students.insertOne( {
    name: "Larry",
    age: 32,
    gpa: 2.8,
    fullTime: false,
    registerDate: new Date(), 
    graduationDate: null,
    courses:["Biology", "Chemistry", "Calculus"],
    address:{   street:"123 Fake St.", 
    .            city:"Bikini Bottom", 
                zip: 12345} 
})
```
  `courses`: String Array
  `address`: Nested Document  (document within document)

output :

```sh
{
    acknowledged: true,
    insertedId: ObjectId("64cffc00ecec6202d9061988")
}

```

#   COMPASS
We see :
 ```sh
    _id : ObjectId(64cffc00ecec6202d9061988)
    name : "Larry"
    age : 32
    gpa : 2.8
    fullTime : false
    registerDate : 2023-08-06T20:01:04.767+00:00
    graduationDate : null
    courses : Array
        0 : "Biology"
        1 : "Chemistry"
        2 : "Calculus"
    address : Object 
        street : "123 Fake St."
        city : "Bikini Bottom"
        zip : 12345
```