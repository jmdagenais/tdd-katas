TestCase("number to roman test", {

  "test should return the right value": function(){
    assertEquals('I', decimalToRoman(1));
    assertEquals('II', decimalToRoman(2));
    assertEquals('III', decimalToRoman(3));
    assertEquals('V', decimalToRoman(5));
    assertEquals('X', decimalToRoman(10));
    assertEquals('XVI', decimalToRoman(16));
    assertEquals('MDCLXXXVII', decimalToRoman(1687));
    assertEquals('IV', decimalToRoman(4));
    assertEquals('MCDIII', decimalToRoman(1403));
  }

});