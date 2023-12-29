class Filter extends HTMLElement {

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
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        input,label {
          display: block;
        }
        .filter-button {
          width: 2.5rem;
          height: 2.5rem;
          position: absolute;
          right: 2%;
          margin-top: 1%;
          background-color: var(--secondary-color, rgb(11, 70, 104));
          border: var(--border);
          border-width: 0.2rem;
          border-radius: 0.5rem;
          box-shadow: 0.2rem 0.2rem 0 0 rgba(0, 0, 0, 0.2);
          cursor: pointer;
          z-index: 200;
        }
        .filter-button:hover {
          transform: scale(1.1)
        }
        .filter-icon {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .line {
          height: 10%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          background-color: var(--white, white);
          border-radius: 5rem;
        }
        .line:nth-child(1) {
          width: 80%;
          transform: translateY(-250%);
        }
        .line:nth-child(2) {
          width: 50%;
          transform: translateY(0%);
        }
        .line:nth-child(3) {
          width: 20%;
          transform: translateY(250%);
        }
        aside {
          width: 0rem;
          height: 100%;
          background: var(--secondary-color, rgb(11, 70, 104)) var(--gradient, linear-gradient(0deg, rgba(200,200,200,0.1) 0%, rgba(50,50,50,0.1) 100%));
          color: var(--white, white);
          border-left: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
          right: -200rem;
          transition: width 0.1s ease-in;
        }
        aside.active {
          width: 15rem;
        }
        .filter-form {
          position: relative;
          padding-top: 2rem;
          padding-left: 1rem;
        }
      </style>
      <button class="filter-button">
        <div class="filter-icon">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </button>
      <aside>
        <form class="filter-form">
          <h2 class="aside-title">Filter</h2>
          <section class="name-section">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name">
          </section>
          <section class="price-section">
            <label for="min-price">Price range:</label>
            <input type="number" name="min-price" id="min-price">
            <p>-</p>
            <input type="number" name="max-price">
          </section>
          <section class="genre-section">
            <label for="genre">Genre:</label>
            <select name="genre" id="genre">
              <option value="" disabled selected>---------</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="puzzle">Puzzle</option>
            </select>
          </section>
          <section class="order-section">
            <label for="order">Order by:</label>
            <select name="order" id="order">
              <option value="" disabled selected>---------</option>
              <option value="price">Lowest price</option>
              <option value="action">Highest price</option>
              <option value="action">Most popular</option>
            </select>
          </section>
          <button class="submit-button">Filtrar</button>
        </form>
      </aside>
      `
      const filterButton = this.shadow.querySelector('.filter-button');
      const aside = this.shadow.querySelector('aside');
      filterButton.addEventListener('click', () => {
        aside.classList.toggle('active')
      });
    }
  }
  
  customElements.define('filter-component', Filter);