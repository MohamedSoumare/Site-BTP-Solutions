var toggleMenu = document.querySelector('.menu-toggle');
var navLinks = document.querySelector('.nav-links');

toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

/*************Validation du formulaire  *******************/


  function validateForm() {
  
    const nameInput = document.getElementById("name");
    const nameRegex = /^[a-zA-Z]+$/;  
    const nameErrorMessage = document.getElementById("name-error-message");
    
    const emailInput = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.btp$/;
    const emailValidationMessage = document.getElementById("email-validation-message");

    emailValidationMessage.textContent = "";
     nameErrorMessage.textContent = "";
   
    if (!nameRegex.test(nameInput.value)) {
      nameErrorMessage.textContent =alert( "Le nom doit contenir uniquement des lettres.");
      return false;
    }
    if (!emailRegex.test(emailInput.value)) {
      emailValidationMessage.textContent = alert("L'adresse email doit se terminer par .btp ");
      return false;
    } else {
      emailValidationMessage.textContent = "Email valide!";
      emailValidationMessage.classList.add("valid-message"); 
    }
    return true;
  }