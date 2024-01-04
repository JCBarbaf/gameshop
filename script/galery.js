class Gallery extends HTMLElement {

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
        :host {
          flex: 1;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .galery {
          /* background-color: red; */
          height: 90%;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 3%;
          padding: 2%;
          margin: 0% 1%;
          overflow: auto;
        }
        *::-webkit-scrollbar {
          opacity: 0;
          width: 0.5rem;
        }
        *::-webkit-scrollbar-track {
          background: none;
        }
        *::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 5rem;
        }
        *:hover::-webkit-scrollbar-thumb {
          background: var(--secondary-color,rgb(0, 56, 168, 1));
        }
      </style>
      <div class="galery">
        <product-card-component></product-card-component>
        <product-card-component></product-card-component>
        <product-card-component></product-card-component>
        <product-card-component></product-card-component>
        <product-card-component></product-card-component>
        <product-card-component></product-card-component>
        <product-card-component></product-card-component>
        <product-card-component></product-card-component>
      </div>
      <footer-component></footer-component>
      `
    }
  }
  
  customElements.define('gallery-component', Gallery);