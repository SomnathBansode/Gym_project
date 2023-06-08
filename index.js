function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var age = document.forms["contactForm"]["age"].value;
    var gender = document.forms["contactForm"]["gender"].value;
    var locality = document.forms["contactForm"]["locality"].value;

    var nameRegex = /^[A-Za-z\s]+$/;
    var ageRegex = /^\d{2}$/;
    var genderValues = ["male", "female", "other"];
    var localityRegex = /^[A-Za-z]+$/;

    if (name.trim() === "") {
      alert("Please enter your name.");
      return false;
    }

    if (!nameRegex.test(name)) {
      alert("Please enter a valid name with only characters and spaces.");
      return false;
    }

    if (age.trim() === "") {
      alert("Please enter your age.");
      return false;
    }

    if (!ageRegex.test(age)) {
      alert("Please enter a valid age with two digits.");
      return false;
    }

    if (gender.trim() === "") {
      alert("Please select your gender.");
      return false;
    }

    if (!genderValues.includes(gender.toLowerCase())) {
      alert("Please enter a valid gender (male, female, or other).");
      return false;
    }

    if (locality.trim() === "") {
      alert("Please enter your locality.");
      return false;
    }

    if (!localityRegex.test(locality)) {
      alert("Please enter a valid locality with only characters.");
      return false;
    }

    return true;
  }