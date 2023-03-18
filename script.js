//  Creating a portfolio tabbed component 

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");


// creating a responsive navbar component 

const mobileNav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");


mobileNav.addEventListener('click', () => {
  headerElem.classList.toggle("active")
})








// Creating a portfolio tabbed component 


p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    // console.log(p_btn_clicked);
    if(!p_btn_clicked.classList.contains("p-btn")) return;

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

   //to find the number in data attribute
    
   const btn_num = p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);

   
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)
  p_img_elem.forEach((curEle) => curEle.classList.add('p-image-not-active')) 
  img_active.forEach((curEle) => curEle.classList.remove("p-image-not-active"))
   //p_img_elem;
   //p-btn--1
});

// Swiper js Code 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myJsmedia = (widthSize) => {
  if(widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
     
    });
  }else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    
    });
  }

}

// adding media queries through JS 
const widthSize = window.matchMedia("(max-width: 780px)");
//call listener function at run time 
myJsmedia(widthSize);
//Atach listener function on state changes
widthSize.addEventListener("change", myJsmedia)






// scroll to top button 
const heroSection = document.querySelector(".section-hero")
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");


scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class = "scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({behavior: "smooth"})
}

scrollElement.addEventListener("click" , scrollTop);

// animate the number count 

const counterNum = document.querySelectorAll(".counter-numbers");
 
const speed = 200;

counterNum.forEach((curElem) =>{
  
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);

    const incrementNumber = Math.trunc(targetNumber/speed);
    // console.log(incrementNumber);


    if(initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`;
      setTimeout(updateNumber, 10);
    }

  };

  updateNumber();
})