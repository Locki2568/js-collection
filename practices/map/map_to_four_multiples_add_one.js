'use strict';
function map_to_four_multiples_add_one (collection, fn){
  return map(collection, mul4add1)
  //return [5,9,13,17,21];
}

function map(collection, fn){
  for(let index =0; index<collection.length; index++){
    collection[index] = fn(collection[index])
  }
  return collection
}

function mul4add1(element){
  return element * 4 + 1
}

module.exports = map_to_four_multiples_add_one;
