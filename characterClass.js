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
\
{
  let regex = /[\w]/g; //Matches any word character (alphanumeric & underscore). Only matches low-ascii characters (no accented or non-roman characters)
  let str = "The side";
  console.log(str.match(regex))  //Output: ['T', 'h', 'e','s', 'i', 'd','e']
} 

{
  let regex = /[\W]/g; // Matches any character that is not a word character (alphanumeric & underscore). Equivalent to [^A-Za-z0-9_]
  let str = "The )side";
  console.log(str.match(regex))  //Output: [ ' ', ')' ]
} 

{
  let regex = /[\d]/g; // Matches any digit character (0-9). Equivalent to [0-9].
  let str = "+88-(018)-666-888";
  console.log(str.match(regex))  //Output: ['8', '8', '0', '1','8', '8', '8', '8','8', '8', '8']
} 

{
  let regex = /[\D]/g; //Matches any digit character (0-9). Equivalent to [0-9].
  let str = "+88-(018)-666-888";
  console.log(str.match(regex))  //Output: [ '+', '-', '(', ')', '-', '-' ]
} 

{
  let regex = /[\s]/g; // Matches any whitespace character (spaces, tabs, line breaks).
  let str = "The side bar";
  console.log(str.match(regex))  //Output: [ ' ', ' ' ]
} 

{
  let regex = /[\S]/g; // Matches any character that is not a whitespace character (spaces, tabs, line breaks).
  let str = "The side";
  console.log(str.match(regex))  //Output: ['T', 'h', 'e','s', 'i', 'd','e']
} 

const sentence = 'A ticket to 大阪 costs ¥2000 👌.';

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation));

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin));
// expected output: Array [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence.match(regexpCurrencyOrPunctuation));
// expected output: Array ["¥", "."]
