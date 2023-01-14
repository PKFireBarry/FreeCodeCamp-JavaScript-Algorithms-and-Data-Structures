function convertToRoman(num) {

    //arrary of all the roman and arabic numerals 
    const romanNumerals = [
      { roman: 'M', decimal: 1000 },
      { roman: 'CM', decimal: 900 },
      { roman: 'D', decimal: 500 },
      { roman: 'CD', decimal: 400 },
      { roman: 'C', decimal: 100 },
      { roman: 'XC', decimal: 90 },
      { roman: 'L', decimal: 50 },
      { roman: 'XL', decimal: 40 },
      { roman: 'X', decimal: 10 },
      { roman: 'IX', decimal: 9 },
      { roman: 'V', decimal: 5 },
      { roman: 'IV', decimal: 4 },
      { roman: 'I', decimal: 1 },
    ];
  
    // Initialize an empty string to store the result
    var roman = '';
  
    // Loop through the array of roman numerals
    for (let i = 0; i < romanNumerals.length; i++) {
      while (romanNumerals[i].decimal <= num) {
        roman += romanNumerals[i].roman;
        num -= romanNumerals[i].decimal;
      }
    }
  
    return roman;
  }
  
  
  convertToRoman(36);