document.addEventListener("DOMContentLoaded", () => {
  const popupHTML = `
    <div class="login-popup-overlay" id="login-popup-overlay"></div>
    <div class="login-popup" id="login-popup">
      <span class="close" id="close-login-popup">&times;</span>
      <img src="images/rouge_gym_black.png" alt="Rogue Gym Logo">
      <h2>Welcome Back</h2>
      <p>Glad to have you back. Enter your details.</p>
      <form id="login-form" class="login-form">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" required>
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required>
        <button type="submit" class="enter-btn">Log In</button>
        <p class="center"> <img src="images/google.png" alt="Rogue Gym Logo"> Sign in with Google</p>

        <p class="center">Need an account? <a href="mailto:roguegym@contact.info?subject=Sign%20Up%20Request&body=Hi%20there!%20I%20would%20like%20to%20sign%20up%20for%20your%20gym."> Contact us</a></p>
      </form>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", popupHTML); // Append to the body

  // Elements
  const loginBtn = document.getElementById("loginBtn");
  const usernameSpan = document.getElementById("username-placeholder");
  const loginPopup = document.getElementById("login-popup");
  const overlay = document.getElementById("login-popup-overlay");
  const closePopup = document.getElementById("close-login-popup");
  const loginForm = document.getElementById("login-form");

  // Check localStorage for existing login state
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    usernameSpan.textContent = storedUsername;
    loginBtn.textContent = "Log Out";
  }

  loginBtn.addEventListener("click", () => {
    if (loginBtn.textContent === "Log In") {
      overlay.style.display = "block";
      loginPopup.style.display = "block";
    } else {
      // Log out logic
      localStorage.removeItem("username");
      usernameSpan.textContent = "";
      loginBtn.textContent = "Log In";
    }
  });

  // Close Popup
  closePopup.addEventListener("click", closeLoginPopup);
  overlay.addEventListener("click", closeLoginPopup);

  function closeLoginPopup() {
    overlay.style.display = "none";
    loginPopup.style.display = "none";
  }

  // Form Submit
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    if (username.trim()) {
      usernameSpan.textContent = username;
      loginBtn.textContent = "Log Out";
      closeLoginPopup();
    }
  });
});
