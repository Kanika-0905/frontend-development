import './App.css'
import heroImg from './assets/hero.png'

function App() {
  return (
    <>
      {/* HERO SECTION */}
      <section id="center">
        <div className="hero">
          <img
            src={heroImg}
            className="base"
            alt="AI Designer"
          />
        </div>

        <div className="content">
          <h1>Kanika </h1>

          <p className="tagline">
            Create stunning fashion, jewelry, and decor designs
            powered by Artificial Intelligence.
          </p>

          <div className="buttons">
            <button>Start Designing</button>
            <button className="secondary">
              Explore Features
            </button>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      {/* FEATURES */}
      <section id="next-steps">

        <div className="card">
          <h2>👗 Dress Design</h2>

          <p>
            Generate unique outfit ideas with AI-generated
            patterns, colors, and styles.
          </p>

          <ul>
            <li>✨ Trendy fashion templates</li>
            <li>🎨 Smart color suggestions</li>
            <li>📸 AI preview generation</li>
          </ul>
        </div>

        <div className="card">
          <h2>💍 Jewelry Design</h2>

          <p>
            Design elegant jewelry collections with modern
            AI-powered customization tools.
          </p>

          <ul>
            <li>💎 Ring & necklace generator</li>
            <li>🪄 Luxury style presets</li>
            <li>🖌️ Custom material selection</li>
          </ul>
        </div>

        <div className="card">
          <h2>🏡 Decor Design</h2>

          <p>
            Visualize creative home decor ideas and interior
            concepts instantly.
          </p>

          <ul>
            <li>🛋️ Room inspiration</li>
            <li>🌈 Theme customization</li>
            <li>🖼️ AI decor recommendations</li>
          </ul>
        </div>

      </section>

      <div className="ticks"></div>

      {/* STATS SECTION */}
      <section id="stats">

        <div className="stat-box">
          <h2>10K+</h2>
          <p>Designs Generated</p>
        </div>

        <div className="stat-box">
          <h2>5K+</h2>
          <p>Active Users</p>
        </div>

        <div className="stat-box">
          <h2>99%</h2>
          <p>User Satisfaction</p>
        </div>

      </section>

      <div className="ticks"></div>

      {/* FOOTER */}
      <footer id="footer">
        <h2>AI Designer Studio</h2>

        <p>
          Transform your imagination into reality with AI.
        </p>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </>
  )
}

export default App
