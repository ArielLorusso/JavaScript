VIDEO 7 :
https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=7

# UPDATE FIELD
    test>  use school
    // change field fullTime: true   for   name:"Spongebob"
    db.students.updateOne({name:"Spongebob"}, {$set:{fullTime:true}})
            // field didnt exist so it was created

    // lets see spongebob ObjectId
    db.students.find( {name:"spongebob"})
    
    // Lets use id to set  fullTime: false   (MORE SECURE   UNIQUE OBJ)
    db.students.updateOne({_id: ObjectId("64cfebc8ecec6202d9061984")}, {$set:{fullTime:false}})
    
# DELETE   ( UPDATE  $unset { field: ""} )
    db.students.updateOne({_id: ObjectId("64cfebc8ecec6202d9061984")}, {$unset:{fullTime:""}})
    
# UPDATE EVERYONE   fullTime:false
    db.students.updateMany({}, {$set:{fullTime:false}})

    // UNSET   ( DELETE )
    db.students.updateOne({name:"Gary"}, {$unset:{fullTime:""}})
    db.students.updateOne({name:"Sandy"}, {$unset:{fullTime:""}})
    
    // check for element with non-existent field "fulltime"
    db.students.find({fullTime:{$exists:false}},{} )
    //  select Objects wuth  non-existent field "fulltime"   and create   fullTime:true 
    db.students.updateMany({fullTime:{$exists:false}}, {$set:{fullTime:true}})


COMPASS 
    SELECT DATABASE -> SELECT COLLECTION ->  DOCUMENTS
     -> ObjectId   -> Pen(icon)    ->  edit 
                   -> trash(icon)  ->  remove