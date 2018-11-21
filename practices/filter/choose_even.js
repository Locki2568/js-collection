'use strict';

function choose_even(collection) {
  //implement here
  
  return filter(collection, isEven)

}

function filter(collection, fn){
  for(var i=0; i<collection.length; i++){
    if (!fn(collection[i])){
      collection.splice(i,1)
    }
  }
  return collection
}

function isEven(element){
  return (element % 2) === 0;
}

module.exports = choose_even;
