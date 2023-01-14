function palindrome(str) {
    // Normalize the string by removing non-alphanumeric characters and converting to lowercase
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Check if the normalized string is a palindrome
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  
  palindrome("eye");