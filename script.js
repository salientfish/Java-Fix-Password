function generatePassword() {
    var length = parseInt(
      prompt("Enter the desired length of your password (between 8 and 128 characters):")
    );
  
    while (isNaN(length) || length < 8 || length > 128) {
      length = parseInt(
        prompt(
          "Invalid length! Please enter a number between 8 and 128 for the password length:"
        )
      );
    }
  
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");
  
    while (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumeric &&
      !includeSpecial
    ) {
      alert("At least one character type should be selected!");
      includeLowercase = confirm("Include lowercase characters?");
      includeUppercase = confirm("Include uppercase characters?");
      includeNumeric = confirm("Include numeric characters?");
      includeSpecial = confirm("Include special characters?");
    }
  
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
    var charSet = "";
    if (includeLowercase) {
      charSet += lowercaseChars;
    }
    if (includeUppercase) {
      charSet += uppercaseChars;
    }
    if (includeNumeric) {
      charSet += numericChars;
    }
    if (includeSpecial) {
      charSet += specialChars;
    }
  
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet.charAt(randomIndex);
    }
  
    var passwordElement = document.getElementById("generated-password");
    passwordElement.textContent = "Generated Password: " + password;
  }
  