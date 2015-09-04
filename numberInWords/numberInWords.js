function convertPart(str, idx){
  var numStr = str;
  var n = parseInt(str, 10);
  var lastIndex = numStr.length - 1;
  var output = '';
  var digits = digit_value;
  if(n === 0 && str.length === 1){
    return 'zero';
  }
  if(n>=10 && n<20){
    return digit_value[n];
  }
  var c, part;
  if(numStr.length >= 1){
    c = numStr[lastIndex];
    output = digits[c];
  }
  if(numStr.length >= 2){
    c = numStr[lastIndex - 1];
    part = dizaine[c];
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
  output = output.trim() + " " + bigNumbers[idx];
  return output.trim();
}

function getNumberParts(str){
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

function numberInWords(n){
  var numStr = n.toString();
  var numParts = getNumberParts(numStr);
  var wordParts = numParts.map(convertPart);
  var output = wordParts.reverse().join(' ').trim();

  return output;
}

var digit_value = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];

  var teen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];

  var dizaine = [
    '',
    '',
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'];

  var bigNumbers = [
    '', 'thousand', 'million', 'billion'
  ];