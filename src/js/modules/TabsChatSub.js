class TabsChatSub {
  constructor(navSelector, contentSelector) {
    this.tabs = document.querySelectorAll(navSelector);
    this.contents = document.querySelectorAll(contentSelector);

    if (this.tabs.length === 0 || this.contents.length === 0) {
      return;
    }

    this.init();
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => this.onTabClick(tab));
    });
  }

  onTabClick(tab) {
    this.tabs.forEach(t => {
      t.classList.remove('is-active');
    });

    tab.classList.add('is-active');

    const targetContent = tab.getAttribute('data-tab-nav');

    this.contents.forEach(content => {
      if (content.getAttribute('data-tab-content') === targetContent) {
        content.classList.add('is-show');
      } else {
        content.classList.remove('is-show');
      }
    });
  }
}

export default TabsChatSub;