function fizzBuzz(n){
  var output = '';
  for(var k in fizzBuzzBangValue){
    if(n % k === 0){
      output += fizzBuzzBangValue[k];
    }
  }

  if(output.length === 0){
    output = n.toString();
  }

  return output;
}

var fizzBuzzBangValue = {
  3: 'Fizz',
  5: 'Buzz',
  7: 'Bang'
};