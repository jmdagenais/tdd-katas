function stringCalculator(str){
  if(str.length === 0){
    return 0;
  } else {
    var info = extractDelimiter(str, ',');
    var delimiter = info.delimiter;
    str = info.newStr;
    var commaNums = str.split(delimiter);
    var allNums = [];
    
    for(var i = 0; i < commaNums.length; i++){
      var temp = commaNums[i].split('\n');
      allNums = allNums.concat(temp);
    }
    
    var sum = allNums.reduce(function(a,b){
      return a*1 + b*1;
    });
    return sum;
  }

  return parseInt(str, 10);
}

function extractDelimiter(str, defaultDelimiter){
  var delimiter = defaultDelimiter;
  var parts = str.split('\n'); //TODO: split string in a smart way
  if(parts[0].indexOf('//') === 0){
    delimiter = parts[0][2];
    str = parts[1];
  }
  return {delimiter: delimiter, newStr: str};
}