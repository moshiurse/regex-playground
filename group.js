// Groups 

{
  let regex = /(ha)+/g; // Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
  let str = "hahahahaa haa ha"
  console.log(str.match(regex));
}

{
  let regex = /(\w)a\1/g; // Matches the results of a capture group. For example \1 matches the results of the first capture group & \3 matches the third.
  let str = "hah dad bad dab gag gab"
  console.log(str.match(regex)); //output : ["hah", "dad", "gag"]
}

{
  let regex = /(\w)a\1/g; // Groups multiple tokens together without creating a capture group.
  let str = "hahaha haa hah!"
  console.log(str.match(regex)); //output : ["hahaha", "ha", "ha"]
}
