{
  let regex = /^\w+/g; // Matches the beginning of the string, or the beginning of a line if the multiline flag (m) is enabled. This matches a position, not a character.
  let str = "she sells seashells"
  console.log(str.match(regex)); // output: "she"
}

{
  let regex = /\w+$/g; // Matches the end of the string, or the end of a line if the multiline flag (m) is enabled. This matches a position, not a character.
  let str = "she sells seashells"
  console.log(str.match(regex)); // output: "she"
}

{
  let regex = /(\bs|s\b)/g; // Matches a word boundary position between a word character and non-word character or position (start / end of string).
                           //   See the word character class (w) for more info.
  let str = "she sells seashells"
  console.log(str.match(regex)); // it matches all s in  befinning or end of a string
  // \bs is beginning
  // s\b is end
  // | using as OR Operator
}

{
  let regex = /sh\B/g; // Matches any position that is not a word boundary. This matches a position, not a character.
  let str = "she sells seashells"
  console.log(str.match(regex)); // it matches all sh in where is not boundery
}
