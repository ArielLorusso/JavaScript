VIDEO 12 :
https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=12


db.createCollection("teachers", {capped : true , size : 1000 * 1024, max : 100}, {autoIndexId:false})

// capped = Enables a capped collection. Oldest entries are overwritten when the collection reaches its max size.
// size = specifies the maximum size in bytes (x * y bytes)
// max = maximum number of documents allowed
// autoIndexId = Creates an index on _id field


MongoDB Herarchty
    DATABASE -> COLLECTION -> DOCUMENT