'use strict';

function choose_even(collection) {
  //implement here
  var result = []
  for(var i=0; i<collection.length; i++){
    if (collection[i]%2 === 0){
      result.push(collection[i])
    }
  }
  return result
}

module.exports = choose_even;
