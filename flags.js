// Global Flag
// Retain the index of the last match, 
//allowing subsequent searches to start from the end of the previous match.
{
  let regex = /./g; // matches every character except new line
  let str = "You";
  console.log(str.match(regex))  //Output: ['Y', 'o', 'u']
}
// Without Global Flag
{
  let regex = /./; // matches every character except new line
  let str = "You";
  console.log(str.match(regex))  //Output: [ 'Y', index: 0, input: 'You', groups: undefined ]
}

{
  let regex = /[yo]/gi; // makes the expression case in sensitive
  let str = "YOu";
  console.log(str.match(regex))  //Output: ['Y', 'O']
}
