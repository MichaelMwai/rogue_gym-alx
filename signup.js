document.querySelectorAll(".sign-up-btn").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href =
      "mailto:roguegym@contact.info?subject=Sign%20Up%20Request&body=Hi%20there!%20I%20would%20like%20to%20sign%20up%20for%20your%20gym.";
  });
});
