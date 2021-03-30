// Lookaround lets you match a group before (lookbehind) or after (lookahead) your main pattern without including it in the result.
// Negative lookarounds specify a group that can NOT match before or after the pattern.

{
  let regex = /\d(?=px)/g; // Matches a group after the main expression without including it in the result.
  let str = "1pt 2px 3em 4px";
  console.log(str.match(regex)); // output: ["2". "4"]
}


{
  let regex = /\d(?!px)/g; // Specifies a group that can not match after the main expression (if it matches, the result is discarded).
  let str = "1pt 2px 3em 4px";
  console.log(str.match(regex)); // output: ["1". "3"]
}

{
  let regex = /(?<=px)\d/g; // Matches a group before the main expression without including it in the result.
  let str = "1pt px2 3em 4px";
  console.log(str.match(regex)); // output: ["2"]
}

{
  let regex = /\d(?<!px)/g; // Specifies a group that can not match before the main expression (if it matches, the result is discarded).
  let str = "pt1 2px em3 4px";
  console.log(str.match(regex)); // output: ["1". "3"]
}
