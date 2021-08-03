class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
       Vera de la Cruz Brayan Yael
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
