function rot13(str) {

    let decoded_string = "";
    
    for (let char of str) {
      if (char.match(/[a-z]/i)) {
        let ascii_val = char.charCodeAt(0);
        // if the character is a letter in the first half of the alphabet (A-M)
        // add 13 to its ASCII value, otherwise subtract 13
        if (ascii_val <= 77) 
          {
          ascii_val += 13;
          } 
        else 
          {
          ascii_val -= 13;
          }
  
        // add the decoded character to the decoded string
        decoded_string += String.fromCharCode(ascii_val);
      } 
  
      else 
      {
        // add the non-alphabetic character to the decoded string as is
        decoded_string += char;
      }
  
    }
    return decoded_string;
  }
  
  