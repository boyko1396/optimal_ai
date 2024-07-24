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
import { TypingEffect } from './modules/TypingEffect.js';
import PopupManager from './modules/PopupManager.js';
import initializeAllSliders from './modules/SwiperInit.js';
import Tabs from './modules/Tabs.js';
import TabsChat from './modules/TabsChat.js';
import TabsChatSub from './modules/TabsChatSub.js';
import FaqCard from './modules/FaqCard.js';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // header nav mobile toggle
  new HeaderBtnToggle();
  // chat menu mobile
  new ChatToggleMenu();
  // typing effect
  new TypingEffect('.js-typing-cursor');
  // modal init
  new PopupManager();
  // slider init
  initializeAllSliders();
  // tabs init
  new Tabs('.js-tab-nav', '.js-tab-content');
  // chat tabs
  new TabsChat('.js-chat-tab-nav', '.js-chat-tab-content', '.js-chat-subnav');
  new TabsChatSub('.js-chat-tabsub-nav', '.js-chat-tabsub-content');
  // faq card
  new FaqCard();
});

document.addEventListener('DOMContentLoaded', () => {
  const hintWrapper = document.querySelector('.js-chat-hint-wrapper');
  const hintButtons = document.querySelectorAll('.js-chat-hint');
  const dropdowns = document.querySelectorAll('.js-chat-hint-dropdown');
  let activeDropdownIndex = -1;

  hintButtons.forEach((hintButton, index) => {
    hintButton.addEventListener('mouseenter', () => {
      hintButtons.forEach(btn => btn.classList.remove('is-active'));
      dropdowns.forEach(dropdown => dropdown.classList.remove('is-show'));

      if (dropdowns[index]) {
        dropdowns[index].classList.add('is-show');
        hintButton.classList.add('is-active');
        activeDropdownIndex = index;
      }
    });

    hintButton.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (activeDropdownIndex !== index) {
          hintButton.classList.remove('is-active');
          if (dropdowns[index]) {
            dropdowns[index].classList.remove('is-show');
          }
        }
      }, 100);
    });
  });

  dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('mouseenter', () => {
      activeDropdownIndex = index;
      dropdown.classList.add('is-show');
    });

    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('is-show');
      activeDropdownIndex = -1;
    });
  });

  hintWrapper.addEventListener('mouseleave', () => {
    hintButtons.forEach(btn => btn.classList.remove('is-active'));
    dropdowns.forEach(dropdown => dropdown.classList.remove('is-show'));
    activeDropdownIndex = -1;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hintButtons = document.querySelectorAll('.js-chat-hint-btn');
  const textarea = document.querySelector('.js-chat-textarea');

  hintButtons.forEach(button => {
    button.addEventListener('click', () => {
      const newValue = button.getAttribute('data-chat-hint');
      if (textarea) {
        textarea.value = newValue;
      }
    });
  });
});