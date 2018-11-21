'use strict';

function choose_multiples_of_three(collection) {
  //implement here
  return filter(collection, isMultipleOfThree)
}

function filter(collection, fn){
  var result = []
  for(var i=0; i<collection.length; i++){
    if (fn(collection[i])){
      result.push(collection[i])
    }
  }
  return result
}

function isMultipleOfThree(element){
  if (element % 3 === 0)
  {
    return true;
  }else{
    return false;
  }
}

module.exports = choose_multiples_of_three;
