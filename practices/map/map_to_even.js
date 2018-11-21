'use strict';
function map_to_even(collection){
  for(let index=0; index<collection.length; index++){
    collection[index] = times2(collection[index])
  }
  return collection;
}

function times2(element){
  return element *2
}
module.exports = map_to_even;
