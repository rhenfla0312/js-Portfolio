let contextBtn = document.querySelector(".contextBtn");

contextBtn.addEventListener("click", function() {
  setTimeout(() => {
    alert("24시간안으로 답변드리겠습니다 감사합니다")
  },1000)
})


// education btn
// 1
const infoBtn = document.querySelector(".myInfo__arrow");
const infoMenu = document.querySelector(".myInfo__Menu")

// 2
const infoTwoBtn = document.querySelector(".myInfoTwo__arrow")

// 3
const companyBtn = document.querySelector(".companyInfo__arrow")

// 4
const companyTwoBtn = document.querySelector(".companyInfoTwo__arrow")

// 5
const cardBtn = document.querySelector(".cardInfo__arrow")
const cardMenu = document.querySelector(".cardInfo__Menu")

// 6
const cardTwoBtn = document.querySelector(".cardInfoTwo__arrow")



// 1
infoBtn.addEventListener("click", function() {
  infoMenu.classList.toggle("activeInfo");
  cardMenu.classList.remove("activeCard");
})

// 2
infoTwoBtn.addEventListener("click", function() {
  alert("준비중입니다")
})

// 3
companyBtn.addEventListener("click", function() {
  alert("준비중입니다")
})

// 4
companyTwoBtn.addEventListener("click", function() {
  alert("준비중입니다")
})

// 5
cardBtn.addEventListener("click", function() {
  cardMenu.classList.toggle("activeCard")
  infoMenu.classList.remove("activeInfo");

})

// 6
cardTwoBtn.addEventListener("click", function() {
  alert("준비중입니다")
})


// swiper
// new Swiper(선택자, 옵션)
new Swiper('.swiper', {
  // direction: 'verical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true,
  loop: true
})