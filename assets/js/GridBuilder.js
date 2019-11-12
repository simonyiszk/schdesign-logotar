class GridBuilder {
  constructor({ gridClassName }) {
    this._grid = document.getElementsByClassName(gridClassName)[0];
    this._counter = 0;
  }

  build(groups) {
    let content = "";
    for (name in groups) content += this.buildCard(name, groups[name]);
    this._grid.innerHTML = content;

    this.animateCards();
  }

  buildCard(name, logos) {
    let content = "";
    const previewType = "preview";

    for (const logoType in logos)
      if (logoType == "preview") continue;
      else if (logos[logoType])
      content += `<a href="${logos[logoType]}" download>${logoType}</a>`;

    return `<span class="card" id="card${this._counter++}">
              <img src="${logos[previewType]}" />
              <span>
                <p>${name}</p>
                <span>${content}</span>
              </span>
            </span>`;
  }

  async animateCards() {
    const counterState = this._counter;
    this._counter = 0;

    for (let i = 0; i < counterState; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      document.getElementById(`card${i}`).style.transform = "none";
    }
  }
}