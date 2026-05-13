import './App.css'
import heroImg from './assets/hero.png'

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            width="220"
            height="220"
            alt="AI Design"
          />
        </div>

        <div>
          <h1>Yasnika Grocery</h1>
          <p className="tagline">
            Fresh groceries delivered to your doorstep
          </p>

          <div className="buttons">
            <button>Shop Now</button>
            <button className="secondary">View Offers</button>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Why Choose Us?</h2>

          <ul>
            <li>🥦 Farm fresh vegetables and fruits</li>
            <li>🚚 Fast delivery within minutes</li>
            <li>💳 Secure online payment</li>
            <li>🎁 Daily discounts and combo offers</li>
          </ul>
        </div>

        <div id="social">
          <h2>Featured Categories</h2>

          <ul>
            <li>🛒 Grocery Essentials</li>
            <li>🥛 Dairy Products</li>
            <li>🍪 Snacks & Beverages</li>
            <li>🧴 Personal Care</li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer">
        <h2>Download Our App</h2>
        <p>
          Experience smarter shopping with Yasnika Grocery Store.
        </p>
      </section>
    </>
  )
}

export default App
