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
          height: 100%;
          z-index: 100;
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
          --final-width: 80%;
          animation: filter-transform-bwd 0.3s ease-in forwards;
        }
        .filter-button.active .line {
          animation: filter-transform-fwd 0.3s ease-in forwards;
        }
        .line:nth-child(1) {
          --initial-position: -250%;
          --initial-width: 80%;
          --rotation: -45deg;
          width: var(--initial-width);
          transform: translateY(var(--initial-position)) rotate(0);
        }
        .line:nth-child(2) {
          --initial-position: 0%;
          --initial-width: 50%;
          --rotation: 45deg;
        }
        .line:nth-child(3) {
          --initial-position: 250%;
          --initial-width: 20%;
          --rotation: 45deg;
        }
        @keyframes filter-transform-fwd {
          0% {
            width: var(--initial-width);
            transform: translateY(var(--initial-position)) rotate(0);
          }
          50% {
            width: var(--initial-width);
            transform: translateY(0) rotate(0);
          }
          51% {
            width: var(--final-width);
            transform: translateY(0) rotate(0);
          }
          100% {
            width: var(--final-width);
            transform: translateY(0) rotate(var(--rotation));
          }
        }
        @keyframes filter-transform-bwd {
          0% {
            width: var(--final-width);
            transform: translateY(0) rotate(var(--rotation));
          }
          50% {
            width: var(--final-width);
            transform: translateY(0) rotate(0);
          }
          51% {
            width: var(--initial-width);
            transform: translateY(0) rotate(0);
          }
          100% {
            width: var(--initial-width);
            transform: translateY(var(--initial-position)) rotate(0);
          }
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
          height: 100%;
          padding-top: 2rem;
          padding-left: 1rem;
        }
        section {
          width: 90%;
          padding: 10% 0;
          border-bottom: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
          border-width: 0.25rem;
        }
        input,select {
          background: var(--terciary-color, rgb(33, 136, 192));
          color: inherit;
          border: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
          border-width: 0.2rem;
          border-radius: 0.2rem;
        }
        input:focus {
          filter: brightness(0.9);
        }
        .price-inputs {
          display: flex;
          gap: 3%;
        }
        .price-inputs input {
          width: 30%;
        }
        .submit-button {
          width: 0;
          position: absolute;
          bottom: 5%;
          right: 10%;
          padding: 3%;
          background-color: var(--yellow, rgb(235, 235, 22));
          color: var(--black, black);
          border: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
          border-width: 0.3rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font: inherit;
        }
        .active .submit-button {
          width: auto;
        }
        .submit-button:hover {
          filter: brightness(1.1);
          transform: scale(1.1);
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
            <div class="price-inputs">
              <input type="number" name="min-price" id="min-price">
              <p>-</p>
              <input type="number" name="max-price">
            </div>
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
          <button class="submit-button">Filter</button>
        </form>
      </aside>
      `
      const filterButton = this.shadow.querySelector('.filter-button');
      const aside = this.shadow.querySelector('aside');
      filterButton.addEventListener('click', () => {
        aside.classList.toggle('active');
        filterButton.classList.toggle('active');
      });
    }
  }
  
  customElements.define('filter-component', Filter);