const form = document.querySelector("form");
const inputName = form.querySelector("input[name=firstname]");
const inputSecondName = form.querySelector("input[name=lastname]");
const inputPhone = form.querySelector("input[name=phone]");
const formMessage = form.querySelector(".form-message");
const sectionContact = document.querySelector("section#contact");

form.setAttribute("novalidate", true);

form.addEventListener("change", e => {
  if(inputName.checkValidity()) {
       inputName.classList.remove("invalid");
       inputName.classList.add("valid");
   }
   if(inputSecondName.checkValidity()) {
     inputSecondName.classList.remove("invalid");
     inputSecondName.classList.add("valid");
   }
 
  if(inputPhone.checkValidity()) {
     inputPhone.classList.remove("invalid");
     inputPhone.classList.add("valid");
   }
 });

form.addEventListener("submit", e => {
  e.preventDefault();
  
  let formErrors = [];

  if (!inputName.checkValidity()) {
      formErrors.push("Fill field named First Name");
      inputName.classList.remove("valid");
      inputName.classList.add("invalid");
  }

  if (!inputSecondName.checkValidity()) {
      formErrors.push("Fill field named Second Name");
      inputSecondName.classList.remove("valid");
      inputSecondName.classList.add("invalid");
  }

  if (!inputPhone.checkValidity()) {
    formErrors.push("Fill field named Phone Number");
    inputPhone.classList.remove("valid");
    inputPhone.classList.add("invalid");
}

  if (!formErrors.length) {
    
    sectionContact.innerHTML = `
          <div class="success">
          <h4>SUCCESS</h4>
          <i class="fa fa-check-circle-o" aria-hidden="true"></i>
          </div>
          `;
 
      setTimeout(function(){ 
        sectionContact.style.display = 'none';
      }, 3000);

      e.target.submit();
  } else {
      formMessage.innerHTML = `
          <h4 class="form-error-title">Bad filled fields:</h4>
          <ul class="form-error-list">
              ${formErrors.map(el => `<li>${el}</li>`).join("")}
          </ul>
      `;
  }
});