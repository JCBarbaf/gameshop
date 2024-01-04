class Cart extends HTMLElement {

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
          position: relative;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          font: inherit;
        }
        .cart-button {
          padding: 20%;
          border-radius: 1rem;
        }
        .cart-button:hover {
          background: rgb(0,0,0,0.1);
          transform: scale(1.1);
        }
        svg {
          width: 3rem;
        }
        .cart-modal.active {
          visibility: visible;
        }
        .cart-modal::before {
          content: "";
          position: absolute;
          top: -5.5%;   
          right: 5%;
          border-width: 1rem;
          border-style: solid;
          border-color: transparent transparent var(--secondary-color, rgb(11, 70, 104)) transparent;
        }
        .cart-modal {
          width: 25rem;
          position: absolute;
          right: -50%;
          visibility: hidden;
          background: var(--terciary-color, rgb(33, 136, 192)) var(--gradient, linear-gradient(0deg, rgba(200,200,200,0.1) 0%, rgba(50,50,50,0.1) 100%));
          border: 0.5rem solid var(--secondary-color, rgb(11, 70, 104));
          border-radius: 1rem;
          font-size: 1.5rem;
          z-index: 400;
        }
        .cart-modal header {
          display: flex;
          justify-content: space-between;
          padding: 1% 5%;
          background-color: var(--secondary-color, rgb(11, 70, 104));
        }
        .product-list {
          max-height: 30rem;
          overflow: auto;
          margin: 2%;
          padding-right: 5%;
        }
        .product-list::-webkit-scrollbar{
          width: 0.3rem; 
          background: transparent; 
        }

        .product-list:hover::-webkit-scrollbar-thumb{
          background-color: var(--secondary-color, rgb(11, 70, 104)); 
          border-radius: 1rem;
        }

        .product-list:hover::-webkit-scrollbar-thumb:hover{
          background-color: var(--primary-color, rgb(24, 80, 111)); 
        }
        .product {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 10%;
          padding: 3%;
          border-bottom: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
          border-width: 0.2rem;
        }
        .delete-button {
          width: 1.5rem;
          height: 1.5rem;
          position: absolute;
          top: 10%;
          right: -5%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.2rem;
          cursor: pointer;
          --fill-color: var(--secondary-color, rgb(11, 70, 104));
        }
        .delete-button:hover {
          background-color: var(--red, red);
          transform: scale(1.1);
          --fill-color: var(--white, white);
        }
        .trash-icon {
          width: 60%;
        }
        .trash-icon * {
          fill: var(--fill-color);
        }
        .product-miniature {
          width: 5rem;
          height: 5rem;
          border-radius: 0.2rem;
          object-fit: cover;
        }
        .product-details {
          flex: 1;
        }
        .quantity-price {
          display: flex;
          justify-content: space-between;
          font-size: 1.2rem;
        }
        .quantity-container {
          display: flex;
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
        .quantity-price button:hover {
          filter: brightness(0.8);
          transform: scale(1.1);
        }
        .total-container {
          display: flex;
          justify-content: space-between;
          margin: 3% 5%;
        }
        .total-price {
          font-weight: bold;
        }
        .go-checkout-button {
          width: 70%;
          display: block;
          margin: 5% auto;
          padding: 2%;
          background-color: var(--yellow, yellow);
          color: var(--black, black);
          border: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
          border-width: 0.2rem;
          border-radius: 0.5rem;
          text-align: center;
          text-decoration: none;
        }
        .go-checkout-button:hover {
          filter: brightness(1.1);
          transform: scale(1.1);
        }
      </style>
      <button class="cart-button">
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
        <div class="cart-modal">
          <header>
            <h3>Shopping cart</h3>
            <button class="close-button">X</button>
          </header>
          <div class="product-list">
            <div class="product">
              <button class="delete-button">
                <svg class="trash-icon" viewBox="0 0 207 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 52.5789C0 46.1841 5.34675 41 11.9423 41H195.058C201.653 41 207 46.1841 207 52.5789V63H0V52.5789Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M58.8427 15.9878C59.811 6.89683 67.4898 0 76.6432 0H130.079C139.16 0 146.803 6.79209 147.858 15.8011L151 42.6146L139.147 44L136.005 17.1865C135.654 14.1835 133.106 11.9194 130.079 11.9194H76.6432C73.5921 11.9194 71.0325 14.2184 70.7097 17.2487L67.867 43.9378L56 42.6769L58.8427 15.9878Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M164.159 242.766L185.151 61L197 62.3727L176.008 244.139C174.964 253.179 167.321 260 158.234 260H49.7656C40.6794 260 33.036 253.179 31.992 244.139L11 62.3727L22.8491 61L43.8411 242.766C44.1891 245.78 46.7369 248.053 49.7656 248.053H158.234C161.263 248.053 163.811 245.78 164.159 242.766Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2819 97.0521C57.6097 96.6205 60.6642 98.9164 61.1042 102.18L75.9468 212.257C76.3869 215.521 74.0459 218.516 70.7181 218.948C67.3903 219.379 64.3358 217.084 63.8958 213.82L49.0532 103.743C48.6131 100.479 50.9541 97.4837 54.2819 97.0521Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M104 97C107.314 97 110 99.6688 110 102.961V213.039C110 216.331 107.314 219 104 219C100.686 219 98 216.331 98 213.039V102.961C98 99.6688 100.686 97 104 97Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M152.718 97.0521C149.39 96.6205 146.336 98.9164 145.896 102.18L131.053 212.257C130.613 215.521 132.954 218.516 136.282 218.948C139.61 219.379 142.664 217.084 143.104 213.82L157.947 103.743C158.387 100.479 156.046 97.4837 152.718 97.0521Z" fill="#3C9CD0"/>
                </svg>
              </button>
              <img class="product-miniature" src="img/monstermaker-inicio.png">
              <div class="product-details">
                <p class="product-name">Monster Makerrrrr</p>
                <div class="quantity-price">
                  <div class="quantity-container">
                    <button class="minus-button">-</button>
                    <input class="quantity" type="number" value="1">
                    <button class="plus-button">+</button>
                  </div>
                  <p class="price">20.00€</p>
                </div>
              </div>
            </div>
            <div class="product">
              <button class="delete-button">
                <svg class="trash-icon" viewBox="0 0 207 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 52.5789C0 46.1841 5.34675 41 11.9423 41H195.058C201.653 41 207 46.1841 207 52.5789V63H0V52.5789Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M58.8427 15.9878C59.811 6.89683 67.4898 0 76.6432 0H130.079C139.16 0 146.803 6.79209 147.858 15.8011L151 42.6146L139.147 44L136.005 17.1865C135.654 14.1835 133.106 11.9194 130.079 11.9194H76.6432C73.5921 11.9194 71.0325 14.2184 70.7097 17.2487L67.867 43.9378L56 42.6769L58.8427 15.9878Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M164.159 242.766L185.151 61L197 62.3727L176.008 244.139C174.964 253.179 167.321 260 158.234 260H49.7656C40.6794 260 33.036 253.179 31.992 244.139L11 62.3727L22.8491 61L43.8411 242.766C44.1891 245.78 46.7369 248.053 49.7656 248.053H158.234C161.263 248.053 163.811 245.78 164.159 242.766Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2819 97.0521C57.6097 96.6205 60.6642 98.9164 61.1042 102.18L75.9468 212.257C76.3869 215.521 74.0459 218.516 70.7181 218.948C67.3903 219.379 64.3358 217.084 63.8958 213.82L49.0532 103.743C48.6131 100.479 50.9541 97.4837 54.2819 97.0521Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M104 97C107.314 97 110 99.6688 110 102.961V213.039C110 216.331 107.314 219 104 219C100.686 219 98 216.331 98 213.039V102.961C98 99.6688 100.686 97 104 97Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M152.718 97.0521C149.39 96.6205 146.336 98.9164 145.896 102.18L131.053 212.257C130.613 215.521 132.954 218.516 136.282 218.948C139.61 219.379 142.664 217.084 143.104 213.82L157.947 103.743C158.387 100.479 156.046 97.4837 152.718 97.0521Z" fill="#3C9CD0"/>
                </svg>
              </button>
              <img class="product-miniature" src="img/monstermaker-inicio.png">
              <div class="product-details">
                <p class="product-name">Monster Maker</p>
                <div class="quantity-price">
                  <div class="quantity-container">
                    <button class="minus-button">-</button>
                    <input class="quantity" type="number" value="1">
                    <button class="plus-button">+</button>
                  </div>
                  <p class="price">20.00€</p>
                </div>
              </div>
            </div>
            <div class="product">
              <button class="delete-button">
                <svg class="trash-icon" viewBox="0 0 207 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 52.5789C0 46.1841 5.34675 41 11.9423 41H195.058C201.653 41 207 46.1841 207 52.5789V63H0V52.5789Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M58.8427 15.9878C59.811 6.89683 67.4898 0 76.6432 0H130.079C139.16 0 146.803 6.79209 147.858 15.8011L151 42.6146L139.147 44L136.005 17.1865C135.654 14.1835 133.106 11.9194 130.079 11.9194H76.6432C73.5921 11.9194 71.0325 14.2184 70.7097 17.2487L67.867 43.9378L56 42.6769L58.8427 15.9878Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M164.159 242.766L185.151 61L197 62.3727L176.008 244.139C174.964 253.179 167.321 260 158.234 260H49.7656C40.6794 260 33.036 253.179 31.992 244.139L11 62.3727L22.8491 61L43.8411 242.766C44.1891 245.78 46.7369 248.053 49.7656 248.053H158.234C161.263 248.053 163.811 245.78 164.159 242.766Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2819 97.0521C57.6097 96.6205 60.6642 98.9164 61.1042 102.18L75.9468 212.257C76.3869 215.521 74.0459 218.516 70.7181 218.948C67.3903 219.379 64.3358 217.084 63.8958 213.82L49.0532 103.743C48.6131 100.479 50.9541 97.4837 54.2819 97.0521Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M104 97C107.314 97 110 99.6688 110 102.961V213.039C110 216.331 107.314 219 104 219C100.686 219 98 216.331 98 213.039V102.961C98 99.6688 100.686 97 104 97Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M152.718 97.0521C149.39 96.6205 146.336 98.9164 145.896 102.18L131.053 212.257C130.613 215.521 132.954 218.516 136.282 218.948C139.61 219.379 142.664 217.084 143.104 213.82L157.947 103.743C158.387 100.479 156.046 97.4837 152.718 97.0521Z" fill="#3C9CD0"/>
                </svg>
              </button>
              <img class="product-miniature" src="img/monstermaker-inicio.png">
              <div class="product-details">
                <p class="product-name">Monster Maker</p>
                <div class="quantity-price">
                  <div class="quantity-container">
                    <button class="minus-button">-</button>
                    <input class="quantity" type="number" value="1">
                    <button class="plus-button">+</button>
                  </div>
                  <p class="price">20.00€</p>
                </div>
              </div>
            </div>
            <div class="product">
              <button class="delete-button">
                <svg class="trash-icon" viewBox="0 0 207 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 52.5789C0 46.1841 5.34675 41 11.9423 41H195.058C201.653 41 207 46.1841 207 52.5789V63H0V52.5789Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M58.8427 15.9878C59.811 6.89683 67.4898 0 76.6432 0H130.079C139.16 0 146.803 6.79209 147.858 15.8011L151 42.6146L139.147 44L136.005 17.1865C135.654 14.1835 133.106 11.9194 130.079 11.9194H76.6432C73.5921 11.9194 71.0325 14.2184 70.7097 17.2487L67.867 43.9378L56 42.6769L58.8427 15.9878Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M164.159 242.766L185.151 61L197 62.3727L176.008 244.139C174.964 253.179 167.321 260 158.234 260H49.7656C40.6794 260 33.036 253.179 31.992 244.139L11 62.3727L22.8491 61L43.8411 242.766C44.1891 245.78 46.7369 248.053 49.7656 248.053H158.234C161.263 248.053 163.811 245.78 164.159 242.766Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2819 97.0521C57.6097 96.6205 60.6642 98.9164 61.1042 102.18L75.9468 212.257C76.3869 215.521 74.0459 218.516 70.7181 218.948C67.3903 219.379 64.3358 217.084 63.8958 213.82L49.0532 103.743C48.6131 100.479 50.9541 97.4837 54.2819 97.0521Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M104 97C107.314 97 110 99.6688 110 102.961V213.039C110 216.331 107.314 219 104 219C100.686 219 98 216.331 98 213.039V102.961C98 99.6688 100.686 97 104 97Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M152.718 97.0521C149.39 96.6205 146.336 98.9164 145.896 102.18L131.053 212.257C130.613 215.521 132.954 218.516 136.282 218.948C139.61 219.379 142.664 217.084 143.104 213.82L157.947 103.743C158.387 100.479 156.046 97.4837 152.718 97.0521Z" fill="#3C9CD0"/>
                </svg>
              </button>
              <img class="product-miniature" src="img/monstermaker-inicio.png">
              <div class="product-details">
                <p class="product-name">Monster Maker</p>
                <div class="quantity-price">
                  <div class="quantity-container">
                    <button class="minus-button">-</button>
                    <input class="quantity" type="number" value="1">
                    <button class="plus-button">+</button>
                  </div>
                  <p class="price">20.00€</p>
                </div>
              </div>
            </div>
            <div class="product">
              <button class="delete-button">
                <svg class="trash-icon" viewBox="0 0 207 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 52.5789C0 46.1841 5.34675 41 11.9423 41H195.058C201.653 41 207 46.1841 207 52.5789V63H0V52.5789Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M58.8427 15.9878C59.811 6.89683 67.4898 0 76.6432 0H130.079C139.16 0 146.803 6.79209 147.858 15.8011L151 42.6146L139.147 44L136.005 17.1865C135.654 14.1835 133.106 11.9194 130.079 11.9194H76.6432C73.5921 11.9194 71.0325 14.2184 70.7097 17.2487L67.867 43.9378L56 42.6769L58.8427 15.9878Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M164.159 242.766L185.151 61L197 62.3727L176.008 244.139C174.964 253.179 167.321 260 158.234 260H49.7656C40.6794 260 33.036 253.179 31.992 244.139L11 62.3727L22.8491 61L43.8411 242.766C44.1891 245.78 46.7369 248.053 49.7656 248.053H158.234C161.263 248.053 163.811 245.78 164.159 242.766Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2819 97.0521C57.6097 96.6205 60.6642 98.9164 61.1042 102.18L75.9468 212.257C76.3869 215.521 74.0459 218.516 70.7181 218.948C67.3903 219.379 64.3358 217.084 63.8958 213.82L49.0532 103.743C48.6131 100.479 50.9541 97.4837 54.2819 97.0521Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M104 97C107.314 97 110 99.6688 110 102.961V213.039C110 216.331 107.314 219 104 219C100.686 219 98 216.331 98 213.039V102.961C98 99.6688 100.686 97 104 97Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M152.718 97.0521C149.39 96.6205 146.336 98.9164 145.896 102.18L131.053 212.257C130.613 215.521 132.954 218.516 136.282 218.948C139.61 219.379 142.664 217.084 143.104 213.82L157.947 103.743C158.387 100.479 156.046 97.4837 152.718 97.0521Z" fill="#3C9CD0"/>
                </svg>
              </button>
              <img class="product-miniature" src="img/monstermaker-inicio.png">
              <div class="product-details">
                <p class="product-name">Monster Maker</p>
                <div class="quantity-price">
                  <div class="quantity-container">
                    <button class="minus-button">-</button>
                    <input class="quantity" type="number" value="1">
                    <button class="plus-button">+</button>
                  </div>
                  <p class="price">20.00€</p>
                </div>
              </div>
            </div>
            <div class="product">
              <button class="delete-button">
                <svg class="trash-icon" viewBox="0 0 207 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 52.5789C0 46.1841 5.34675 41 11.9423 41H195.058C201.653 41 207 46.1841 207 52.5789V63H0V52.5789Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M58.8427 15.9878C59.811 6.89683 67.4898 0 76.6432 0H130.079C139.16 0 146.803 6.79209 147.858 15.8011L151 42.6146L139.147 44L136.005 17.1865C135.654 14.1835 133.106 11.9194 130.079 11.9194H76.6432C73.5921 11.9194 71.0325 14.2184 70.7097 17.2487L67.867 43.9378L56 42.6769L58.8427 15.9878Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M164.159 242.766L185.151 61L197 62.3727L176.008 244.139C174.964 253.179 167.321 260 158.234 260H49.7656C40.6794 260 33.036 253.179 31.992 244.139L11 62.3727L22.8491 61L43.8411 242.766C44.1891 245.78 46.7369 248.053 49.7656 248.053H158.234C161.263 248.053 163.811 245.78 164.159 242.766Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2819 97.0521C57.6097 96.6205 60.6642 98.9164 61.1042 102.18L75.9468 212.257C76.3869 215.521 74.0459 218.516 70.7181 218.948C67.3903 219.379 64.3358 217.084 63.8958 213.82L49.0532 103.743C48.6131 100.479 50.9541 97.4837 54.2819 97.0521Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M104 97C107.314 97 110 99.6688 110 102.961V213.039C110 216.331 107.314 219 104 219C100.686 219 98 216.331 98 213.039V102.961C98 99.6688 100.686 97 104 97Z" fill="#3C9CD0"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M152.718 97.0521C149.39 96.6205 146.336 98.9164 145.896 102.18L131.053 212.257C130.613 215.521 132.954 218.516 136.282 218.948C139.61 219.379 142.664 217.084 143.104 213.82L157.947 103.743C158.387 100.479 156.046 97.4837 152.718 97.0521Z" fill="#3C9CD0"/>
                </svg>
              </button>
              <img class="product-miniature" src="img/monstermaker-inicio.png">
              <div class="product-details">
                <p class="product-name">Monster Maker</p>
                <div class="quantity-price">
                  <div class="quantity-container">
                    <button class="minus-button">-</button>
                    <input class="quantity" type="number" value="1">
                    <button class="plus-button">+</button>
                  </div>
                  <p class="price">20.00€</p>
                </div>
              </div>
            </div>
          </div>
          <div class="total-container">
            <p>Total:</p>
            <p class="total-price">100€</p>
          </div>
          <a href="checkout.html" class="go-checkout-button">Go to checkout</a>
        </div>
      `
      const cartModal = this.shadow.querySelector('.cart-modal');
      this.shadow.addEventListener('click', (event) =>  {
        if (event.target.closest('.cart-button') || event.target.closest('.close-button')) {
          cartModal.classList.toggle('active');
        }
        
      });
    }
  }
  
  customElements.define('cart-component', Cart);