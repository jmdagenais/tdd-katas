TestCase("Fizz Buzz test", {

  "test should return the input value": function(){
    assertEquals(1, fizzBuzz(1));
    assertEquals(2, fizzBuzz(2));
  },

  "test should return 'Fizz'": function(){
    assertEquals('Fizz', fizzBuzz(3));
    assertEquals('Fizz', fizzBuzz(6));
  },

  "test should return 'Buzz'": function(){
    assertEquals('Buzz', fizzBuzz(5));
    assertEquals('Buzz', fizzBuzz(10));
  },

  "test should return 'FizzBuzz'": function(){
    assertEquals('FizzBuzz', fizzBuzz(3*5));
  },

  "test should return 'FizzBang'": function(){
    assertEquals('FizzBang', fizzBuzz(3*7));
  },

  "test should return 'BuzzBang'": function(){
    assertEquals('BuzzBang', fizzBuzz(5*7));
  },

  "test should return 'FizzBuzzBang'": function(){
    assertEquals('FizzBuzzBang', fizzBuzz(3*5*7));
  }

});