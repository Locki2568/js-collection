'use strict';
function map_to_even(collection){
  for(let index=0; index<collection.length; index++){
    collection[index] = collection[index]*2;
  }
  return collection;
}

module.exports = map_to_even;
