class Footer extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        a:hover {
          filter: brightness(0.8)
        }
        footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5% 1%;
          background-color: var(--secondary-color, rgb(11, 70, 104));
          color: var(--white, white);
        }
      </style>
      <footer>
        <a href="faqs.html">FAQS</a>
        <p class="copyright">©Juan Carlos Barba</p>
      </footer>
      `
    }
  }
  
  customElements.define('footer-component', Footer);