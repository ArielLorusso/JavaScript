function Log(a) { console.log(a);} // shorten to Log()
function Tab(a) { console.table(a);} // shorten to Log()
//:::::::::::::::::::::::::::::::// OBJECT ::::::::::::::::::::::
{
    const currency_map = {          
        "United States" : "U$D",
        india :"rupee"
    }
    let my_money = currency_map["india"] // countey -> currency
    Log(my_money) // rupee
        // every unique key must be string 
        //  -> values can be anything    
}
//:::::::::::::::::::::::::::::::// ARRAY of OBJ ::::::::::::::::
{
    const currency_map = [         
        {name: "United States", currency: "UD$"  },
        {name: 'india'        , currency:"rupee" }
    ]
    let my_money = currency_map.find( (c) => c.name == 'india').currency
    Log(my_money) // rupee
        // Supports a one-to-many mapping, 
        // can have multiple objects with the same name property, 
        //
        // More flexibility for handling complex data 
        // retrieve values may be less efficient
}
//██████████████████████████   MAP     █████████████████████████
{
    const map = new Map ([
        [1,"A"],
        [2,"B"], // not stored
        [2,"C"], // not stored
        [2,"D"],  
        [3,"D"],  ])

            Log(map) //  Map(2) { 1: "A", 2: "D" } 
            map.forEach((key, value) => {
                Log(key,value)  // A 1    D 2
            })
            // Similar to OBJ but key can be anything
            // are easy to retreve and measure length
            Log(map.size)       // 2
            Log(map.has(1))     // true
            Log(map.get(2))     // D
            Log(map.clear())    // undefined 
            Log(map.set(3,"A")) // Map(1) { 3: "A", }
            Log(map.delete(3))  // true 
}
//:::::::::::::::::::::::::::: OBJ      ::::::::::::::::::::::::
{
    const obj = {
        a:1,
        b:2, // not stored
        b:3, // not stored
        b:4,
    }
            Log(obj) //  { a: 1, b: 4 } 
            Object.entries(obj).forEach(([key,value]) => { // destructuring
                Log(key,value)  // a 1    b 4 
            })
            Log(obj.size)       // undefined
            // are hard to retreve and     cant measure length
}
//:::::::::::::::::::::::::::::::// User Details   ::::::::::::::
{
    const user = {      // Map
        name: "kyle",
    }
    const details = new Map ([
        [ user, { age: 23 }] 
    ]);     
    Log(details);     // Map(1) {  { name:"kyle" } : { age:23 }, }
    Log(details.get(user)); //  { age: 23 }
}
//:::::::::::::::::::::::::::::::// EXCERCISE   :::::::::::::::::
// PROBLEM : Make a easy version of following code using MAP 
    const items = [  //  Array(Obj)
        {   id: 1,
            name:'test',
            description: 'desc'    },
        {   id: 2,
            name:'test 2',
            description: 'desc 2'  },
        {   id: 3,
            name:'test 3',
            description: 'desc 3'},
    ]
    function getItem(id){
        return items.find(item => item.id === id )
    }
    Log(getItem(2)) //  { id: 2,  name: "test 2",  description: "desc 2" }

// ANSWER  Maps 
    // WRONG
    const item_map_bad = [
        new Map ([ 
            ["id", 1],
            ["name",'test'],
            ["description", 'desc'],    ]) ,
        new Map ([ 
            ["id", 2],
            ["name",'test 2'],
            ["description", 'desc 2'],   ]) ,
        new Map ([ 
            ["id", 3],
            ["name",'test 3'],
            ["description", 'desc 3'],   ]) ,
    ]
    // WRIGTH
    const item_map = new Map ([  // Map(Obj)
        [1 ,{   id: 1,
                name:'test',
                description: 'desc' 
            } ],
        [2 ,{   id: 2,
                name:'test 2',
                description: 'desc 2'
            } ],
        [3 ,{   id: 3,
                name:'test 3',
                description: 'desc 3'
            } ],
    ])
    function getItem_map(id){
        return item_map.get(id);
    }
    Log(getItem_map(2)) 
