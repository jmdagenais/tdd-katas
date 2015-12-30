TestCase("Number in word test", {

  "test one digit number": function(){
    assertEquals('zero', numberInWords.convert(0));
    assertEquals('un', numberInWords.convert(1));
    assertEquals('neuf', numberInWords.convert(9));
  },

  "test two digits number": function(){
    assertEquals('quarante', numberInWords.convert(40));
    assertEquals('trente et un', numberInWords.convert(31));
    assertEquals('vingt-deux', numberInWords.convert(22));
  },

  "test three digits number": function(){
    assertEquals('cent quarante', numberInWords.convert(140));
    assertEquals('trois cents trente-neuf', numberInWords.convert(339));
    assertEquals('trois cents cinq', numberInWords.convert(305));
    assertEquals('six cents', numberInWords.convert(600));
  }
});
