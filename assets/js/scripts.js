function validateForm() {
        
  const nameInput = document.getElementById("name");
  const nameRegex = /^[a-zA-Z\s]+$/;
  const nameErrorMessage = document.getElementById("name-error-message");
  const emailInput = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.btp$/;
  const emailValidationMessage = document.getElementById("email-validation-message");
  const consentCheckbox = document.getElementById("consent");
  
  emailValidationMessage.textContent = "";
  nameErrorMessage.textContent = "";
  
  if (!nameRegex.test(nameInput.value)) {
      nameErrorMessage.textContent = alert("Le nom doit contenir uniquement des lettres et des espaces.");
      return false;
  }
  if (!emailRegex.test(emailInput.value)) {
      emailValidationMessage.textContent = alert("L'adresse email doit se terminer par .btp");
      return false;
  }
  if (!consentCheckbox.checked) {
      alert("Veuillez accepter la collecte et l'utilisation de vos données personnelles.");
      return false;
  }
  return true;
}

// Gestion du menu mobile
let toggleMenu = document.querySelector('.menu-toggle');
let navLinks = document.querySelector('.nav-links');

toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});
