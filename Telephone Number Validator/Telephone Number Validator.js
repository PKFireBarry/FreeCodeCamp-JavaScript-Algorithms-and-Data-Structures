function telephoneCheck(str) {

    // use a regular expression to check if the phone number is in a valid format
    const phoneNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  
    return phoneNumberRegex.test(str);
  }
  
  
  telephoneCheck("555-555-5555");