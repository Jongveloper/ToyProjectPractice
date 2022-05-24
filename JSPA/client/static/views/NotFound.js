import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('404');
  }

  async getHtml() {
    return `
    <p>404 Not Found!</p>
    `;
  }
}
