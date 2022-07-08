(() => {
  //slider
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  //tabs
  document.querySelectorAll(".work__step-button").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll(".work__step-button").forEach(function (btn) {
        btn.classList.remove("work__step-button--active");
      });
      e.currentTarget.classList.add("work__step-button--active");
      document.querySelectorAll(".work__container").forEach(function (tabsBtn) {
        tabsBtn.classList.remove("work__container--active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("work__container--active");
    });
  });

  //search-icon
  const searchIcon = document.querySelector(".site-header__search-icon");
  const searchBlock = document.querySelector(".site-header__search-block");
  const searchBlockHiden = document.querySelector(
    ".site-header__closed-search"
  );
  searchIcon.addEventListener("click", function () {
    searchBlock.classList.add("display-flex");
  });
  searchBlockHiden.addEventListener("click", function () {
    searchBlock.classList.remove("display-flex");
  });

  //burger
  const burger = document.querySelector(".site-header__burger");
  const burgerPic = document.querySelector(".site-header__burger-pic");
  const burgerMenu = document.querySelector(".site-header__hidden-menu");
  const menuLinks = document.querySelectorAll(".site-header__hidden-item");
  burger.addEventListener("click", function () {
    burgerMenu.classList.toggle("show-burger-menu");
    burger.classList.toggle("burger--active");
    burgerPic.classList.toggle("burger-pic--active");
    document.body.classList.toggle("stop-scroll");
  });
  menuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      burgerMenu.classList.remove("show-burger-menu");
      burger.classList.remove("burger--active");
      burgerPic.classList.remove("burger-pic--active");
      document.body.classList.remove("stop-scroll");
    });
  });

  //accordion
  new Accordion(".accordion-list", {
    elementClass: "accordion",
    triggerClass: "accordion__control",
    panelClass: "accordion__content",
    activeClass: "accordion--active",
    heightStyle: "content",
  });
  const accordionItems = document.querySelectorAll(".faq__item-header");
  accordionItems.forEach(function (el) {
    el.addEventListener("click", function () {
      accordionItems.forEach(function (el1) {
        if (el1 !== el) {
          el1.lastElementChild.classList.remove("rotate-45deg");
        }
      });
      el.lastElementChild.classList.toggle('rotate-45deg');
    });
  });
})();
