// Hero Slideshow with Timer

let slideIndex = 0;
showSlides();

// Function to display slides automatically
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Increment the slide index (loop back to the first slide if necessary)
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show the current slide and add the "active" class to the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Set a timer to automatically show the next slide every 5 seconds
  setTimeout(showSlides, 5000); // 5000 milliseconds = 5 seconds
}

// Function to display a specific slide when clicking a dot
function currentSlide(n) {
  slideIndex = n - 1; // Adjust to match the array index
  showSlides();
}

//date

document.getElementById("currentYear").textContent = new Date().getFullYear();
