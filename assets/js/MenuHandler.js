class MenuHandler {
  constructor(
    updateFunc, { hamburgerClass, hiddenMenuClass, hamburgerButtonClass, menuItemsClass }
  ) {
    this._updateFunc = updateFunc;

    this._isHiddenMenuActive = false;

    this._hamburger = document.getElementsByClassName(hamburgerClass)[0];
    this._hiddenMenu = document.getElementsByClassName(hiddenMenuClass)[0];
    this._menuItems = document.getElementsByClassName(menuItemsClass)[0];
    this._hamburgerButton = this._hamburger.getElementsByClassName(
      hamburgerButtonClass
    )[0];
  }

  addMenuItems(menuItems) {
    menuItems.forEach(item => {
      const html = `<a href="#" data-group="${item}">${item}</a>`;
      this._menuItems.innerHTML += html;
      this._hiddenMenu.innerHTML += html;
    });

    const defaultSelected = this._menuItems.getElementsByTagName("A")[0];
    defaultSelected.classList += "menu-active";
    this._updateFunc(defaultSelected.dataset.group);
  }

  addEventListeners() {
    this._hamburger.onclick = () => this.toggleHamburger();
    this._hiddenMenu.onclick = event => this.hiddenMenuClick(event);
    this._menuItems.onclick = event => this.menuItemsClick(event);
  }

  hiddenMenuClick(event) {
    let targetElement = event.target;
    if (targetElement.tagName == "A") {
      this.toggleHamburger();
      this._updateFunc(targetElement.dataset.group);
    }
  }

  menuItemsClick(event) {
    let targetElement = event.target;
    if (targetElement.tagName == "A") {
      let tempMenuActive = document.getElementsByClassName("menu-active")[0];
      tempMenuActive.classList.toggle("menu-active");
      targetElement.classList.toggle("menu-active");
      this._updateFunc(event.target.dataset.group);
    }
  }

  toggleHamburger() {
    const style = this._hiddenMenu.style;

    if (this._isHiddenMenuActive) {
      style.visibility = "hidden";
      style.zIndex = "-1";
    } else {
      style.visibility = "visible";
      style.zIndex = "2";
    }

    this._hamburgerButton.classList.toggle("fa-times");
    this._isHiddenMenuActive = !this._isHiddenMenuActive;
  }
}