class Tabs {
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
      t.classList.remove('btn--theme-accent');
      t.classList.add('btn--theme-grey-outline');
    });

    tab.classList.add('btn--theme-accent');
    tab.classList.remove('btn--theme-grey-outline');

    this.contents.forEach(content => content.classList.remove('is-show'));

    const target = document.getElementById(tab.getAttribute('data-tab'));
    if (target) {
      target.classList.add('is-show');
    }
  }
}

export default Tabs;