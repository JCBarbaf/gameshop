class Details extends HTMLElement {

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
        .detail-container {
          width: 90%;
          height: 80vh;
          overflow: hidden;
          margin: 2% auto;
          background: var(--terciary-color, rgb(33, 136, 192)) var(--gradient, linear-gradient(0deg, rgba(200,200,200,0.1) 0%, rgba(50,50,50,0.1) 100%));
          border-radius: 2rem;
          box-shadow: var(--shadow, 0.5rem 0.5rem 0 0 rgba(0, 0, 0, 0.2))
        }
        .detail-header {
          padding: 2%;
          background-color: var(--primary-color, rgb(24, 80, 111));
          border-bottom: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
        }
        .detail-container main {
          height: 85%;
          display: flex;
          justify-content: space-around;
          align-items: stretch;
        }
        .slider-price {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin: 0 5%;
        }
        .slider {
          display: flex;
          justify-content: center;
          align-items: stretch;
          overflow: hidden;
          margin: 3% 0;
          border-radius: 1rem;
          box-shadow: var(--shadow, 0.5rem 0.5rem 0 0 rgba(0, 0, 0, 0.2))
        }
        .arrow {
          width: 3rem;
          padding-right: 2%;
          background-color: var(--primary-color, rgb(24, 80, 111));
          cursor: pointer;
        }
        .arrow.left {
          transform: scale(-1);
        }
        .arrow:hover {
          filter: brightness(0.9);
        }
        .slider-images {
          width: 40rem;
          height: 30rem;
          position: relative;
          overflow: hidden;
          border-block: 0.5rem solid var(--primary-color, rgb(24, 80, 111));
        }
        .slider-images img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          object-fit: cover;
        }
        .price-container {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 3%;
          color: var(--white, white);
          font-size: 1.25rem;
          line-height: 1rem;
        }
        .discount {
          padding: 3%;
          background-color: var(--red, red);
          font-size: 1.5rem;
          font-weight: bold;
          border-radius: 0 0.75rem 0 0.75rem;
        }
        .old-price {
          text-decoration: line-through;
          filter: brightness(0.4);
        }
        .info-buttons {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .info {
          height: 80%;
          overflow: auto;
          margin: 3% 1%;
          color: var(--black, black);
          font-size: 1.2rem;
          text-align: justify;
        }
        .info p {
          margin-bottom: 2%;
        }
        .info span {
          font-weight: bold;
        }
        .info .genre {
          margin: 0 0.5%;
          padding: 0.5%;
          background-color: var(--primary-color, rgb(24, 80, 111));
          color: var(--white, white);
          border-radius: 0.5rem;
          font-weight: normal;
        }
        .buy-bar {
          display: flex;
          align-items: center;
          gap: 2%;
          margin-left: 1%;
        }
        .buy-bar button, .buy-bar a {
          padding: 1%;
          border: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
          border-width: 0.25rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 1.5rem;
        }
        .buy-bar button:hover, .buy-bar a:hover {
          filter: brightness(1.1);
          transform: scale(1.1);
        }
        .quantity-container {
          display: flex;
          font-size: 2rem;
        }
        .quantity {
          width: 2.5rem;
          background: none;
          color: inherit;
          border: none;
          font: inherit;
          text-align: center;
        }
        .quantity::-webkit-outer-spin-button,
        .quantity::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
        .quantity-container button {
          background: none;
          color: inherit;
          border: none;
          font: inherit;
        }
        .quantity-container button:hover {
          filter: brightness(0.8);
          transform: scale(1.1);
        }
        .add-cart-button {
          display: flex;
          align-items: center;
          background-color: var(--primary-color, rgb(24, 80, 111));
          color: var(--terciary-color, rgb(33, 136, 192));
        }
        .cart-icon {
          width: 2rem;
        }
        .buy-now-button {
          background-color: var(--yellow, yellow);
        }
        .wishlist-button {
          width: 3rem;
          cursor: pointer;
        }
        .wishlist-button .filler {
          fill: none;
        }
        .wishlist-button:hover .filler {
          fill: rgb(0,0,0,0.05);
        }
        .wishlisted .filler {
          fill: var(--yellow, yellow);
        }
        .wishlisted .wishlist-button:hover .filler {
          fill: var(--yellow, yellow);
          filter: brightness(0.9);
        }
      </style>
      <div class="detail-container">
        <header class="detail-header"></header>
        <main>
          <div class="slider-price">
            <div class="slider">
              <svg class="arrow left" viewBox="0 0 299 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M269 132.179C282.333 139.877 282.333 159.123 269 166.821L104.75 261.65C91.4167 269.348 74.75 259.726 74.75 244.33L74.75 54.6702C74.75 39.2742 91.4167 29.6517 104.75 37.3497L269 132.179Z" fill="#3C9CD0"/>
              </svg>
              <div class="slider-images">
                <img class="active" src="img/monstermaker-inicio.png">
                <img src="img/monstermaker-captura.png">
              </div>
              <svg class="arrow right" viewBox="0 0 299 299" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M269 132.179C282.333 139.877 282.333 159.123 269 166.821L104.75 261.65C91.4167 269.348 74.75 259.726 74.75 244.33L74.75 54.6702C74.75 39.2742 91.4167 29.6517 104.75 37.3497L269 132.179Z" fill="#3C9CD0"/>
              </svg>
            </div>
            <div class="price-container">
              <p class="discount">-20%</p>
              <p class="old-price">20.00€</p>
              <p class="current-price">16.00€</p>
            </div>
          </div>
          <div class="info-buttons">
            <div class="info">
              <p><span>Title:</span> Monster maker.</p>
              <p><span>Developer:</span> JCBarbaf Studios.</p>
              <p><span>Description:</span> Monster Maker es un juego de gestión de recursos donde tendrás que criar monstruos para luego venderlos a las mazmorras del señor oscuro. El juego cuenta con un sistema de día y noche, crecimiento de las criaturas y las plantaciones e incluso una guarida generada aleatoriamente..</p>
              <p><span>Genres:</span><span class="genre">adventure</span><span class="genre">farming simulator</span><span class="genre">rpg</span></p>
            </div>
            <div class="buy-bar">
              <svg class="wishlist-button" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="filler" d="M20.2441 3.21957C21.0021 1.82969 22.9979 1.82969 23.7559 3.21957L28.399 11.7334C28.6867 12.2608 29.1962 12.631 29.7867 12.7416L39.3187 14.5266C40.8747 14.818 41.4915 16.716 40.4038 17.8664L33.7415 24.9133C33.3288 25.3498 33.1342 25.9488 33.2115 26.5446L34.4594 36.1616C34.6631 37.7316 33.0485 38.9046 31.6183 38.2258L22.8577 34.0671C22.3149 33.8095 21.6851 33.8095 21.1423 34.0671L12.3817 38.2258C10.9515 38.9046 9.33691 37.7316 9.54063 36.1616L10.7885 26.5446C10.8658 25.9488 10.6712 25.3498 10.2585 24.9133L3.59616 17.8664C2.50854 16.716 3.12525 14.818 4.68134 14.5266L14.2133 12.7416C14.8038 12.631 15.3133 12.2608 15.601 11.7334L20.2441 3.21957Z" fill="#FFFF00"/>
                <path d="M22.8779 3.69837L27.5211 12.2122C27.9526 13.0033 28.7169 13.5586 29.6027 13.7245L39.1346 15.5095C39.9126 15.6552 40.221 16.6042 39.6772 17.1794L33.0149 24.2263C32.3958 24.8811 32.1038 25.7796 32.2198 26.6733L33.4677 36.2903C33.5695 37.0753 32.7623 37.6618 32.0472 37.3224L23.2865 33.1637C22.4724 32.7773 21.5276 32.7773 20.7135 33.1637L11.9528 37.3224C11.2377 37.6618 10.4305 37.0753 10.5323 36.2903L11.7802 26.6733C11.8962 25.7796 11.6042 24.8811 10.9851 24.2263L4.32282 17.1794C3.77901 16.6042 4.08736 15.6552 4.86541 15.5095L14.3973 13.7245C15.2831 13.5586 16.0474 13.0033 16.4789 12.2122L21.1221 3.69837C21.5011 3.00343 22.4989 3.00342 22.8779 3.69837Z" stroke="black" stroke-opacity="0.2" stroke-width="2"/>
              </svg>
              <div class="quantity-container">
                <button class="minus-button">-</button>
                <input class="quantity" type="number" value="1">
                <button class="plus-button">+</button>
              </div>
              <button class="add-cart-button">
                <p>+</p>
                <svg class="cart-icon" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M157.092 147.505C157.092 142.335 161.284 138.143 166.455 138.143H295.658C300.829 138.143 305.021 142.335 305.021 147.505C305.021 152.676 300.829 156.868 295.658 156.868H166.455C161.284 156.868 157.092 152.676 157.092 147.505Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M157.092 197.595C157.092 192.424 161.284 188.233 166.455 188.233H295.658C300.829 188.233 305.021 192.424 305.021 197.595C305.021 202.766 300.829 206.958 295.658 206.958H166.455C161.284 206.958 157.092 202.766 157.092 197.595Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M137.441 238.084C141.838 240.804 143.198 246.574 140.478 250.971L115.433 291.464C112.714 295.862 106.944 297.222 102.546 294.502C98.1483 291.782 96.7882 286.012 99.5082 281.615L124.553 241.122C127.273 236.724 133.043 235.364 137.441 238.084Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M100.684 289.817C100.684 284.646 104.875 280.454 110.046 280.454H321.406C326.577 280.454 330.769 284.646 330.769 289.817C330.769 294.987 326.577 299.179 321.406 299.179H110.046C104.875 299.179 100.684 294.987 100.684 289.817Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8452 62.5399C13.8452 57.3691 18.037 53.1774 23.2078 53.1774H66.5097C71.6805 53.1774 75.8723 57.3691 75.8723 62.5399C75.8723 67.7108 71.6805 71.9025 66.5097 71.9025H23.2078C18.037 71.9025 13.8452 67.7108 13.8452 62.5399Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4282 54.7204C68.2639 52.8894 73.6684 55.3252 75.4995 60.161L93.7565 108.378C95.5875 113.214 93.1517 118.618 88.3159 120.45C83.4801 122.281 78.0756 119.845 76.2446 115.009L57.9876 66.7917C56.1566 61.9559 58.5924 56.5514 63.4282 54.7204Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M96.6747 117.077L138.417 239.259H322.219L363.245 117.077H96.6747ZM82.2729 98.3518C76.4949 98.3518 72.4311 104.035 74.299 109.502L123.078 252.282C124.244 255.692 127.448 257.984 131.052 257.984H329.625C333.245 257.984 336.461 255.671 337.613 252.24L385.555 109.46C387.389 104.001 383.327 98.3518 377.567 98.3518H82.2729Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M106.301 327.267C113.928 327.267 120.11 321.084 120.11 313.457C120.11 305.83 113.928 299.647 106.301 299.647C98.6736 299.647 92.4908 305.83 92.4908 313.457C92.4908 321.084 98.6736 327.267 106.301 327.267ZM106.301 345.992C124.269 345.992 138.836 331.426 138.836 313.457C138.836 295.489 124.269 280.922 106.301 280.922C88.332 280.922 73.7656 295.489 73.7656 313.457C73.7656 331.426 88.332 345.992 106.301 345.992Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M321.172 327.267C328.799 327.267 334.981 321.084 334.981 313.457C334.981 305.83 328.799 299.647 321.172 299.647C313.545 299.647 307.362 305.83 307.362 313.457C307.362 321.084 313.545 327.267 321.172 327.267ZM321.172 345.992C339.14 345.992 353.707 331.426 353.707 313.457C353.707 295.489 339.14 280.922 321.172 280.922C303.203 280.922 288.637 295.489 288.637 313.457C288.637 331.426 303.203 345.992 321.172 345.992Z" fill="#3C9CD0"/>
                </svg>
              </button>
              <a class="buy-now-button" href="checkout.html">Buy now</a>
            </div>
          </div>
        </main>
      </div>
      `
      const detailContainer = this.shadow.querySelector('.detail-container');
      detailContainer.addEventListener('click', (event) => {
        if (event.target.closest('.wishlist-button')) {
          event.preventDefault();
          detailContainer.classList.toggle('wishlisted');
        }
      });
    }
  }
  
  customElements.define('details-component', Details);