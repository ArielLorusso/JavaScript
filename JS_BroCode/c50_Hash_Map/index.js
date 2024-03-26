// Map = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
  ]);
  
  shoppingCart = 0;
  shoppingCart += store.get("t-shirt"); // shopingCart = 20
  console.log(shoppingCart);            // get returns value
  
  store.set("hat", 40);         // we add   item to our map instace
  store.delete("t-shirt");      // we delet item
  console.log(store.has("underwear"));    // true
  console.log(store.size);                // 4
  
  store.forEach((value, key) => console.log(`${key} $${value}`));

/*   MAP METHODS  https://devdocs.io/javascript/global_objects/map

Map.map()             // The Map() constructor creates Map objects.
Map.forEach(func,opt) //executes function once per each key/value pair in the Map
map.set(key,value)  // ADDS or updates value of key 
map.get(key)        // returns VALUE from key
map.delete(key)     // DELETES value from key
map.has(key)        // returns BOOL true if key exist
map.entries()       // returns a new map iterator object that contains the [key, value] 
map.keys()          // eturns a new map iterator object that contains the keys for each element
map.values()        // 
map.clear()         // removes all elements from a Map
map.size            // accessor property of Map instances returns the number of elements 
*/