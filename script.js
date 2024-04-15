const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

 
 // Initialize Locomotive Scroll
 const scroll = new LocomotiveScroll({
  el: document.querySelector('#main-web'),
  smooth: true // Enable smooth scrolling
  // Add more options as needed
});
