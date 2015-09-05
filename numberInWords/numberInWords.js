var numberInWords = {

  digit_value: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],

  dizaine: ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],

  bigNumbers: ['', 'thousand', 'million', 'billion', 'trillion'],

  convert: function(n, lang){
    var numStr = n.toString();
    var lang = lang || 'EN';
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
      return this.digit_value[n];
    }
    var c, part;
    if(numStr.length >= 1){
      c = numStr[lastIndex];
      output = digits[c];
    }
    if(numStr.length >= 2){
      c = numStr[lastIndex - 1];
      part = this.dizaine[c];
      if(output){
        if(part){
          output = part + '-' + output;
        }
      } else {
        output = part;
      }
    }
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




