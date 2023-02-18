/** @format */
const allSteps = document.querySelectorAll(".each-step");
const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
// const step3 = document.querySelector('.step-3')
// const step4 = document.querySelector('.step-4')

const form = document.querySelector("form");

let currentStep = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hello");
  currentStep++;

  if (currentStep == 2) {
    allSteps.forEach((eachStep) => eachStep.classList.remove("active"));
    step2.classList.add("active");
  }
});
