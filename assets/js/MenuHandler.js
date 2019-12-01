class MenuHandler {
  constructor(
    updateFunc, { hamburgerClass, hiddenMenuClass, menuItemsClass }
  ) {
    this._updateFunc = updateFunc;

    this._isHiddenMenuActive = false;

    this._hamburger = document.getElementsByClassName(hamburgerClass)[0];
    this._hiddenMenu = document.getElementsByClassName(hiddenMenuClass)[0];
    this._menuItems = document.getElementsByClassName(menuItemsClass)[0];
  }

  addMenuItems(menuItems) {
    menuItems.forEach(item => {
      const html = `<a href="#" data-group="${item}">${item}</a>`;
      this._menuItems.innerHTML += html;
      this._hiddenMenu.innerHTML += html;
    });

    const defaultSelected = this._menuItems.getElementsByTagName("A")[3];
    const defaultHiddenSelected = this._hiddenMenu.getElementsByTagName("A")[3];
    defaultSelected.classList += "menu-active";
    defaultHiddenSelected.classList += "menu-active";
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
    if (targetElement.tagName == "A") {
      this.toggleHamburger();
      for (let i = 0; i < 1; i++) {
        let tempHiddenMenuActive = document.getElementsByClassName("menu-active")[1];
        tempHiddenMenuActive.classList.toggle("menu-active");
      }
      targetElement.classList.toggle("menu-active");
      this._updateFunc(targetElement.dataset.group);
    }
  }

  menuItemsClick(event) {
    let targetElement = event.target;
    if (targetElement.tagName == "A") {
      for (let i = 0; i < 1; i++) {
        let tempMenuActive = document.getElementsByClassName("menu-active")[0];
        tempMenuActive.classList.toggle("menu-active");
      }
      targetElement.classList.toggle("menu-active");
      this._updateFunc(event.target.dataset.group);
    }
  }

  toggleHamburger() {
    const style = this._hiddenMenu.style;

    if (this._isHiddenMenuActive) {
      style.visibility = "hidden";
      style.zIndex = "-1";
      style.transform = "translateY(-120px)";
    } else {
      style.visibility = "visible";
      style.zIndex = "2";
      style.transform = "translateY(0px)";
    }

    this._hamburger.classList.toggle("open");
    this._isHiddenMenuActive = !this._isHiddenMenuActive;
  }
}