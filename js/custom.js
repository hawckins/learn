// Defining Custom Element
window.customElements.define('my-header', MyHeader);

// Create class for created custom element
class MyHeader extends HTMLElement {
  // Get/Set for open property
  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    if(val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }
}
