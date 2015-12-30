TestCase("Number in word test", {

  "test one digit number": function(){
    assertEquals('zero', numberInWords.convert(0));
    assertEquals('un', numberInWords.convert(1));
    assertEquals('neuf', numberInWords.convert(9));
  },

  "test two digits number": function(){
    assertEquals('dix', numberInWords.convert(10));
    assertEquals('quarante', numberInWords.convert(40));
    assertEquals('trente et un', numberInWords.convert(31));
    assertEquals('vingt-deux', numberInWords.convert(22));
    assertEquals('quatre-vingt-huit', numberInWords.convert(88));
  },

  "test three digits number": function(){
    assertEquals('cent quarante', numberInWords.convert(140));
    assertEquals('trois cents trente-neuf', numberInWords.convert(339));
    assertEquals('trois cents cinq', numberInWords.convert(305));
    assertEquals('six cents', numberInWords.convert(600));
    assertEquals('cent', numberInWords.convert(100));
  },

  "test nombre de 11 à 19": function(){
    assertEquals('onze', numberInWords.convert(11));
    assertEquals('treize', numberInWords.convert(13));
    assertEquals('dix-sept', numberInWords.convert(17));
    assertEquals('dix-neuf', numberInWords.convert(19));
  },

  "test nombre 7x et 9x": function(){
    assertEquals('soixante-dix', numberInWords.convert(70));
    assertEquals('soixante-douze', numberInWords.convert(72));
    assertEquals('soixante-dix-huit', numberInWords.convert(78));
    assertEquals('quatre-vingt-dix', numberInWords.convert(90));
    assertEquals('quatre-vingt-treize', numberInWords.convert(93));
    assertEquals('quatre-vingt-dix-neuf', numberInWords.convert(99));
  }
});
