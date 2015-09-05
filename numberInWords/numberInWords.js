var numberInWords = {

  digit_value: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],

  decade: ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],

  bigNumbers: ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', ],

  convert: function(n){
    var numStr = n.toString();
    var numParts = this.getNumberParts(numStr);
    var wordParts = numParts.map(this.convertPartToWords, this);
    var output = wordParts.reverse().join(' ').trim();

    return output;
  },

  convertPartToWords: function(str, idx){
    var numStr = str;
    var n = parseInt(str, 10);
    var lastIndex = numStr.length - 1;
    var output = '';
    var digits = this.digit_value;
    if(str === "0"){
      return 'zero';
    }
    if(n>=10 && n<20){
      return digits[n];
    }
    var c, part;
    //converts the digit of unit
    if(numStr.length >= 1){
      c = numStr[lastIndex];
      output = digits[c];
    }
    //converts the digit of decade
    if(numStr.length >= 2){
      c = numStr[lastIndex - 1];
      part = this.decade[c];
      if(output){
        if(part){
          output = part + '-' + output;
        }
      } else {
        output = part;
      }
    }
    //converts the digit of hundred
    if(numStr.length === 3){
      c = numStr[lastIndex - 2];
      part = digits[c];
      if(part){
        part = part + ' hundred ';
      }
      

      if(output){
        output = part + output;
      } else {
        output = part;
      }
    }
    if(n > 0){
      output = output.trim() + " " + this.bigNumbers[idx];
    }
    return output.trim();
  },

  //separate the number in 3 digit group: '123456789' =>  ['789', '456', '123']
  getNumberParts: function(str){
    var currentStr = str;
    var parts = [];
    var part = '';

    while(currentStr > 3){
      part = currentStr.substring(currentStr.length - 3);
      currentStr = currentStr.substring(0, currentStr.length - 3);
      parts.push(part);
    }

    if(currentStr.length > 0){
      parts.push(currentStr);
    }

    return parts;
  }

};




