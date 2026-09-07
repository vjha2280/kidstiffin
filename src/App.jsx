import { useState } from 'react'
import './App.css'

const MENU = [
  {
    id: 1,
    name: 'Veggie Delight Box',
    description: 'Chapati, sabzi, dal, rice & fruit',
    price: 90,
    age: '4–14 yrs',
    calories: '420 kcal',
    tag: 'Best Seller',
    emoji: '🥗',
    ingredients: ['Wheat chapati', 'Seasonal vegetables', 'Dal tadka', 'Steamed rice', 'Seasonal fruit'],
  },
  {
    id: 2,
    name: 'Protein Power Box',
    description: 'Paneer paratha, curd, sprouts salad & banana',
    price: 110,
    age: '7–14 yrs',
    calories: '510 kcal',
    tag: 'High Protein',
    emoji: '💪',
    ingredients: ['Paneer paratha', 'Curd', 'Mixed sprouts', 'Banana'],
  },
  {
    id: 3,
    name: 'Mini Tiffin',
    description: 'Idli / Upma, coconut chutney & juice',
    price: 75,
    age: '4–8 yrs',
    calories: '320 kcal',
    tag: 'Little Ones',
    emoji: '🍱',
    ingredients: ['Soft idli or upma', 'Coconut chutney', 'Fresh fruit juice'],
  },
  {
    id: 4,
    name: 'Rice & Curry Box',
    description: 'Jeera rice, rajma/chole, raita & salad',
    price: 95,
    age: '7–14 yrs',
    calories: '480 kcal',
    tag: 'Kids Fav',
    emoji: '🍛',
    ingredients: ['Jeera rice', 'Rajma or chole', 'Raita', 'Fresh salad'],
  },
]

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const WEEKLY_MENU = [
  { day: 'Monday', meal: 'Veggie Delight Box', emoji: '🥗' },
  { day: 'Tuesday', meal: 'Protein Power Box', emoji: '💪' },
  { day: 'Wednesday', meal: 'Mini Tiffin', emoji: '🍱' },
  { day: 'Thursday', meal: 'Rice & Curry Box', emoji: '🍛' },
  { day: 'Friday', meal: 'Veggie Delight Box', emoji: '🥗' },
]

const WHATSAPP_NUMBER = '917483555387' // Replace with your number

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-icon">🍱</span>
        <span className="logo-text">KidsTiffin</span>
      </div>
      <div className="nav-links">
        <a href="#menu">Menu</a>
        <a href="#weekly">Weekly Plan</a>
        <a href="#why-us">Why Us</a>
        <a href="#order" className="nav-cta">Order Now</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">🌿 100% Homestyle • No Preservatives</div>
        <h1>Healthy Tiffin for<br /><span className="highlight">Your Little Stars</span></h1>
        <p className="hero-sub">
          Fresh, nutritious, home-style lunch boxes delivered every morning —
          so your child eats well and you save time!
        </p>
        <div className="hero-actions">
          <a href="#order" className="btn-primary">Order Today's Tiffin</a>
          <a href="#menu" className="btn-secondary">View Menu</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><strong>500+</strong><span>Happy Kids</span></div>
          <div className="stat"><strong>No</strong><span>Preservatives</span></div>
          <div className="stat"><strong>7am</strong><span>Delivered By</span></div>
        </div>
      </div>
      <div className="hero-image">🍱</div>
    </section>
  )
}

function MenuCard({ item, onOrder }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="menu-card">
      <div className="card-top">
        <span className="card-emoji">{item.emoji}</span>
        <span className="card-tag">{item.tag}</span>
      </div>
      <h3>{item.name}</h3>
      <p className="card-desc">{item.description}</p>
      <div className="card-meta">
        <span>👶 {item.age}</span>
        <span>🔥 {item.calories}</span>
      </div>
      <button className="ingredients-toggle" onClick={() => setExpanded(!expanded)}>
        {expanded ? '▲ Hide ingredients' : '▼ See ingredients'}
      </button>
      {expanded && (
        <ul className="ingredients-list">
          {item.ingredients.map((ing, i) => <li key={i}>✅ {ing}</li>)}
        </ul>
      )}
      <div className="card-footer">
        <span className="price">₹{item.price}</span>
        <button className="btn-order" onClick={() => onOrder(item)}>Order via WhatsApp</button>
      </div>
    </div>
  )
}

function Menu({ onOrder }) {
  return (
    <section id="menu" className="section">
      <h2 className="section-title">Today's Menu</h2>
      <p className="section-sub">Fresh, balanced meals prepared with care every morning</p>
      <div className="menu-grid">
        {MENU.map(item => <MenuCard key={item.id} item={item} onOrder={onOrder} />)}
      </div>
    </section>
  )
}

