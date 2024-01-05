class Faqs extends HTMLElement {

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
      .faqs {
        height: 79vh;
        overflow: auto;
        margin: 1%;
        margin-bottom: 0;
        padding-right: 3%;
      }
      .faqs::-webkit-scrollbar {
        opacity: 0;
        width: 0.5rem;
      }
      .faqs::-webkit-scrollbar-track {
        background: none;
      }
      .faqs::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 5rem;
      }
      .faqs:hover::-webkit-scrollbar-thumb {
        background: var(--secondary-color,rgb(0, 56, 168, 1));
      }
      .faqs details {
        margin: 1% auto;
        background-color: var(--terciary-color);
        border-radius: 1rem;
        box-shadow: var(--shadow);
        cursor: pointer;
        font-size: 1rem;
        text-align: justify;
      }
      .faqs summary {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1% 2%;
        background-color: var(--secondary-color);
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 1rem;
        list-style: none;
      }
      .faqs details[open] summary {
        border-bottom: var(--border);
        border-width: 0.2rem;
        border-radius: 1rem 1rem 0 0;
      }
      .faqs .circle {
        width: 2rem;
        height: 2rem;
        position: relative;
        border: 0.2rem solid var(--terciary-color);
        border-radius: 50%;
      }
      .circle .line {
        width: 70%;
        height: 10%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-color: var(--terciary-color);
        border-radius: 1rem;
      }
      .line:nth-child(2) {
        transform: rotate(90deg);
        transition: transform 0.1s ease-in;
      }
      .faqs details[open] .line:nth-child(2) {
        transform: rotate(0);
        transition: transform 0.1s ease-in;
      }
      .faqs p {
        padding: 1%;
      }
      .faqs details[open] p {
        animation: sweep 0.5s ease-in-out;
      }
      .faqs a {
        color: var(--primary-color);
        font-weight: bold;
        text-decoration: none;
      }
      .faqs a:hover {
        filter: brightness(1.2);
      }
      @keyframes sweep {
        0%    {
          opacity: 0;
          transform: translateX(-1rem);
        }
        100%  {
          opacity: 1;
          transform: translateX(0);
        }
      }
      </style>
      <div class="faqs">
        <details>
          <summary>
            Can the products be returned?
            <div class="circle">
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </summary>
          <p>Yes, you can return a product as long as it has been purchased within 15 days or less.</p>
        </details>
        <details>
          <summary>
            How can I return a product?
            <div class="circle">
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </summary>
          <p>For a product to be returned, you simply need to bring a unicorn's horn.</p>
        </details>
        <details>
          <summary>
            How can I contact the support team?
            <div class="circle">
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </summary>
          <p>If you experience any issues, you can contact the support team calling the <a href="">999 99 99 99</a>.</p>
        </details>
        <details>
          <summary>
            How can I install the games?
            <div class="circle">
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </summary>
          <p>All you have to do is download the game and click on the file .exe.</p>
        </details>
        <details>
          <summary>
            Does Bruno Mars is gay?
            <div class="circle">
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </summary>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil labore, maxime, neque dolores hic, dolore nesciunt laboriosam ex cupiditate quasi fugiat doloribus officia tempore. Deserunt nam libero odio nobis sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut praesentium autem minima quod officia cumque et architecto consectetur nobis omnis sapiente rem, ea consequuntur, magnam aperiam, ipsam impedit exercitationem! At! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere aperiam laboriosam voluptatem maxime laborum reprehenderit voluptatum dolorum, molestiae nihil assumenda dolor voluptates sequi repudiandae quia omnis facilis similique vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi, in necessitatibus, fuga, sed velit fugiat perferendis eligendi saepe eum assumenda quasi eos. Debitis dolor qui, ipsum aspernatur quaerat ea.
            Suscipit sed fugiat, sapiente aliquam nemo id accusamus voluptatem error molestias quaerat quis provident facere animi aut ab recusandae, dolorem veritatis! Eum quae praesentium doloribus fuga officia quia quos libero!
            Consequatur quam perferendis recusandae, cum quisquam architecto voluptatibus reprehenderit ipsam facere modi consequuntur dolores et temporibus hic ducimus pariatur veritatis deserunt! Quam, facilis minima. Optio, rem aliquam. Explicabo, eaque impedit.
            Praesentium, rerum! Ratione accusamus non quia qui natus illum odio reprehenderit amet a sint, aspernatur perferendis id magni, beatae eius modi consequatur repellendus provident. Dolores architecto odio cupiditate ea atque.</p>
        </details>
        <details>
          <summary>
            Is mayonnaise an instrument?
            <div class="circle">
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </summary>
          <p>No, mayonnaise is NOT an instrument.</p>
        </details>
      </div>
      `
    }
  }
  
  customElements.define('faqs-component', Faqs);