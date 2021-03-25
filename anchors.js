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
