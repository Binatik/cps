/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/modules/header/header.js
function header() {
  var headerBurger = document.querySelector(".header__burger");
  var navigationBurger = document.querySelector(".navigation__burger");
  var overlay = document.querySelector(".navigation__overlay");
  var navigation = document.querySelector(".navigation__container");
  var desktopWidth = 1440;
  var width = document.body.clientWidth;
  function openNavigation() {
    navigation.classList.add("navigation__container--open");
    overlay.classList.add("navigation__overlay--open");
    overlay.classList.remove("visibility-hidden");
  }
  function closeNavigation() {
    navigation.classList.remove("navigation__container--open");
    overlay.classList.remove("navigation__overlay--open");
    overlay.classList.add("visibility-hidden");
  }
  if (width > desktopWidth) {
    closeNavigation();
  }
  headerBurger.addEventListener("click", function (event) {
    openNavigation();
  });
  navigationBurger.addEventListener("click", function (event) {
    closeNavigation();
  });
  overlay.addEventListener("click", function (event) {
    closeNavigation();
  });
}

;// CONCATENATED MODULE: ./src/scripts/modules/navigation/navigation.js
function navigation() {
  var navigationMarker = document.querySelector(".navigation__marker");
  var navigationLinkActive = document.querySelector(".navigation__link--active");
  var navigationLinks = document.querySelectorAll(".navigation__link");
  document.addEventListener("DOMContentLoaded", function () {
    navigationMarker.style.top = navigationLinkActive.offsetTop + "px";
    navigationMarker.style.height = navigationLinkActive.offsetHeight + "px";
  });
  navigationLinks.forEach(function (navigationLink) {
    navigationLink.addEventListener("mouseover", function (event) {
      navigationMarker.style.top = event.target.offsetTop + "px";
      navigationMarker.style.height = event.target.offsetHeight + "px";
    });
    navigationLink.addEventListener("mouseout", function (event) {
      navigationMarker.style.top = navigationLinkActive.offsetTop + "px";
      navigationMarker.style.height = navigationLinkActive.offsetHeight + "px";
    });
  });
}

;// CONCATENATED MODULE: ./src/scripts/index.js



header();
navigation();
/******/ })()
;