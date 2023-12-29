class ProductCard extends HTMLElement {

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
        .card {
          display: block;
          width: 25rem;
          overflow: hidden;
          margin-bottom: 10%;
          background: var(--terciary-color, rgb(33, 136, 192)) var(--gradient, linear-gradient(0deg, rgba(200,200,200,0.1) 0%, rgba(50,50,50,0.1) 100%));
          color: var(--white, white);
          box-shadow: var(--shadow, 0.5rem 0.5rem 0 0 rgba(0, 0, 0, 0.2));
          border-radius: 1rem;
          text-decoration: none;
        }
        .card:hover {
          scale: 1.1;
          animation: shake 2s ease-in-out infinite;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3% 5%;
          background-color: var(--primary-color,rgb(24, 80, 111));
          border-bottom: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
          font-size: 1.5rem;
        }
        .product-title {
          flex: 1;
          text-align: center;
        }
        .wishlist-button {
          width: 2rem;
        }
        .wishlist-button .filler {
          fill: none;
        }
        .wishlist-button:hover .filler {
          fill: rgb(0,0,0,0.05);
        }
        .card.whislisted .filler {
          fill: var(--yellow, yellow)
        }
        .product-miniature {
          display: block;
          width: 90%;
          height: 45%;
          margin: 5% auto;
          border: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
          border-width: 0.4rem;
          border-radius: 0.5rem;
          object-fit: cover;
        }
        .price-container {
          display: flex;
          align-items: center;
          gap: 3%;
          font-size: 1.25rem;
        }
        .discount {
          padding: 3%;
          background-color: var(--red, red);
          font-size: 1.5rem;
          font-weight: bold;
          border-radius: 0 0.75rem 0 0;
        }
        .old-price {
          text-decoration: line-through;
          filter: brightness(0.4);
        }
        @keyframes shake {
          0% {
            transform: rotate(1deg);
          }
          50% {
            transform: rotate(-1deg);
          }
          100% {
            transform: rotate(1deg);
          }
        }
      </style>
      <a href="details.html" class="card">
        <header class="card-header">
          <p class="product-title">Monster Maker</p>
          <svg class="wishlist-button" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="filler" d="M20.2441 3.21957C21.0021 1.82969 22.9979 1.82969 23.7559 3.21957L28.399 11.7334C28.6867 12.2608 29.1962 12.631 29.7867 12.7416L39.3187 14.5266C40.8747 14.818 41.4915 16.716 40.4038 17.8664L33.7415 24.9133C33.3288 25.3498 33.1342 25.9488 33.2115 26.5446L34.4594 36.1616C34.6631 37.7316 33.0485 38.9046 31.6183 38.2258L22.8577 34.0671C22.3149 33.8095 21.6851 33.8095 21.1423 34.0671L12.3817 38.2258C10.9515 38.9046 9.33691 37.7316 9.54063 36.1616L10.7885 26.5446C10.8658 25.9488 10.6712 25.3498 10.2585 24.9133L3.59616 17.8664C2.50854 16.716 3.12525 14.818 4.68134 14.5266L14.2133 12.7416C14.8038 12.631 15.3133 12.2608 15.601 11.7334L20.2441 3.21957Z" fill="#FFFF00"/>
            <path d="M22.8779 3.69837L27.5211 12.2122C27.9526 13.0033 28.7169 13.5586 29.6027 13.7245L39.1346 15.5095C39.9126 15.6552 40.221 16.6042 39.6772 17.1794L33.0149 24.2263C32.3958 24.8811 32.1038 25.7796 32.2198 26.6733L33.4677 36.2903C33.5695 37.0753 32.7623 37.6618 32.0472 37.3224L23.2865 33.1637C22.4724 32.7773 21.5276 32.7773 20.7135 33.1637L11.9528 37.3224C11.2377 37.6618 10.4305 37.0753 10.5323 36.2903L11.7802 26.6733C11.8962 25.7796 11.6042 24.8811 10.9851 24.2263L4.32282 17.1794C3.77901 16.6042 4.08736 15.6552 4.86541 15.5095L14.3973 13.7245C15.2831 13.5586 16.0474 13.0033 16.4789 12.2122L21.1221 3.69837C21.5011 3.00343 22.4989 3.00342 22.8779 3.69837Z" stroke="black" stroke-opacity="0.2" stroke-width="2"/>
          </svg>
        </header>
        <img src="img/monstermaker-inicio.png" alt="" class="product-miniature">
        <div class="price-container">
          <p class="discount">-20%</p>
          <p class="old-price">20.00€</p>
          <p class="current-price">16.00€</p>
        </div>
      </a>
      `
    }
  }
  
  customElements.define('product-card-component', ProductCard);