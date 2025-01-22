


/* Show pop up on successful form submission */
const form = document.getElementById("registerForm");
  const popup = document.getElementById("ThankYouPopup");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Perform form submission logic here (e.g., send data to server)
    popup.style.display = "block";
  });

  function closePopup() {
    popup.style.display = "none";
  }