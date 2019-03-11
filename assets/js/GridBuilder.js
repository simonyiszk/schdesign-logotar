class GridBuilder {
  constructor({ gridClassName, filesRoot }) {
    this._gridClassName = gridClassName;

    // Ennek nem itt kéne lennie, hanem inkább a válaszban.
    this._filesRoot = filesRoot;
  }

  build(rows) {
    const grid = document.getElementsByClassName(this._gridClassName)[0];

    let content = "";
    for (const row of rows) content += this.buildCard(row);

    grid.innerHTML = content;
  }

  buildCard({ groupFullName, groupId, parentGroup }) {
    const fileTypes = ["SVG", "PNG", "AI"];

    let content = "";
    for (const type of fileTypes) {
      const filename = `${groupId}.${type.toLowerCase()}`;
      const href = this.urlFrom(parentGroup, groupId, filename);
      content += `<a href=${href} download>${type}</a>`;
    }

    const imageURL = this.urlFrom(parentGroup, groupId, "display-image.png");

    return `<span>
              <img src="${imageURL}" />
              <span>
                  <p>
                    ${groupFullName}
                  </p>
                  <span>
                    ${content}
                  </span>
              </span>
            </span>`;
  }

  urlFrom(parentGroup, groupId, filename) {
    return `${this._filesRoot}/${parentGroup}/${groupId}/${filename}`;
  }
}
