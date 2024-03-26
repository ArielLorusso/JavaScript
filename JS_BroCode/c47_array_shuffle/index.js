let cards = ["A", "2", "3", "4", "5",
 "6", "7", "8", "9", "10", "J", "Q", "K"];

 shuffle(cards);
 console.log(cards);
 
 sample = takeRandom(cards,25);
 console.log(sample);
 
//console.log(cards[0]);  show first element
//cards.forEach(card => console.log(card));  show every card

//  interchanges every element randomly
function shuffle(array){
  let currentIndex = array.length;  
  
  while(currentIndex != 0){         // TRAVERSE whole array
    // SELECT random  index  (0,..., length-1)
    let randomIndex = Math.floor(Math.random() * array.length); 
    currentIndex--;
    // SWAP
    let temp = array[currentIndex];  // save current elem
    array[currentIndex] = array[randomIndex]; // current pos random element
    array[randomIndex] = temp; //
  }
  
  return array;
}

//  takes length elements from sample randomly
function takeRandom(sampleArray,length){
 
  let array =[]; //empty

  while(length != 0){         // TRAVERSE whole array
    // select random  index  (0,..., length-1)
    let randomIndex = Math.floor(Math.random() * sampleArray.length); 
    length--;
    // APPEND
    array.push(sampleArray[randomIndex]);
  }
  
  return array;
}
