{
  let regex = /abc/; // match extact characters in a string 
  let str = "abccca"
  console.log(str.match(regex)); // output: "abc"
}

{
  let regex = /./; // matches first character except new line
  let str = "You are Fool";
  console.log(str.match(regex))  
  //Output : ['Y']
}

{
  let regex = /[ABC]/g; // matches any character in the string set.
  let str = "The side bar includes a Cheatsheet,";
  console.log(str.match(regex))  //Output: ['C']
}

{
  let regex = /[^ABC]/g; // Match any character that is not in the string set.
  let str = "The side bar";
  console.log(str.match(regex))  
  //Output: ['T', 'h', 'e', ' ', 's', 'i', 'd',
  // 'e', ' ', 'b', 'a', 'r']
}

{
  let regex = /[a-g]/gi; // Matches a character having a character code between the two specified characters inclusive.
  let str = "The side bar";
  console.log(str.match(regex))  //Output: [ 'e', 'd', 'e', 'b', 'a' ]
}

{
  let regex = /[\s\S]/gi; 
  // can be used to match any character, including line breaks, without the dotall flag between the two specified characters inclusive.
  let str = "The side";
  console.log(str.match(regex)) 
  //Output: ['T', 'h', 'e', ' ', 's', 'i', 'd', 'e']
}
