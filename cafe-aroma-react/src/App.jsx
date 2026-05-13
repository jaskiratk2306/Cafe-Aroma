import './App.css';

function App() {

  const menu = [

    {
      name: 'Cappuccino',
      desc: 'Perfect blend of espresso, steamed milk and foam.',
      price: '₹120',
      image:
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
    },

    {
      name: 'Latte',
      desc: 'Smooth espresso with creamy milk texture.',
      price: '₹140',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
    },

    {
      name: 'Mocha',
      desc: 'Rich espresso with chocolate goodness.',
      price: '₹160',
      image:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
    },

  ];

  return (

    <div>

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          ☕ Café Aroma
        </div>

        <ul>

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#menu">Menu</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>


      {/* Hero Section */}

      <section className="hero" id="home">

        <div className="overlay">

          <h1>
            Freshly Brewed Happiness
          </h1>

          <p>
            Experience handcrafted coffee and cozy café vibes.
          </p>

          <button>
            Explore Menu
          </button>

        </div>

      </section>


      {/* About */}

      <section className="about" id="about">

        <div className="section-title">

          <span></span>

          <h2>
            About Café Aroma
          </h2>

          <span></span>

        </div>

        <p>
          Café Aroma is a modern coffee destination serving freshly brewed coffee,
          delicious desserts, and warm experiences in every cup.
        </p>


        <div className="features">

          <div className="feature-card">

            <div className="icon">
              ☕
            </div>

            <h3>
              Quality Beans
            </h3>

            <p>
              Premium & Fresh
            </p>

          </div>


          <div className="feature-card">

            <div className="icon">
              👨‍🍳
            </div>

            <h3>
              Expert Baristas
            </h3>

            <p>
              Skilled & Passionate
            </p>

          </div>


          <div className="feature-card">

            <div className="icon">
              🌿
            </div>

            <h3>
              Cozy Ambience
            </h3>

            <p>
              Relax & Unwind
            </p>

          </div>


          <div className="feature-card">

            <div className="icon">
              ❤️
            </div>

            <h3>
              Made with Love
            </h3>

            <p>
              In Every Cup
            </p>

          </div>

        </div>

      </section>


      {/* Menu */}

      <section className="menu" id="menu">

        <div className="section-title">

          <span></span>

          <h2>
            Our Menu
          </h2>

          <span></span>

        </div>


        <div className="menu-container">

          {menu.map((item, index) => (

            <div className="menu-card" key={index}>

              <img src={item.image} alt={item.name} />

              <div className="menu-content">

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.desc}
                </p>

                <span>
                  {item.price}
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Contact */}

      <section className="contact" id="contact">

        <h2>
          Contact Us
        </h2>

        <div className="contact-box">

          <p>
            📍 Chandigarh, India
          </p>

          <p>
            📞 +91 98765 43210
          </p>

          <p>
            ✉ cafearoma@email.com
          </p>

        </div>

      </section>


      {/* Footer */}

      <footer>

        <p>
          © 2026 Café Aroma | All Rights Reserved
        </p>

      </footer>

    </div>

  );
}

export default App;