//mobile-menu
const hidden_nav_p_toggle = document.querySelector(".hidden_nav_p_toggle");
const mobile_menu = document.querySelector(".mobile_menu");
hidden_nav_p_toggle.onclick = function () {
  mobile_menu.classList.toggle("active");
};
//header-carousel
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
const header = document.querySelector(".header");
previous.onclick = function () {
  header.classList.toggle("prev_header");
};
next.onclick = function () {
  header.classList.toggle("next_header");
};
//testimonial-carousel
let current = 0;
const prev_testi = document.querySelector(".previous_testi");
const next_testi = document.querySelector(".next_testi");
const slide1 = document.querySelector(".testimonial_slide_item1");
const slide2 = document.querySelector(".testimonial_slide_item2");
const slide3 = document.querySelector(".testimonial_slide_item3");
const slide4 = document.querySelector(".testimonial_slide_item4");
const slide5 = document.querySelector(".testimonial_slide_item5");

const slides = [slide1, slide2, slide3, slide4, slide5];

prev_testi.onclick = function () {
  current--;
  if (current < 0) {
    current = 4;
  }
  showSlide();
};

next_testi.onclick = function () {
  current++;
  if (current > 4) {
    current = 0;
  }
  showSlide();
};

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[current].style.display = "block";
}
