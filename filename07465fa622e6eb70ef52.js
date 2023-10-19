/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/modules/header/header.js
function header() {
  var navbar = document.querySelector(".header__navbar");
  var openNavbar = document.querySelector(".header__open-navbar");
  var closeNavbar = document.querySelector(".navbar__close-navbar");
  var blure = document.querySelector(".blure");
  var classNavbarOn = "navbar--on";
  var classNavbarOff = "navbar--off";
  var desktopWidth = 1440;
  var width = document.body.clientWidth;
  if (width > desktopWidth) {
    navbar.classList.add(classNavbarOn);
    navbar.classList.remove(classNavbarOff);
  }
  openNavbar.addEventListener("click", function () {
    navbar.classList.add(classNavbarOn);
    navbar.classList.remove(classNavbarOff);
    blure.classList.add('blure--on');
  });
  closeNavbar.addEventListener("click", function () {
    navbar.classList.remove(classNavbarOn);
    navbar.classList.add(classNavbarOff);
    blure.classList.remove('blure--on');
  });
  blure.addEventListener("click", function () {
    blure.classList.remove('blure--on');
    navbar.classList.remove(classNavbarOn);
    navbar.classList.add(classNavbarOff);
  });
}

;// CONCATENATED MODULE: ./src/scripts/index.js



header();
// menu()
/******/ })()
;