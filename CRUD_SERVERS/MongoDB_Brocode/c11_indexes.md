VIDEO 11 :
https://www.youtube.com/watch?v=N_BrirrY1Mk&list=PLZPZq0r_RZONbmOn3EsHac5u5_-Rue3ne&index=11

# INDEXES :
https://www.mongodb.com/docs/manual/indexes/
https://www.mongodb.com/docs/manual/core/2d/

```sh
use school
school>
```
* Indexes support the efficient execution of queries in MongoDB.
Without indexes, MongoDB must perform a collection scan
(scan every document in a collection), 
to select those documents that match the query statement. 

* If an appropriate index exists for a query, 
      MongoDB can use the index to limit the number of documents it must inspect.

```sh
    # EXPLAIN :  see docsExamined in the querry 
    school> db.students.find({name:"Larry"}).explain("executionStats")
    OUTPUT 
        {
        explainVersion: '1',
        queryPlanner: {
            namespace: 'test.students',
            indexFilterSet: false,
            parsedQuery: { name: { '$eq': 'Larry' } },
            maxIndexedOrSolutionsReached: false,
            maxIndexedAndSolutionsReached: false,
            maxScansToExplodeReached: false,
            winningPlan: { stage: 'EOF' },
            rejectedPlans: []
        },
        executionStats: {
            executionSuccess: true,
            nReturned: 0,
            executionTimeMillis: 2,
            totalKeysExamined: 0,
            totalDocsExamined: 0,
            executionStages: {
            stage: 'EOF',
            nReturned: 0,
            executionTimeMillisEstimate: 0,
            works: 1,
            advanced: 0,
            needTime: 0,
            needYield: 0,
            saveState: 0,
            restoreState: 0,
            isEOF: 1
            }
        },
        command: { find: 'students', filter: { name: 'Larry' }, '$db': 'test' },
        serverInfo: {
            host: 'ariel-All-Series',
            port: 27017,
            version: '6.0.8',
            gitVersion: '3d84c0dd4e5d99be0d69003652313e7eaf4cdd74'
        },
        serverParameters: {
            internalQueryFacetBufferSizeBytes: 104857600,
            internalQueryFacetMaxOutputDocSizeBytes: 104857600,
            internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
            internalDocumentSourceGroupMaxMemoryBytes: 104857600,
            internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
            internalQueryProhibitBlockingMergeOnMongoS: 0,
            internalQueryMaxAddToSetBytes: 104857600,
            internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600
        },
        ok: 1
        }
```

```sh
    # GET -> see
    # By default ibject id is indexed but we can add more
    school> db.students.getIndexes()  
    OUTPUT    [ { v: 2, key: { _id: 1 }, name: '_id_' } ]
    
    # CREATE -> add index
    # add index to name in alfabetical order ( -1 : inverse order)
    school> db.students.createIndex({name: 1})
    OUTPUT  name_1
    
    # GET -> see
    # now we have object_id & name indexed
    school>  db.students.getIndexes()
    OUTPUT  [
                { v: 2, key: { _id: 1 }, name: '_id_' },
                { v: 2, key: { name: 1 }, name: 'name_1' }
            ]
    .
    # DROP index -> delete
    school> db.students.dropIndex("name_1")
    OUTPUT  { nIndexesWas: 2, ok: 1 } 

    #  GET -> see   
    school>   db.students.getIndexes()
    [ { v: 2, key: { _id: 1 }, name: '_id_' } ] ```