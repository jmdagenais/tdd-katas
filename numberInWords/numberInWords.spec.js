TestCase("Number in word test", {

  "test one digit number": function(){
    assertEquals('zero', numberInWords.convert(0));
    assertEquals('one', numberInWords.convert(1));
    assertEquals('nine', numberInWords.convert(9));
  },

  "test two digits number": function(){
    assertEquals('twenty', numberInWords.convert(20));
    assertEquals('thirty-one', numberInWords.convert(31));
  },

  "test three digits number": function(){
    assertEquals('one hundred fourty', numberInWords.convert(140));
    assertEquals('three hundred thirty-nine', numberInWords.convert(339));
    assertEquals('three hundred five', numberInWords.convert(305));
    assertEquals('six hundred', numberInWords.convert(600));
  },

  "test number in teens": function(){
    assertEquals('ten', numberInWords.convert(10));
    assertEquals('eleven', numberInWords.convert(11));
    assertEquals('eighteen', numberInWords.convert(18));
  },

  "test number > 1000": function(){
    assertEquals('five thousand nine hundred fourty-one', numberInWords.convert(5941));
    assertEquals('thirty-three thousand five', numberInWords.convert(33005));
    assertEquals('six hundred thousand', numberInWords.convert(600000));
    assertEquals('six million', numberInWords.convert(6000000));
    assertEquals('one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine', numberInWords.convert(123456789));
  }


});