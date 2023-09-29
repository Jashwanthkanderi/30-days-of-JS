const passwordBox = document.getElementById("password");
      const length = 14;
      const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerCase = "abcdefghijklmnopqrstuvwxyz";
      const number = "0123456789";
      const symbol = "!@#$%^&*()_+?><:{}[]=-|";

      function createPassword() {
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];
        const allChars = upperCase + lowerCase + number + symbol;
        while (length > password.length) {
          password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        passwordBox.value = password;
      }
      //Copyfunction
        const copy = document.querySelector("img");
        copy.addEventListener("click", () => {
          passwordBox.select();
          document.execCommand("copy");
          //alert copied
            alert("Password copied to clipboard");
            
        });


      //const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+?><:{}[]";