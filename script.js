"use strict";

let weight = 0;
let height = 0;
let age = 0;
let fit;
let figure;
let body;
let Arm;
let Abdomen;
let Hip;
let crit;
let fab;
let UK;
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".submit");

var sizetext = document.querySelector(".size").textContent;
var size;
var sizename;

const sizefunction = function (
  weight,
  height,
  age,
  fit,
  figure,
  body,
  Arm,
  Abdomen,
  Hip,
  crit,
  fab,
  UK
) {
  size =
    -0.405609 +
    weight * 0.049641 +
    height * -0.478814 +
    age * 0.001716 +
    fit * 0.080285 +
    figure * 0.136329 +
    body * 0.015452 +
    Arm * 0.065307 +
    Abdomen * -0.011538 +
    Hip * 0.114276 +
    crit * -0.009198 +
    fab * 0.629642 +
    UK * -0.005262;

  console.log(size);
  return size;
};
const Sizelabel = function (size) {
  if ((size = "XS")) {
    sizename = `Extra small`;
  } else if ((size = `S`)) {
    sizename = `small`;
  } else if ((size = `M`)) {
    sizename = `Medium`;
  } else if ((size = `L`)) {
    sizename = `Large`;
  } else if ((size = `XL`)) {
    sizename = `Extra-Large`;
  } else if ((size = `XXL`)) {
    sizename = `Double X-Large`;
  }
  return sizename;
};
const sizeconverter = function (sizenew) {
  if (sizenew <= 1.4) {
    sizenew = "XS";
  } else if (sizenew <= 2.4 && sizenew > 1.4) {
    sizenew = "S";
  } else if (sizenew <= 3.4 && sizenew > 2.4) {
    sizenew = "M";
  } else if (sizenew <= 4.4 && sizenew > 3.4) {
    sizenew = "L";
  } else if (sizenew <= 5.4 && sizenew > 4.4) {
    sizenew = "XL";
  } else if (sizenew <= 6.4 && sizenew > 5.4) {
    sizenew = "XXL";
  } else {
    sizenew = "XXXL";
  }

  console.log(sizenew);
  return sizenew;
};
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

document.querySelector(".submit").addEventListener("click", function () {
  const weight = Number(document.querySelector(".weight").value);
  console.log(weight);

  const height = Number(document.querySelector(".height").value);
  console.log(height);

  const age = Number(document.querySelector(".age").value);
  console.log(age);

  var fit = document.querySelector('input[name="fit"]:checked').value;

  console.log(fit);

  var figure = document.querySelector('input[name="figure"]:checked').value;
  console.log(figure);

  var body = document.querySelector('input[name="body"]:checked').value;

  console.log(body);

  var Arm = document.querySelector('input[name="Arm"]:checked').value;

  console.log(Arm);

  var Abdomen = document.querySelector('input[name="Abdomen"]:checked').value;

  console.log(Abdomen);

  var Hip = document.querySelector('input[name="Hip"]:checked').value;

  console.log(Hip);

  var crit = document.querySelector('input[name="crit"]:checked').value;

  console.log(crit);

  var fab = document.querySelector('input[name="fab"]:checked').value;

  console.log(fab);

  var UK = document.querySelector('input[name="UK"]:checked').value;

  console.log(UK);

  sizefunction(
    weight,
    height,
    age,
    fit,
    figure,
    body,
    Arm,
    Abdomen,
    Hip,
    crit,
    fab,
    UK
  );

  sizeconverter(size);

  if (size <= 1.4) {
    size = "XS";
  } else if (size <= 2.4 && size > 1.4) {
    size = "S";
  } else if (size <= 3.4 && size > 2.4) {
    size = "M";
  } else if (size <= 4.4 && size > 3.4) {
    size = "L";
  } else if (size <= 5.4 && size > 4.4) {
    size = "XL";
  } else if (size <= 6.4 && size > 5.4) {
    size = "XXL";
  } else {
    size = "XXXL";
  }

  document.querySelector(".sizemain").textContent = `${size}`;

  let sizenew = size;

  if ((sizenew = "XS")) {
    sizename = `Extra small`;
  } else if ((sizenew = `S`)) {
    sizename = `small`;
  } else if ((sizenew = `M`)) {
    sizename = `Medium`;
  } else if ((sizenew = `L`)) {
    sizename = `Large`;
  } else if ((sizenew = `XL`)) {
    sizename = `Extra-Large`;
  } else if ((sizenew = `XXL`)) {
    sizename = `Double X-Large`;
  }

  document.querySelector(
    ".size"
  ).textContent = `Dear Customer your size is ${size} Thank you for visiting, Happy Shopping 🛍!`;
});

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

document.querySelector(".submit").addEventListener("click", function () {
  window.scrollTo(0, 0, { behavior: "smooth" });
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
