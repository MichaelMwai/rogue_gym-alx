document.addEventListener("DOMContentLoaded", () => {
  const subscriptionForm = document.getElementById("subscriptionForm");
  const popup = document.getElementById("popup");
  const popupEmail = document.getElementById("popupEmail");
  const closePopup = document.getElementById("closePopup");

  subscriptionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    // Update popup with the entered email
    popupEmail.textContent = email;

    popup.classList.add("show");

    emailInput.value = "";
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  //Close popup when clicking outside of it
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });
});
