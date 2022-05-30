'use strict'


// btn 
const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const skillsBtn = document.querySelector(".skills");
const projectBtn = document.querySelector(".project");
// const experienceBtn = document.querySelector(".experience");
const educationBtn = document.querySelector(".education");
const contentBtn = document.querySelector(".content");

// y
const home = document.querySelector(".myInfo-home").offsetTop;
const about = document.querySelector(".myInfo-about").offsetTop;
const skills = document.querySelector(".myInfo-skills").offsetTop;
const project = document.querySelector(".myInfo-project").offsetTop;
// const experience = document.querySelector(".myInfo-experience").offsetTop;
const education = document.querySelector(".myInfo-education").offsetTop;
const content = document.querySelector(".myInfo-content").offsetTop;


// event
homeBtn.addEventListener('click', function() {
  window.scrollTo({top:home, behavior:'smooth'});
})
aboutBtn.addEventListener('click', function() {
  window.scrollTo({top:about, behavior:'smooth'});
})
skillsBtn.addEventListener('click', function() {
  window.scrollTo({top:skills, behavior:'smooth'});
})
projectBtn.addEventListener('click', function() {
  window.scrollTo({top:project, behavior:'smooth'});
})
// experienceBtn.addEventListener('click', function() {
//   window.scrollTo({top:experience, behavior:'smooth'});
// })
educationBtn.addEventListener('click', function() {
  window.scrollTo({top:education, behavior:'smooth'});
})
contentBtn.addEventListener('click', function() {
  window.scrollTo({top:content, behavior:'smooth'});
})

const scrollline = document.querySelector('.scroll-line');

function fillscrollline(){
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentScrolled = (Math.abs(scrolled / (fullHeight - windowHeight))) * 100;
  scrollline.style.width = percentScrolled + '%';
  scrollline.innerText = Math.floor(percentScrolled) + '%';
  
};

window.addEventListener('scroll',fillscrollline);