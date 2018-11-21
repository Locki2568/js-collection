'use strict';

// function filter(collection, fn){
//   for(let index=0; index < collection.length; index){
    
//   }
// }

function grouping_count(collection) {
  //implement here
  var result = {};
  for(let i =0; i< collection.length; i++){
    if (result[collection[i]] == null){
      result[collection[i]] = 1;
      console.log("debug: "+result[collection[i]])
    }else{
      result[collection[i]] = result[collection[i]]+ 1;
    }
  }
  return result
}

// function countNum(collection, element){
//   var count = 0;
//   for(let i=0; i<collection.length; i++){
//     if(collection[i] === element){
//       count +=1;
//     }
//   }
//   return count;
// }

module.exports = grouping_count;
