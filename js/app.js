
$(document).ready(function(){
  $('.testmonial-container').slick({
    speed: 350,
    useTransform: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-angle-right' aria-hidden='true'></i></button>",
  });
  $('.counter').counterUp({
    time: 2000,
    delay: 10,
  });
});

window.addEventListener("load", function() {
  const btnHeaderMenu = document.querySelector(".header-bars");
  const headerMenu = document.querySelector(".menu");
  const btnFooterMenu = document.querySelector(".footer-bars");
  const footerMenu = document.querySelector(".footer-content");
  btnHeaderMenu && btnHeaderMenu.addEventListener("click", handleToggleHeaderMenu);
  function handleToggleHeaderMenu(e) {
    headerMenu && headerMenu.classList.add("is-active");
  }
  btnFooterMenu && btnFooterMenu.addEventListener("click", handleToggleFooterMenu);
  function handleToggleFooterMenu(e) {
    footerMenu && footerMenu.classList.add("is-active");
  }
  document.addEventListener("click", function(e) {
    if(e.target.matches(".header-bars") || e.target.matches(".menu, .menu *")) {
      return;
    }else {
      headerMenu && headerMenu.classList.remove("is-active");
    }
    if(e.target.matches(".footer-bars") || e.target.matches(".footer-content, .footer-content *")) {
      return;
    }else {
      footerMenu && footerMenu.classList.remove("is-active");
    }
  });
});
const menuItems = document.querySelectorAll(".menu-item");
const footerTitle = document.querySelectorAll(".footer-title-small");
const footerTitleMenus = document.querySelectorAll(".footer-menu");
const serviceItem = document.querySelectorAll(".service-item");
const laibraryTab = document.querySelectorAll(".laibrary-tab");
const laibraryLists = document.querySelectorAll(".laibrary-list");
let laibraryList = "";
let footerTitleMenu = "";

menuItems.forEach(function(item,index) {
  item.onclick = function() {
  const menuItemActive = document.querySelector(".menu-item.is-active");
    menuItemActive.classList.remove("is-active");
    this.classList.add("is-active");
  }
})

for(let i = 0 ; i < footerTitle.length ; i++){
  footerTitle[i].onclick = function(){
    footerTitleMenu = footerTitleMenus[i];
    footerTitleMenu.classList.toggle("is-active");
  }
}
for(let i = 0 ; i < serviceItem.length ; i++){
  serviceItem[i].onclick = function(){
    const serviceItemActive = document.querySelector(".service-item.is-active");
    serviceItemActive.classList.remove("is-active");
    this.classList.add("is-active");
  }
}
laibraryTab.forEach(function(item,index) {
  item.onclick = function () {
    laibraryList = laibraryLists[index];
    const listActive = document.querySelector(".laibrary-list.is-active");
    const tabActive = document.querySelector(".laibrary-tab.is-active");
    tabActive.classList.remove("is-active");
    listActive.classList.remove("is-active");
    this.classList.add("is-active");
    laibraryList.classList.add("is-active"); 
  } 
})



