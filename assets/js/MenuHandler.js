class MenuHandler {
  constructor(updateFunc, { hamburgerClass, hiddenMenuClass, menuItemsClass }) {
    this._updateFunc = updateFunc;

    this._isHiddenMenuActive = false;

    this._hamburger = document.getElementsByClassName(hamburgerClass)[0];
    this._hiddenMenu = document.getElementsByClassName(hiddenMenuClass)[0];
    this._menuItems = document.getElementsByClassName(menuItemsClass)[0];
  }

  addMenuItems(menuItems, groupID) {
    menuItems.forEach(item => {
      const html = `<a href="#" data-group="${item}">${item}</a>`;
      this._menuItems.innerHTML += html;
      this._hiddenMenu.innerHTML += html;
    });

    const defaultSelected = this._menuItems.getElementsByTagName('A')[groupID];
    const defaultHiddenSelected = this._hiddenMenu.getElementsByTagName('A')[
      groupID
    ];
    defaultSelected.classList += 'menu-active';
    defaultHiddenSelected.classList += 'hidden-menu-active';
    this._updateFunc(defaultSelected.dataset.group);
    this._updateFunc(defaultHiddenSelected.dataset.group);
  }

  addEventListeners() {
    this._hamburger.onclick = () => this.toggleHamburger();
    this._hiddenMenu.onclick = event => this.hiddenMenuClick(event);
    this._menuItems.onclick = event => this.menuItemsClick(event);
  }

  hiddenMenuClick(event) {
    let targetElement = event.target;

    if (targetElement.tagName == 'A') {
      this.toggleHamburger();

      let tempHiddenMenuActive = document.getElementsByClassName(
        'hidden-menu-active',
      )[0];
      tempHiddenMenuActive.classList.toggle('hidden-menu-active');
      let tempMenuActive = document.getElementsByClassName('menu-active')[0];
      tempMenuActive.classList.toggle('menu-active');

      targetElement.classList.toggle('hidden-menu-active');

      let count = 0;
      for (count; count < this._hiddenMenu.childNodes.length; count++) {
        if (
          this._hiddenMenu.childNodes[count].className == 'hidden-menu-active'
        ) {
          break;
        }
      }
      this._menuItems.childNodes[count].classList.toggle('menu-active');

      setCookie('lastGroup', db.getReszortNameByID(count - 1), 90);

      this._updateFunc(targetElement.dataset.group);
    }
  }

  menuItemsClick(event) {
    let targetElement = event.target;
    if (targetElement.tagName == 'A') {
      let tempMenuActive = document.getElementsByClassName('menu-active')[0];
      tempMenuActive.classList.toggle('menu-active');
      let tempHiddenMenuActive = document.getElementsByClassName(
        'hidden-menu-active',
      )[0];
      tempHiddenMenuActive.classList.toggle('hidden-menu-active');

      targetElement.classList.toggle('menu-active');

      let count = 0;
      for (count; count < this._menuItems.childNodes.length; count++) {
        if (this._menuItems.childNodes[count].className == 'menu-active') {
          break;
        }
      }
      this._hiddenMenu.childNodes[count].classList.toggle('hidden-menu-active');

      setCookie('lastGroup', db.getReszortNameByID(count - 1), 90);

      this._updateFunc(event.target.dataset.group);
    }
  }

  toggleHamburger() {
    const style = this._hiddenMenu.style;

    if (this._isHiddenMenuActive) {
      style.visibility = 'hidden';
      style.zIndex = '-1';
      style.transform = 'translateY(-220px)';
    } else {
      style.visibility = 'visible';
      style.zIndex = '2';
      style.transform = 'translateY(0px)';
    }

    this._hamburger.classList.toggle('open');
    this._isHiddenMenuActive = !this._isHiddenMenuActive;
  }
}
