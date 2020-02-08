const db = new DatabaseService('assets/database/database.json');

const builder = new GridBuilder({ gridClassName: 'logo-library' });

const buildGrid = reszort => {
  const rows = db.getReszortByName(reszort);
  builder.build(rows);
};

const menu = new MenuHandler(buildGrid, {
  hamburgerClass: 'hamburger-button',
  hiddenMenuClass: 'hidden-menu',
  menuItemsClass: 'menu-items',
});

const buildMenu = () => {
  const menuItems = db.getReszortNames();
  menu.addMenuItems(menuItems);
  menu.addEventListeners();
};

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function toggleDarkMode(isDarkMode) {
  let navBar = document.getElementsByTagName('body')[0];
  let logoLibrary = document.getElementsByClassName('logo-library')[0];
  let footer = document.getElementsByClassName('footer')[0];
  if (isDarkMode) {
    navBar.classList.toggle('dark', true);
    logoLibrary.classList.toggle('dark', true);
    footer.classList.toggle('dark', true);
    setCookie('isDarkMode', true, 90);
  } else {
    navBar.classList.toggle('dark', false);
    logoLibrary.classList.toggle('dark', false);
    footer.classList.toggle('dark', false);
    setCookie('isDarkMode', false, 90);
  }
}

const init = async() => {
  var groupName = getCookie('lastGroup');

  await db.update();

  const defGroupName = 'Simonyi';
  const allGroupNames = db.getReszortNames();

  groupName = allGroupNames.includes(groupName) ? groupName : defGroupName;
  let groupObjects = db.getReszortByName(groupName);
  var groupID = db.getReszortIDByName(groupName);

  menu.addMenuItems(allGroupNames, groupID);
  menu.addEventListeners();

  builder.build(groupObjects);
};

init();

document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.querySelector('input[type="checkbox"]');
  var darkMode = getCookie('isDarkMode');
  var isDarkMode = darkMode == 'true';
  if (isDarkMode) checkbox.checked = true;
  else checkbox.checked = false;

  toggleDarkMode(checkbox.checked);

  checkbox.addEventListener('change', function() {
    toggleDarkMode(checkbox.checked);
  });
});
