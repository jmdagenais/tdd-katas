describe("Number in word test", function(){

  it("test one digit number", function(){
    expect(numberInWords.convert(0)).toEqual('zero');
    expect(numberInWords.convert(1)).toEqual('un');
    expect(numberInWords.convert(9)).toEqual('neuf');
  });

  it("test two digits number", function(){
    expect(numberInWords.convert(40)).toEqual('quarante');
    expect(numberInWords.convert(22)).toEqual('vingt-deux');
    expect(numberInWords.convert(31)).toEqual('trente et un');
  });

  it("test 3 digits number", function(){
    expect(numberInWords.convert(140)).toEqual('cent quarante');
    expect(numberInWords.convert(741)).toEqual('sept cents quarante et un');
  });

});
