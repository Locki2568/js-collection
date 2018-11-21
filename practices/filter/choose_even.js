'use strict';

function choose_even(collection) {
  //implement here
  // var result = []
  // for(var i=0; i<collection.length; i++){
  //   if (collection[i]%2 === 0){
  //     result.push(collection[i])
  //   }
  // }
  // return result

  var result = []
  for(var i=0; i<collection.length; i++){
    if (isEven(collection[i])){
      result.push(collection[i])
    }
  } 
  console.log("debug "+result)
  return result

}

function isEven(element){
  return element % 2 === 0;
}

module.exports = choose_even;
