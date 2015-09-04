TestCase("Roman to decimal test", {

  "test should return the good value": function(){
    assertEquals(1, roman2decimal('I'));
    assertEquals(2, roman2decimal('II'));
    assertEquals(3, roman2decimal('III'));
    assertEquals(5, roman2decimal('V'));
    assertEquals(10, roman2decimal('X'));
    assertEquals(4, roman2decimal('IV'));
    assertEquals(95, roman2decimal('XCV'));
    assertEquals(1988, roman2decimal('MCMLXXXVIII'));
  }
});