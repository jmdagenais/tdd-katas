var numberInWords = {

  digit_value: ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'], //'one', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],

  dizaine: ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'],

  convert: function(n){
      var str = n.toString();
      var digits = str.split('');
      var output = '';
      if(n === 0){
          return 'zero';
      }
      if(str.length >= 1){
          output = this.digit_value[digits.pop()];
      }

      if(str.length >= 2){
          var unite = output;
          var dizaine = this.dizaine[digits.pop()];
          output = dizaine;
          if(unite){
            var lien = unite === 'un' ? ' et ' : '-';
            if(!dizaine){
              lien = '';
            }
            output = dizaine + lien + unite;
          }
      }

      if(str.length >= 3){
          var digit = digits.pop();
          //var centaine = digit >= 2 ? this.digit_value[digit] : '';
          var valeur_centaine, cent;
          if(digit >= 2){
            valeur_centaine = this.digit_value[digit];
            cent = 'cents';
          } else {
            valeur_centaine = '';
            cent = 'cent';
          }
          output = valeur_centaine + ' ' + cent + ' ' + output;
      }

      return output.trim();
  }

};
