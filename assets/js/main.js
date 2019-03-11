const db = new DatabaseService("assets/database/database.json");

const builder = new GridBuilder({
  gridClassName: "logo-library",
  filesRoot: "assets/database"
});

const buildGrid = parentGroup => {
  const rows = db.queryByParentGroup(parentGroup);
  builder.build(rows);
};

const menu = new MenuHandler(buildGrid, {
  hamburgerClass: "hamburger-button",
  hiddenMenuClass: "hidden-menu",
  hamburgerButtonClass: "fa-bars",
  menuItemsClass: "menu-items"
});

const init = async () => {
  menu.addEventListeners();
  await db.update();
  buildGrid("simonyi");
};

init();
