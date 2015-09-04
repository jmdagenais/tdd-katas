function roman2decimal(roman){
  roman = roman.toUpperCase();
  var dec = 0;
  for(var i = 0; i < roman.length; i++){
    var current = roman[i];
    var next = roman[i+1];
    var idxCurrent = symbolInOrder.indexOf(current);
    var idxNext = symbolInOrder.indexOf(next);
    if(idxCurrent < idxNext){
      dec += romanValue[current + next];
      i++;
    } else {
      dec += romanValue[current];
    }
  }

  return dec;
}

var symbolInOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

var romanValue = {
  I:1,
  V:5,
  X:10,
  L:50,
  C:100,
  D:500,
  M:1000,
  IV:4,
  IX:9,
  XL:40,
  XC:90,
  CD:400,
  CM:900
};