function WeeklyPlan() {
  return (
    <section id="weekly" className="section section-alt">
      <h2 className="section-title">This Week's Plan</h2>
      <p className="section-sub">Rotated weekly so your child always looks forward to lunch</p>
      <div className="weekly-grid">
        {WEEKLY_MENU.map((item, i) => (
          <div className="weekly-card" key={i}>
            <div className="weekly-day">{item.day}</div>
            <div className="weekly-emoji">{item.emoji}</div>
            <div className="weekly-meal">{item.meal}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhyUs() {
  const points = [
    { icon: '🥦', title: 'Nutritionist Approved', desc: 'Every meal is balanced for growing kids — right carbs, protein & vitamins.' },
    { icon: '🚫', title: 'No Junk. Ever.', desc: 'Zero preservatives, artificial colors, or unhealthy oils. Promise.' },
    { icon: '⏰', title: 'Delivered by 7 AM', desc: 'Fresh tiffin at your door before school rush — no morning stress.' },
    { icon: '📸', title: 'Meal Photo Before Dispatch', desc: 'We send you a photo of your child\'s tiffin before it leaves our kitchen.' },
    { icon: '♻️', title: 'Eco-Friendly Packing', desc: 'Stainless steel boxes & sustainable packaging. Safe for kids & planet.' },
    { icon: '💬', title: 'WhatsApp Support', desc: 'Questions? Changes? Just message us. We reply within minutes.' },
  ]
  return (
    <section id="why-us" className="section">
      <h2 className="section-title">Why Moms Love KidsTiffin</h2>
      <p className="section-sub">We understand what matters most to you</p>
      <div className="why-grid">
        {points.map((p, i) => (
          <div className="why-card" key={i}>
            <span className="why-icon">{p.icon}</span>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function OrderSection({ onOrder }) {
  const [form, setForm] = useState({ name: '', child: '', age: '', address: '', plan: 'daily', meal: MENU[0].name })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hi KidsTiffin! 🍱\n\nNew Order:\nParent: ${form.name}\nChild: ${form.child} (Age: ${form.age})\nMeal: ${form.meal}\nPlan: ${form.plan}\nAddress: ${form.address}\n\nPlease confirm my order!`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="order" className="section section-alt">
      <h2 className="section-title">Place Your Order</h2>
      <p className="section-sub">Takes 2 minutes — we'll confirm on WhatsApp</p>
      {submitted ? (
        <div className="success-box">
          <div className="success-icon">🎉</div>
          <h3>Order sent on WhatsApp!</h3>
          <p>We'll confirm your tiffin within 15 minutes.</p>
          <button className="btn-primary" onClick={() => setSubmitted(false)}>Place Another Order</button>
        </div>
      ) : (
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name (Mom/Dad)</label>
              <input required placeholder="e.g. Priya Sharma" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Child's Name</label>
              <input required placeholder="e.g. Aryan" value={form.child} onChange={e => setForm({ ...form, child: e.target.value })} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Child's Age</label>
              <input required placeholder="e.g. 8 years" value={form.age} onChange={e => setForm({ ...form, age: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Choose Meal</label>
              <select value={form.meal} onChange={e => setForm({ ...form, meal: e.target.value })}>
                {MENU.map(m => <option key={m.id}>{m.name} — ₹{m.price}</option>)}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Plan</label>
              <select value={form.plan} onChange={e => setForm({ ...form, plan: e.target.value })}>
                <option value="daily">Daily (₹90–110/day)</option>
                <option value="weekly">Weekly (₹450–550)</option>
                <option value="monthly">Monthly (₹1599–1899)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Delivery Address</label>
              <input required placeholder="Your home address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
            </div>
          </div>
          <button type="submit" className="btn-submit">📲 Send Order on WhatsApp</button>
        </form>
      )}
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">🍱 KidsTiffin</div>
      <p>Healthy • Safe • Delicious — Every Single Day</p>
      <p className="footer-contact">
        📞 <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">Chat with us on WhatsApp</a>
      </p>
      <p className="footer-copy">© 2024 KidsTiffin. Made with ❤️ for little tummies.</p>
    </footer>
  )
}

export default function App() {
  const handleOrder = (item) => {
    const msg = `Hi KidsTiffin! 🍱\nI'd like to order: ${item.name} (₹${item.price})\nPlease let me know availability!`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Menu onOrder={handleOrder} />
      <WeeklyPlan />
      <WhyUs />
      <OrderSection onOrder={handleOrder} />
      <Footer />
    </div>
  )
}
