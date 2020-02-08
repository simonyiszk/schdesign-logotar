class DatabaseService {
  constructor(address) {
    this._address = address;
    this._database = null;
  }

  async update() {
    this._database = await (
      await fetch(this._address, {
        method: 'GET',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
        },
      })
    ).json();
  }

  get database() {
    if (this._database == null)
      throw new Error('DatabaseService should be updated before queries.');

    return this._database;
  }

  getReszortNames() {
    return Object.keys(this.database);
  }

  getReszortByName(reszort) {
    return this.database[reszort];
  }
  getReszortIDByName(reszort) {
    return Object.keys(this.database).indexOf(reszort);
  }
  getReszortNameByID(id) {
    return Object.keys(this.database)[id];
  }
}
