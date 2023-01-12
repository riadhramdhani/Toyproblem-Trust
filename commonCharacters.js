/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function (string1, string2) {
  // TODO: Your code here!
  var result = "";
  for (var i = 0; i < string1.length; i++) {
    var c = string1[i];
    if (string2.includes(c) && c !== " " && !result.includes(c)) {
      result = result + c;
    }
  }
  return result;
};


 //var commonCharacters = function(string1, string2) {
  //var result=""
  //for(i=0;i<string1.length;i++){
   // for(j=0;j<string2.length;j++){
     // if(string1[i]===string2[j] && result.indexOf(string1[i])===-1 ){
       // result= result+string1[i]
      //}
    //}
  //}
  // return result
   //}
  //  var commonCharacters = function(...string) {

  //   var result=""

  //   for(i=0;i<string.length;i++){
  //     if(result.indexOf(string[i]!=-1)){
  //       result=result+string[i]
  //     }

  //   }

  //  }

   

var commonCharactersMoreThanTwoInputs = function () {
  // TODO: Your code here!
  var result = "";
  for (var i = 0; i < arguments[0].length; i++) {
    var c = arguments[0][i];
    var found = true;
    for (var j = 1; j < arguments.length; j++) {
      if (!arguments[j].includes(c)) {
        found = false;
      }
    }
    if (found && c !== " " && !result.includes(c)) {
      result = result + c;
    }
  }
  return result;
};
