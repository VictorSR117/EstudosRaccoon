function initializeCarousel(){
    const slides = document.querySelectorAll(".slide");
    for (let index = 0; index < slides.length; index++) {
      const slide = slides[index];
      slide.classList.add("rhidden");
      slide.addEventListener("click", () => {
        activateCarousel(index);
      });
    }
    slides[0].classList = "slide active";
    slides[1].classList = "slide rqueue";
  }
  
  
   function activateCarousel(index) {
    const slides = document.querySelectorAll(".slide");
    const slide = slides[index];
  
    if (slide.classList.contains("active")) {
      return;
    }
  
    slide.classList = "slide active";
  
    if (slides[index - 2] != undefined) {
      slides[index - 2].classList = "slide lhidden";
    }
    if (slides[index - 1] != undefined) {
      slides[index - 1].classList = "slide lqueue";
    }
    if (slides[index + 1] != undefined) {
      slides[index + 1].classList = "slide rqueue";
    }
    if (slides[index + 2] != undefined) {
      slides[index + 2].classList = "slide rhidden";
    }
  }
  
  
  function activateCarousel(index) {
    const slides = document.querySelectorAll(".slide");
    const slide = slides[index];
  
    if (slide.classList.contains("active")) {
      return;
    }
  
    slide.classList = "slide active";
  
    if (slides[index - 2] != undefined) {
      slides[index - 2].classList = "slide lhidden";
    }
    if (slides[index - 1] != undefined) {
      slides[index - 1].classList = "slide lqueue";
    }
    if (slides[index + 1] != undefined) {
      slides[index + 1].classList = "slide rqueue";
    }
    if (slides[index + 2] != undefined) {
      slides[index + 2].classList = "slide rhidden";
    }
  }
  
  function initializeCarousel() {
    const slides = document.querySelectorAll(".slide");
    for (let index = 0; index < slides.length; index++) {
      const slide = slides[index];
      slide.classList.add("rhidden");
      slide.addEventListener("click", () => {
        activateCarousel(index);
      });
    }
    slides[0].classList = "slide active";
    slides[1].classList = "slide rqueue";
  }
  
  initializeCarousel();