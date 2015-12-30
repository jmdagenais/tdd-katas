var numberInWords = {

  digit_value: ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'], //'one', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],

  dizaine: ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'],

  de10a19: ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'],

  convert: function(n){
      var str = n.toString();
      var digits = str.split('');
      var output = '';
      var unite;

      if(n === 0){
          return 'zero';
      }
      if(str.length >= 1){
        output = this.digit_value[digits.pop()];
        unite = output;
      }

      if(n >= 10 && n <= 19){
        output = this.de10a19[n%10];
      }

      if(str.length >= 2 && n >= 20){
          var current_digit = digits.pop();
          var dizaine = this.dizaine[current_digit];
          var lien;
          output = dizaine;
          if(current_digit == '7' || current_digit == '9'){
            //pour les nombres de la forme 7x et 9x
            lien = n%10 === 1 ? 'et' : '-';
            output += lien + this.de10a19[n%10];
          } else if(unite){
            lien = unite === 'un' ? ' et ' : '-';
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
