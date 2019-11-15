const db = new DatabaseService("assets/database/database.json");

const builder = new GridBuilder({ gridClassName: "logo-library" });

const buildGrid = reszort => {
  const rows = db.getReszortByName(reszort);
  builder.build(rows);
};

const menu = new MenuHandler(buildGrid, {
  hamburgerClass: "hamburger-button",
  hiddenMenuClass: "hidden-menu",
  menuItemsClass: "menu-items"
});

const buildMenu = () => {
  const menuItems = db.getReszortNames();
  menu.addMenuItems(menuItems);
  menu.addEventListeners();
};

const init = async() => {
  await db.update();
  buildMenu();
  buildGrid("Simonyi");
};

init();

document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.querySelector('input[type="checkbox"]');

  if (checkbox.checked) {
    let navBar = document.getElementsByTagName('body')[0];
    let logoLibrary = document.getElementsByClassName('logo-library')[0];
    navBar.classList.toggle("dark");
    logoLibrary.classList.toggle("dark");
  } else {
    let navBar = document.getElementsByTagName('body')[0];
    let logoLibrary = document.getElementsByClassName('logo-library')[0];
    navBar.classList.toggle("dark");
    logoLibrary.classList.toggle("dark");
  }

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      let navBar = document.getElementsByTagName('body')[0];
      let logoLibrary = document.getElementsByClassName('logo-library')[0];
      navBar.classList.toggle("dark");
      logoLibrary.classList.toggle("dark");
    } else {
      let navBar = document.getElementsByTagName('body')[0];
      let logoLibrary = document.getElementsByClassName('logo-library')[0];
      navBar.classList.toggle("dark");
      logoLibrary.classList.toggle("dark");
    }
  });
});