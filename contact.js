
  // Initialize the slide index tracker. Start counting from the first slide (index 0 for arrays, but we use 1 here for simpler logic).
  let slideIndex = 0; 
  
  // Set up an interval timer to automatically call the showSlides function every 3000 milliseconds (3 seconds).
  let slideInterval = setInterval(showSlides, 3000);

  // --- Main function to display the correct slide and update the dots ---
  function showSlides() {
    let i;
    // Get all elements with the class "mySlides" (your two image divs)
    let slides = document.getElementsByClassName("mySlides");
    // Get all elements with the class "dot" (your two navigation circles)
    let dots = document.getElementsByClassName("dot");
    
    // Step 1: Hide all slides first
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    
    // Step 2: Move to the next index for the automatic timer
    slideIndex++;
    // If the index goes past the number of slides, loop back to the first slide
    if (slideIndex > slides.length) {slideIndex = 1}
    
    // Step 3: Remove the 'active' class (black color) from all dots
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Step 4: Display the current slide and add the 'active' class to its corresponding dot
    // We use slideIndex-1 because JavaScript arrays are 0-indexed (index 0 is the first item)
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active"; // Adds the "active" class which turns it black via CSS
  }

  // --- Function to handle manual navigation when a user clicks a dot ---
  function currentSlide(n) {
    // When a user manually clicks a dot, stop the automatic slideshow immediately
    clearInterval(slideInterval); 

    // Set the slide index to the one the user clicked (n=1 or n=2)
    slideIndex = n;
    
    // The rest of this function is similar to showSlides, but tailored for manual input
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Display the specific slide that was clicked
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    // Optional: Re-start the automatic timer after manual navigation so it resumes sliding automatically
    slideInterval = setInterval(showSlides, 3000);
  }

  // --- Initial Call ---
  // Call the showSlides function once when the script loads to display the very first slide and start the cycle.
  showSlides();
