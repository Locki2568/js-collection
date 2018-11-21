'use strict';
var map_to_four_multiples_add_one = function(collection){
  for(let index =0; index<collection.length; index++){
    collection[index] = collection[index] * 4 + 1
  }
  return collection
  //return [5,9,13,17,21];
};

module.exports = map_to_four_multiples_add_one;
