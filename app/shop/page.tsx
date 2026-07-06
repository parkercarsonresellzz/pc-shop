export default function Shop() {
  return (
    <main className="shop-page">

      <a href="/" className="back-arrow">
        ← Home
      </a>

      <h1>
        P.C SELLS SHOP
      </h1>

      <p>
        Choose your vendor category.
      </p>


      <div className="products">


        {/* Hoodie Vendor */}
        <div className="card">

          <div className="vendor-icon">
            <svg viewBox="0 0 300 300">

              <path d="
              M105 75 
              C105 40 195 40 195 75
              L230 105
              L205 145
              L185 125
              V245
              H115
              V125
              L95 145
              L70 105
              Z"/>

              <path d="
              M105 75
              C125 105 175 105 195 75"/>

              <path d="
              M115 150 H185"/>

            </svg>
          </div>


          <h2>
            Hoodies
          </h2>

          <p>
            Premium hoodie and clothing supplies.
          </p>

          <button>
            Shop Now
          </button>

        </div>




        {/* Cologne Vendor */}
        <div className="card">

          <div className="vendor-icon">
            <svg viewBox="0 0 300 300">

              <path d="
              M125 55
              H175
              V85
              H195
              V230
              H105
              V85
              H125
              Z"/>

              <path d="
              M105 125 H195"/>

              <path d="
              M130 165 H170"/>

            </svg>
          </div>


          <h2>
            Colognes
          </h2>

          <p>
            Premium fragrances supplies.
          </p>

          <button>
            Shop Now
          </button>

        </div>




        {/* Shoe Vendor */}
        <div className="card">

          <div className="vendor-icon">
           <svg viewBox="0 0 300 300">

  <path d="
  M55 165
  C95 165 130 135 160 105
  C180 120 190 145 215 155
  C235 165 250 180 260 205
  H55
  C40 205 40 165 55 165Z"/>

  <path d="
  M160 105
  C185 130 190 155 215 155"/>

  <path d="
  M85 165
  C120 165 145 150 170 130"/>

  <path d="
  M75 205 H260"/>

</svg>
          </div>


          <h2>
            Shoes
          </h2>

          <p>
            Sneaker supplies and collections.
          </p>

          <button>
            Shop Now
          </button>

        </div>




        {/* Purse Vendor */}
        <div className="card">

          <div className="vendor-icon">
            <svg viewBox="0 0 300 300">

              <rect 
                x="75" 
                y="105" 
                width="150" 
                height="120" 
                rx="20"
              />

              <path d="
              M115 105
              C115 45 185 45 185 105"/>

              <path d="
              M110 160 H190"/>

              <circle 
                cx="150" 
                cy="160" 
                r="8"
              />

            </svg>
          </div>


          <h2>
            Purses
          </h2>

          <p>
            Luxury bag supplies.
          </p>

          <button>
            Shop Now
          </button>

        </div>


      </div>

    </main>
  );
}