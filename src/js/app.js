/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import ChatToggleMenu from './modules/ChatToggleMenu.js';
import PopupManager from './modules/PopupManager.js';
import initializeAllSliders from './modules/SwiperInit.js';
import Tabs from './modules/Tabs.js';
import FaqCard from './modules/FaqCard.js';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // header nav mobile toggle
  new HeaderBtnToggle();
  // chat menu mobile
  new ChatToggleMenu();
  // modal init
  new PopupManager();
  // slider init
  initializeAllSliders();
  // tabs init
  new Tabs('.js-tab-nav', '.js-tab-content');
  // faq card
  new FaqCard();
});