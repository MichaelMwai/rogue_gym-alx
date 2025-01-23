const subscriptionForm = document.getElementById("subscriptionForm");
const emailInput = document.getElementById("email");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const closePopupButton = document.getElementById("closePopup");

subscriptionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;
  if (email) {
    popupMessage.textContent = `Thank you for subscribing! An email has been sent to ${email}.`;

    popup.classList.remove("hidden");

    emailInput.value = "";
  }
});

// Handle popup close
closePopupButton.addEventListener("click", function () {
  popup.classList.add("hidden");
});
