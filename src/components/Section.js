export default class Section {
  constructor({ renderer }, containerSelector) {
    // this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element) {
    this._container.append(element);
  }

  addItemPrepend(element) {
    this._container.prepend(element);
}

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(data) {
    this.clear();

    data.forEach(item => {
      this._renderer(item);
    });
  }
}
