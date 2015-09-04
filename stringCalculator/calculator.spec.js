TestCase("String calculator test", {

  "test should return 0": function(){
    assertEquals(0, stringCalculator(''));
  },

  "test should return the input number": function(){
    assertEquals(2, stringCalculator('2'));
  },

  "test should return the sum of input numbers (separated by commas)": function(){
    assertEquals(5, stringCalculator('2,3'));
  },

  "test should return the sum of input numbers (separated by line break)": function(){
    assertEquals(5, stringCalculator('2\n3'));
    assertEquals(15, stringCalculator('1,2\n3\n4,5'));
  },

  "test a custom delimiter can be defined": function(){
    assertEquals(3, stringCalculator('//;\n1;2'));
    //assertEquals(3, stringCalculator('//;\n1\n2'));
  }
});