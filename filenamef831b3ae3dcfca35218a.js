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

;// CONCATENATED MODULE: ./src/scripts/index.js



header();
// menu()
/******/ })()
;