function decimalToRoman(n) {
  var output = '';
  var value = n;
  while(value > 0){
    for(var k in romanValues){
      if(value >= romanValues[k]){
        output += k;
        value -= romanValues[k];
        break;
      }
    }
  }

  return output;
}

var romanValues = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};