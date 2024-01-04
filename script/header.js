class Header extends HTMLElement {

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
        header {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0;
          background: var(--primary-color, rgb(24, 80, 111)) var(--gradient, linear-gradient(0deg, rgba(200,200,200,0.1) 0%, rgba(50,50,50,0.1) 100%));
          color: var(--white, white);
          border-bottom: var(--border, 0.5rem solid rgba(0, 0, 0, 0.2));
        }
        .logo {
          justify-self: flex-start;
          width: 7rem;
          margin: 1%;
        }
        .logo img {
          width: 100%;
        }
        .logo:hover {
          transform: scale(1.1);
        }
        .title {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
        }
        .title span {
          color: var(--terciary-color, rgb(60, 156, 208));
        }
        button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 10%;
          border-radius: 1rem;
        }
        button:hover {
          background: rgb(0,0,0,0.1);
          transform: scale(1.1);
        }
        .buttons {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          gap: 20%;
          margin: 0 3%;
        }
        .user-button {
          display: flex;
          align-items: flex-end;
        }
        .user-button .arrow {
          width: 1.5rem
        }
        .buttons svg {
          width: 3rem;
        }
      </style>
      <header>
        <a class="logo" href="index.html"><img src="img/logo.svg" alt="logo" title="logo"></a>
        <h1 class="title">JC Game<span>Shop</span></h1>
        <div class="buttons">
          <cart-component></cart-component>
          <button class="user-button">
            <svg class="user-icon" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M200 207.04C217.538 207.055 235.349 212.193 250.926 216.687C263.044 220.182 273.809 223.288 282.041 223.288C340.05 223.288 374.598 16 328.965 16C314.124 16 306.778 24.7977 297.684 35.6884C282.918 53.3714 263.545 76.5723 200 76.5908C136.456 76.5723 117.082 53.3714 102.316 35.6884C93.2222 24.7977 85.8758 16 71.0346 16C25.4019 16 59.9503 223.288 117.959 223.288C126.191 223.288 136.956 220.182 149.074 216.687C164.651 212.193 182.462 207.055 200 207.04ZM283.331 175.425C288.643 175.425 292.95 171.118 292.95 165.805L292.95 158.532L300.223 158.532C305.536 158.532 309.843 154.225 309.843 148.913C309.843 143.6 305.536 139.293 300.223 139.293L292.95 139.293L292.95 132.02C292.95 126.707 288.643 122.401 283.331 122.401C278.018 122.401 273.711 126.707 273.711 132.02L273.711 139.293L266.438 139.293C261.125 139.293 256.818 143.6 256.818 148.913C256.818 154.225 261.125 158.532 266.438 158.532L273.711 158.532L273.711 165.805C273.711 171.118 278.018 175.425 283.331 175.425ZM126.897 158.65C119.544 158.65 113.582 164.611 113.582 171.964C113.582 179.318 119.544 185.279 126.897 185.279C134.251 185.279 140.212 179.318 140.212 171.964C140.212 164.611 134.251 158.65 126.897 158.65ZM137.044 148.854C137.044 141.501 143.006 135.539 150.359 135.539C157.713 135.539 163.674 141.501 163.674 148.854C163.674 156.208 157.713 162.169 150.359 162.169C143.006 162.169 137.044 156.208 137.044 148.854ZM126.897 112.664C119.544 112.664 113.582 118.625 113.582 125.979C113.582 133.332 119.544 139.293 126.897 139.293C134.251 139.293 140.212 133.332 140.212 125.979C140.212 118.625 134.251 112.664 126.897 112.664ZM90.4721 148.854C90.4721 141.501 96.4333 135.539 103.787 135.539C111.14 135.539 117.102 141.501 117.102 148.854C117.102 156.208 111.14 162.169 103.787 162.169C96.4333 162.169 90.4721 156.208 90.4721 148.854ZM188.384 190.41C187.715 188.795 187.371 187.063 187.371 185.315L200.685 185.315L214 185.315C214 187.063 213.656 188.795 212.986 190.41C212.317 192.026 211.337 193.493 210.1 194.73C208.864 195.966 207.396 196.947 205.781 197.616C204.165 198.285 202.434 198.63 200.685 198.63C198.937 198.63 197.205 198.285 195.59 197.616C193.975 196.947 192.507 195.966 191.27 194.73C190.034 193.493 189.053 192.026 188.384 190.41Z" fill="#3C9CD0"/>
              <path d="M309 383C309 342.422 297.463 303.506 276.928 274.813C256.393 246.12 228.541 230 199.5 230C170.459 230 142.607 246.12 122.072 274.813C101.537 303.506 90 342.422 90 383L309 383Z" fill="#3C9CD0"/>
            </svg>
            <svg class="arrow" viewBox="0 0 249 190" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.21366 2.79046C16.0614 -2.36357 26.6013 -0.179932 31.7554 7.66776L17.5459 17L3.33635 26.3322C-1.81768 18.4845 0.365967 7.94449 8.21366 2.79046ZM119.817 138.876C95.1832 103.686 71.5016 67.8175 47.8028 31.9952C42.972 24.6931 38.9583 18.6085 36.153 14.3505C34.7505 12.2215 33.6501 10.5494 32.9008 9.41018C32.5262 8.84058 32.2393 8.40423 32.0464 8.11065L31.7564 7.66927C31.7564 7.66927 31.7554 7.66776 17.5459 17C3.33635 26.3322 3.33771 26.3342 3.33771 26.3342L3.63343 26.7843C3.82846 27.081 4.11747 27.5207 4.49433 28.0937C5.24805 29.2396 6.35322 30.919 7.76091 33.0557C10.5762 37.329 14.6019 43.4319 19.4465 50.7547C43.3097 86.8256 67.1588 122.94 91.9632 158.374C97.1133 165.731 101.632 172.036 105.063 176.564C106.747 178.787 108.361 180.836 109.751 182.429C110.406 183.178 111.329 184.195 112.384 185.151C112.885 185.605 113.818 186.416 115.066 187.213C115.081 187.223 115.098 187.234 115.117 187.246C115.834 187.707 119.401 190 124.5 190C129.599 190 133.166 187.707 133.883 187.246C133.902 187.234 133.919 187.223 133.934 187.213C135.182 186.416 136.115 185.605 136.616 185.151C137.672 184.195 138.594 183.178 139.249 182.429C140.639 180.836 142.253 178.787 143.937 176.564C147.368 172.036 151.887 165.731 157.037 158.374C181.841 122.94 205.69 86.8255 229.554 50.7547C234.398 43.4319 238.424 37.329 241.239 33.0557C242.647 30.919 243.752 29.2396 244.506 28.0937C244.883 27.5207 245.172 27.081 245.367 26.7843L245.662 26.3342C245.662 26.3342 245.664 26.3322 231.454 17L245.664 26.3322C250.818 18.4845 248.634 7.94449 240.786 2.79046C232.939 -2.36357 222.399 -0.17993 217.245 7.66776L231.454 17C217.245 7.66776 217.244 7.66927 217.244 7.66927L216.954 8.11066C216.761 8.40423 216.474 8.84058 216.099 9.41018C215.35 10.5494 214.25 12.2215 212.847 14.3505C210.042 18.6085 206.028 24.6931 201.197 31.9952C177.498 67.8175 153.817 103.686 129.183 138.876C124.419 145.682 124.581 145.682 119.817 138.876Z" fill="#3C9CD0"/>
            </svg>
          </button>
        </div>
      </header>
      `
    }
  }
  
  customElements.define('header-component', Header);