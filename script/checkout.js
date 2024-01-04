class Checkout extends HTMLElement {

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
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        button {
          background: none;
          border: none;
          cursor: pointer;
          font: inherit;
        }
        button:hover {
          transform: scale(1.1);
        }
        .checkout {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          margin: 2%;
        }
        .product-summary {
          width: 40%;
          height: 70vh;
          overflow: hidden;
          background: var(--terciary-color, rgb(33, 136, 192)) var(--gradient, linear-gradient(0deg, rgba(200,200,200,0.1) 0%, rgba(50,50,50,0.1) 100%));
          border-radius: 1rem;
          box-shadow: var(--shadow, 0.5rem 0.5rem 0 0 rgba(0, 0, 0, 0.2));
          font-size: 1.5rem;
        }
        .product-list {
          height: 90%;
          overflow: auto;
          margin: 1%;
          padding-right: 2%;
        }
        header {
          display: flex;
          justify-content: space-between;
          padding: 1% 5%;
          color: var(--white, white);
          background-color: var(--primary-color, rgb(24, 80, 111));
          border-bottom: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
          border-width: 0.3rem;
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
          right: 5%;
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
          width: 7rem;
          height: 7rem;
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
        .total-payment {
          width: 30%;
          padding: 1% 2%;
          background-color: var(--secondary-color, rgb(24, 80, 111));
          color: var(--white, white);
          border-radius: 1rem;
          box-shadow: var(--shadow, 0.5rem 0.5rem 0 0 rgba(0, 0, 0, 0.2));
          font-size: 1.2rem;
        }
        .payment-button {
          width: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3%;
          margin: 3% auto;
          background-color: var(--yellow, yellow);
          border: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
          border-width: 0.3rem;
          border-radius: 0.5rem;
          font-size: 1.5rem;
        }
        .stripe-icon {
          width: 1.5rem;
          border-radius: 0.2rem;
        }
        .total-container {
          display: flex;
          justify-content: space-between;
          margin: 3% 0;
        }
        .total-price {
          font-size: 1.5rem;
          font-weight: bold;
        }
      </style>
      <div class="checkout">
        <div class="product-summary">
          <header>
            <h3>Shopping cart</h3>
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
        </div>
        <div class="total-payment">
          <button class="payment-button"><img class="stripe-icon" src="img/stripe-icon.svg">Pay with Stripe</button>
          <p class="quantity-total">5 products</p>
          <div class="total-container">
            <p>Total:</p>
            <p class="total-price">100€</p>
          </div>
        </div>
      </div>
      `
    }
  }
  
  customElements.define('checkout-component', Checkout);