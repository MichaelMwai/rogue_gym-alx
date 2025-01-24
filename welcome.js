document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcomeScreen");
  const enterButton = document.getElementById("enterButton");

  // Hide the welcome screen when the Enter button is clicked
  enterButton.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
  });

  // Optional: Add a check for first-time visitors (using localStorage)
  if (!localStorage.getItem("welcomeSeen")) {
    welcomeScreen.classList.remove("hidden");
    localStorage.setItem("welcomeSeen", "true");
  } else {
    welcomeScreen.classList.add("hidden");
  }
});
