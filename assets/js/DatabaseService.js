class DatabaseService {
  constructor(address) {
    this._address = address;
    this._database = null;
  }

  async update() {
    this._database = await (await fetch(this._address, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json"
      }
    })).json();
  }

  get database() {
    if (this._database == null)
      throw new Error("DatabaseService should be updated before queries.");

    return this._database;
  }

  queryByParentGroup(parentGroup) {
    return this.database.filter(row => row.parentGroup == parentGroup);
  }
}
