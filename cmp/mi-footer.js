class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
       Cedillo Martínez Ana Gabriela
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
