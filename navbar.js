// // Select elements
// const hamburger = document.querySelector(".fa-bars");
// const sidePanel = document.querySelector(".side-panel");
// const closeButton = document.createElement("i");

// // Create the close button (X)
// closeButton.className = "fas fa-times close-btn";
// sidePanel.appendChild(closeButton);

// // Function to toggle the side panel
// function togglePanel() {
//   sidePanel.classList.toggle("active");
//   hamburger.style.display = sidePanel.classList.contains("active")
//     ? "none"
//     : "block";
// }

// // Function to close the panel
// function closePanel() {
//   sidePanel.classList.remove("active");
//   hamburger.style.display = "block";
// }

// // Add event listeners
// hamburger.addEventListener("click", togglePanel);
// closeButton.addEventListener("click", closePanel);

// // Close the panel when clicking outside
// document.addEventListener("click", (event) => {
//   if (!sidePanel.contains(event.target) && !hamburger.contains(event.target)) {
//     closePanel();
//   }
// });
