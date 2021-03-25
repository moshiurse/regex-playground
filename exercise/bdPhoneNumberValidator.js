let regex = /(\+88)?\s?01\d{3}(-)?\d{6}\b/g; // match extact characters in a string 
let str = "+88 01988-005789"
console.log(str.match(regex)); // output: "+88 01988-005789"

// Input Variation 
// +8801988005789
// 01988005789
// +88 01988005789
// +88 01988-005789
