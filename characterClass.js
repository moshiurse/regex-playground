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
