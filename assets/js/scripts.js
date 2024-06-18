var toggleMenu = document.querySelector('.menu-toggle');
var navLinks = document.querySelector('.nav-links');

toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});
 /***********************Validation des champs  *****************/
 function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === "") {
        alert("Le nom est requis.");
        return false;
    }
    
    if (email === "") {
        alert("L'email est requis.");
        return false;
    } else if (!validateEmail(email)) {
        alert("L'email doit commencer par une lettre majuscule et se terminer par .co.");
        return false;
    }
    
    if (message === "") {
        alert("Le message est requis.");
        return false;
    }
    
    return true;
}

function validateEmail(email) {
    const re = /^[A-Z][^\s@]*@[^\s@]+\.[^\s@]+\.co$/;
    return re.test(email);
}