// Here we discuss about escaped character

// Reserved Words are : +*?^$\.[]{}()|/
{
  let regex = /\+/g; // The following character have special meaning, and should be preceded by a \ (backslash) 
                      //   to represent a literal character:+*?^$\.[]{}()|/
                      //   Within a character set, only \, -, and ] need to be escaped.
  let str = "1+1"
  console.log(str.match(regex)); // output: "+"
}

// Octal eascape character
{
  let regex = /\251/g; // Octal escaped character in the form \000. Value must be less than 255 (\377).
  let str = "©2021"
  console.log(str.match(regex)); // output: "©"
}
