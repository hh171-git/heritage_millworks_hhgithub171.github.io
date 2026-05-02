import React, { useState, useEffect, useCallback } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useRef } from 'react';

/* ═══════════════════════════════════════════════════════════════
   1. NAVIGATION DATA
   ═══════════════════════════════════════════════════════════════ */
const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  {
    id: 'custom_cabinetry',
    label: 'Custom Cabinetry',
    isDropdown: true,
    children: [
      { id: 'kitchen-cabinets', label: 'Kitchen cabinets' },
      { id: 'bathroom-vanities', label: 'Bathroom vanities' },
      { id: 'bookcases', label: 'Bookcases' },
      { id: 'entertainment-centers', label: 'Entertainment centers' },
      { id: 'fireplace-mantles', label: 'Fireplace mantles' },
    ]
  },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact Us' },
];

/* ═══════════════════════════════════════════════════════════════
   2. LIGHTBOX & GALLERY GRID
   (Re-used for future new images)
   ═══════════════════════════════════════════════════════════════ */
function Lightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [loading, setLoading] = useState(true);

  if (!images || images.length === 0) return null;

  const total = images.length;
  const current = images[index];

  const goNext = useCallback(() => setIndex(i => (i + 1) % total), [total]);
  const goPrev = useCallback(() => setIndex(i => (i - 1 + total) % total), [total]);

  useEffect(() => { setLoading(true); }, [index]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, goNext, goPrev]);

  return (
    <div id="lightboxOverlay" onClick={onClose}>
      <div id="lightbox" onClick={e => e.stopPropagation()}>
        <div className="lb-outerContainer">
          <div className="lb-container">
            {loading && (
              <div className="lb-loader">
                <span>Loading...</span>
              </div>
            )}
            <img
              src={current.src}
              alt={current.alt || ''}
              style={{ display: loading ? 'none' : 'block' }}
              onLoad={() => setLoading(false)}
            />
            <div className="lb-nav">
              <button className="lb-prev" aria-label="Previous image" onClick={(e) => { e.preventDefault(); goPrev(); }} />
              <button className="lb-next" aria-label="Next image" onClick={(e) => { e.preventDefault(); goNext(); }} />
            </div>
          </div>
          <div className="lb-dataContainer">
            <div className="lb-data">
              <div className="lb-details">
                <span className="lb-number">{index + 1} / {total}</span>
              </div>
              <div className="lb-close">
                <button aria-label="Close lightbox" onClick={(e) => { e.preventDefault(); onClose(); }}>X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryGrid({ images, embedded }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!images || images.length === 0) {
    return <p><em>Images coming soon...</em></p>;
  }

  return (
    <div>
      <div className={`gallery${embedded ? ' embedded' : ''}`}>
        {images.map((img, i) => (
          <a
            key={img.id}
            href={img.src}
            onClick={e => { e.preventDefault(); setLightboxIndex(i); }}
          >
            <img src={img.thumb} alt={img.alt} />
          </a>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}


/* Header logic has been merged into the Navigation bar below */

function PreFooter({ onNavigate }) {
  const usefulLinks = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <section className="pre-footer">
      <div className="pre-footer-inner">

        {/* Column 1 – Logo + tagline */}
        <div className="pf-col pf-col--brand">
          <div className="pf-logo-wrap">
            <img src="/images/tree-logo.gif" alt="Heritage Wood Co. Logo" className="pf-logo" />
            <span className="pf-brand-name">HERITAGE WOOD CO.</span>
          </div>
          <p className="pf-tagline">
            Handcrafted custom cabinetry &amp; millwork built with pride in Guys Mills, PA.
          </p>
        </div>

        {/* Column 2 – Office details */}
        <div className="pf-col">
          <h4 className="pf-heading">Our Office</h4>
          <ul className="pf-list">
            <li>
              <span className="pf-icon">📍</span>
              9436 State Hwy 198<br />Guys Mills, PA 16327
            </li>
            <li>
              <span className="pf-icon">📞</span>
              <a href="tel:814-853-0323">814-853-0323</a>
            </li>
            <li>
              <span className="pf-icon">✉️</span>
              <a href="mailto:heritagemillworks@windstream.net">heritagemillworks@windstream.net</a>
            </li>
            <li>
              <span className="pf-icon">🕐</span>
              Mon – Fri: 8:00 AM – 5:00 PM<br />Saturdays: By appointment
            </li>
          </ul>
        </div>

        {/* Column 3 – Useful links */}
        <div className="pf-col">
          <h4 className="pf-heading">Useful Links</h4>
          <ul className="pf-list pf-links">
            {usefulLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={e => { e.preventDefault(); onNavigate(link.id); }}
                >
                  <span className="pf-arrow">›</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 – Follow us */}
        <div className="pf-col">
          <h4 className="pf-heading">Follow Us</h4>
          <ul className="pf-list pf-social">
            <li>
              <a
                href="https://www.facebook.com/people/Heritage-Millworks/100063615707566/"
                target="_blank"
                rel="noopener noreferrer"
                className="pf-social-link"
              >
                <svg className="pf-fb-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z"/>
                </svg>
                Facebook
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>&copy; {year} Heritage Wood Co. All rights reserved.</p>
        <p>9436 State Hwy 198 | Guys Mills, PA 16327 | 814-853-0323</p>
      </div>
    </footer>
  );
}


/* ═══════════════════════════════════════════════════════════════
   4. NAVIGATION (with dropdown)
   ═══════════════════════════════════════════════════════════════ */
function Nav({ currentPage, onNavigate }) {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <div className="nav-brand">
          <img src="/images/tree-logo.gif" alt="Heritage Wood Co. Logo" className="nav-logo" />
          <span className="logo-text">HERITAGE WOOD CO.</span>
        </div>
        <ul className="nav-menu">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id || (item.children && item.children.some(child => child.id === currentPage));

            if (item.isDropdown) {
              return (
                <li key={item.id} className={`nav-item dropdown ${isActive ? 'active' : ''}`}>
                  <span className="nav-link dropdown-toggle">{item.label}</span>
                  <ul className="dropdown-menu">
                    {item.children.map(child => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          className={`dropdown-item ${currentPage === child.id ? 'active' : ''}`}
                          onClick={(e) => { e.preventDefault(); onNavigate(child.id); }}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={item.id} className={`nav-item ${isActive ? 'active' : ''}`}>
                <a
                  href={`#${item.id}`}
                  className="nav-link"
                  onClick={e => { e.preventDefault(); onNavigate(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}


/* ═══════════════════════════════════════════════════════════════
   5. BREADCRUMB
   ═══════════════════════════════════════════════════════════════ */
function Breadcrumb({ label, onNavigate }) {
  return (
    <div className="breadcrumb">
      <a href="#home" onClick={e => { e.preventDefault(); onNavigate('home'); }}>Home</a>
      <span className="separator"> &gt; </span>
      <span className="current">{label}</span>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   6. PAGE COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

function Testimonials() {
  const reviews = [
    {
      text: "Heritage Wood Co. did an absolutely beautiful job on our mantel. The craftsmanship is outstanding and they were a pleasure to work with from start to finish.",
      author: "Jane D."
    },
    {
      text: "We had custom trim work done throughout our entire home. The attention to detail was incredible. Highly recommend Heritage Wood Co. to anyone looking for quality woodwork.",
      author: "Mark S."
    },
    {
      text: "From the first phone call to the final installation, everything was handled professionally. The finished product exceeded our expectations.",
      author: "Linda K."
    },
    {
      text: "The team at Heritage Wood Co. brought our vision to life. Beautiful custom work and great communication throughout the whole process.",
      author: "Tom & Carol B."
    },
    {
      text: "We couldn't be happier with our new custom mantel. The quality of the wood and the craftsmanship is second to none. Will absolutely use them again.",
      author: "Rick M."
    },
    {
      text: "Exceptional quality and service. Heritage Wood Co. transformed our living room with a stunning custom bookcase. We get compliments on it constantly.",
      author: "Susan W."
    },
  ];

  const n = reviews.length;
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [offset, setOffset] = useState(0); // pixel offset for animation
  const trackRef = useRef(null);

  const VISIBLE = 3;

  // Get card at position relative to current index
  const getReview = (i) => reviews[(i + n) % n];

  // Cards rendered: one before, VISIBLE visible, one after = VISIBLE + 2 total
  // Track starts translated so the "before" card is hidden to the left
  const cardWidthPercent = 100 / VISIBLE; // each card = 1/3 of wrapper

  const slide = (dir) => {
    if (sliding) return;
    setSliding(true);

    // Get the pixel width of one card
    const wrapper = trackRef.current?.parentElement;
    const cardWidth = wrapper ? wrapper.offsetWidth / VISIBLE : 0;

    // Animate out
    setOffset(dir === 'right' ? -cardWidth : cardWidth);

    setTimeout(() => {
      // Update index without animation
      setIndex((prev) => (dir === 'right' ? (prev + 1) % n : (prev - 1 + n) % n));
      // Snap back instantly (no transition)
      setOffset(0);
      setSliding(false);
    }, 400);
  };

  // Cards to render: index-1, index, index+1, index+2, index+3
  // We show index through index+2, with index-1 hidden left and index+3 hidden right
  const cards = [-1, 0, 1, 2, 3].map((o) => getReview(index + o));

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-heading">What Our Customers Are Saying</h2>

        <div className="testimonials-carousel">
          <button
            className="carousel-arrow"
            onClick={() => slide('left')}
            aria-label="Previous review"
          >
            &#8249;
          </button>

          <div className="testimonials-wrapper">
            <div
              ref={trackRef}
              className="testimonials-track"
              style={{
                transform: `translateX(calc(-${cardWidthPercent}% + ${offset}px))`,
                transition: sliding ? 'transform 0.4s ease' : 'none',
              }}
            >
              {cards.map((review, i) => (
                <div
                  className="testimonial-card"
                  key={i}
                  style={{ flex: `0 0 calc(${cardWidthPercent}% - 1rem)` }}
                >
                  <div className="testimonial-quote">&ldquo;</div>
                  <p className="testimonial-text">{review.text}</p>
                  <p className="testimonial-author">{review.author}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-arrow"
            onClick={() => slide('right')}
            aria-label="Next review"
          >
            &#8250;
          </button>
        </div>

        <div className="testimonial-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === index ? 'testimonial-dot--active' : ''}`}
              onClick={() => {
                if (sliding) return;
                const dir = i > index ? 'right' : 'left';
                slide(dir);
                setTimeout(() => setIndex(i), 410);
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ContactModal({ isOpen, onClose }) {
  const [state, handleSubmit] = useForm('xeevvzkp');

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {state.succeeded ? (
          <p className="form-success">Thanks for reaching out! We'll be in touch soon.</p>
        ) : (
          <>
            <h2>Reach Out To Us</h2>
            <form onSubmit={handleSubmit} noValidate>

              <div className="form-group">
                <label htmlFor="modal-name">Name *</label>
                <input id="modal-name" type="text" name="name" placeholder="Your name" required />
                <ValidationError field="name" errors={state.errors} className="form-error" />
              </div>

              <div className="form-group">
                <label htmlFor="modal-email">Email *</label>
                <input id="modal-email" type="email" name="email" placeholder="your@email.com" required />
                <ValidationError field="email" errors={state.errors} className="form-error" />
              </div>

              <div className="form-group">
                <label htmlFor="modal-phone">Phone</label>
                <input id="modal-phone" type="tel" name="phone" placeholder="(814) 000-0000" />
                <ValidationError field="phone" errors={state.errors} className="form-error" />
              </div>

              <div className="form-group">
                <label htmlFor="modal-service">Service Type</label>
                <select id="modal-service" name="service">
                  <option value="">-- Select a Service --</option>
                  <option value="kitchen-cabinets">Kitchen Cabinets</option>
                  <option value="bathroom-vanities">Bathroom Vanities</option>
                  <option value="bookcases">Bookcases</option>
                  <option value="entertainment-centers">Entertainment Centers</option>
                  <option value="fireplace-mantles">Fireplace Mantles</option>
                </select>
                <ValidationError field="service" errors={state.errors} className="form-error" />
              </div>

              <div className="form-group">
                <label htmlFor="modal-message">Message *</label>
                <textarea id="modal-message" name="message" rows={5} placeholder="Tell us what you're looking for..." required />
                <ValidationError field="message" errors={state.errors} className="form-error" />
              </div>

              <button type="submit" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </>
        )}
      </div>
    </div>
  );
}

function HomePage({ onNavigate }) {
  const heroImages = [
    'images/fkitchen1.jpg.avif',
    'images/fkitchen2.jpg.avif',
    'images/fkitchen3.jpg',
    'images/fkitchen4.jpg.avif',
    'images/fkitchen5.jpg.avif',
    'images/fkitchen8.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        setPrevImage(prev);
        return (prev + 1) % heroImages.length;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToImage = (index) => {
    setPrevImage(currentImage);
    setCurrentImage(index);
  };

  return (
    <div className="page-content home-page">
      <section className="hero-section">

        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentImage
                ? 'hero-slide--active'
                : index === prevImage
                ? 'hero-slide--exit'
                : ''
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Top-left: main heading + portfolio link */}
        <div className="hero-content">
          <h2>A Commitment to Quality</h2>
          <button className="hero-link-btn" onClick={() => onNavigate('portfolio')}>
            See More of our Work
            <span className="hero-link-arrow">→</span>
          </button>
        </div>

        {/* Bottom-right: Reach Out To Us button */}
        <button className="hero-cta-btn" onClick={() => setModalOpen(true)}>
          Reach Out To Us
          <span className="hero-link-arrow">→</span>
        </button>

        {/* Dot navigation */}
        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentImage ? 'hero-dot--active' : ''}`}
              onClick={() => goToImage(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Heritage Wood Co.</h2>
          <p>
            We are a fully custom cabinet shop, which offers you a myriad of options and possibilities for your
            building project. We take pride in our workmanship and go to great lengths to ensure that
            each product is of the highest quality and that it meets or exceeds your expectations.
          </p>
        </div>
      </section>

      <section className="our-work-section">
        <div className="container">
          <p className="section-subtitle" style={{ textAlign: 'center' }}>Our Services</p>
          {/* Top row — 3 cards */}
          <div className="work-grid work-grid-top">
            <div className="work-card" onClick={(e) => { e.preventDefault(); onNavigate('kitchen-cabinets'); }}>
              <div className="work-card-img">
                <img src="/images/fkitchen9.jpg" alt="Kitchen Cabinets" />
              </div>
              <div className="work-card-bottom">
                <span className="work-card-title">Kitchen Cabinets</span>
                <span className="work-card-arrow">&#10230;</span>
              </div>
            </div>

            <div className="work-card" onClick={(e) => { e.preventDefault(); onNavigate('bathroom-vanities'); }}>
              <div className="work-card-img">
                <img src="/images/fvanitie1.jpg.avif" alt="Bathroom Vanities" />
              </div>
              <div className="work-card-bottom">
                <span className="work-card-title">Bathroom Vanities</span>
                <span className="work-card-arrow">&#10230;</span>
              </div>
            </div>

            <div className="work-card" onClick={(e) => { e.preventDefault(); onNavigate('bookcases'); }}>
              <div className="work-card-img">
                <img src="/images/fbookcase1.jpg.webp" alt="Bookcases" />
              </div>
              <div className="work-card-bottom">
                <span className="work-card-title">Bookcases</span>
                <span className="work-card-arrow">&#10230;</span>
              </div>
            </div>
          </div>

          {/* Bottom row — 2 cards, gap pinned to center */}
          <div className="work-grid work-grid-bottom">
            <div className="work-card" onClick={(e) => { e.preventDefault(); onNavigate('entertainment-centers'); }}>
              <div className="work-card-img">
                <img src="/images/fentertainmentcenter1.jpg.avif" alt="Entertainment Centers" />
              </div>
              <div className="work-card-bottom">
                <span className="work-card-title">Entertainment Centers</span>
                <span className="work-card-arrow">&#10230;</span>
              </div>
            </div>

            <div className="work-card" onClick={(e) => { e.preventDefault(); onNavigate('fireplace-mantles'); }}>
              <div className="work-card-img">
                <img src="/images/ffireplacemantle1.jpg.avif" alt="Fireplace Mantles" />
              </div>
              <div className="work-card-bottom">
                <span className="work-card-title">Fireplace Mantles</span>
                <span className="work-card-arrow">&#10230;</span>
              </div>
            </div>
          </div>
          <p style={{ color: 'var(--color-text-light)', fontSize: '1.2rem', textAlign: 'center', marginTop: '5rem' }}>
            "We combine your unique ideas and needs with our experience and
            ingenuity to create a quality custom product that is beautiful and functional."
          </p>
        </div>
      </section>

      <Testimonials />

    </div>
  );
}

function KitchenCabinetsPage({ onNavigate }) {
  return (
    <div className="page-content">
      <div className="container">
        <Breadcrumb label="Kitchen Cabinets" onNavigate={onNavigate} />
        <h2>Kitchen Cabinets</h2>
        <p>Custom kitchen cabinetry built to your exact specifications, integrating form and style into the heart of your home.</p>
        <GalleryGrid images={[]} />
      </div>
    </div>
  );
}

function BathroomVanitiesPage({ onNavigate }) {
  return (
    <div className="page-content">
      <div className="container">
        <Breadcrumb label="Bathroom Vanities" onNavigate={onNavigate} />
        <h2>Bathroom Vanities</h2>
        <p>Beautiful, custom-designed bathroom vanities built with durability and elegance in mind.</p>
        <GalleryGrid images={[]} />
      </div>
    </div>
  );
}

function BookcasesPage({ onNavigate }) {
  return (
    <div className="page-content">
      <div className="container">
        <Breadcrumb label="Bookcases" onNavigate={onNavigate} />
        <h2>Bookcases</h2>
        <p>Enhance your study or living space with custom-crafted bookcases designed to match your interior trim and style.</p>
        <GalleryGrid images={[]} />
      </div>
    </div>
  );
}

function EntertainmentCentersPage({ onNavigate }) {
  return (
    <div className="page-content">
      <div className="container">
        <Breadcrumb label="Entertainment Centers" onNavigate={onNavigate} />
        <h2>Entertainment Centers</h2>
        <p>Tailor-made entertainment centers to fit your living room and perfectly frame your television and media devices.</p>
        <GalleryGrid images={[]} />
      </div>
    </div>
  );
}

function FireplaceMantlesPage({ onNavigate }) {
  return (
    <div className="page-content">
      <div className="container">
        <Breadcrumb label="Fireplace Mantles" onNavigate={onNavigate} />
        <h2>Fireplace Mantles</h2>
        <p>Artisanal fireplace mantles that bring warmth and character into your home.</p>
        <GalleryGrid images={[]} />
      </div>
    </div>
  );
}

function PortfolioPage({ onNavigate }) {
  const [lightboxIndex, setLightboxIndex] = React.useState(null);

  const portfolioImages = [
    { src: '/images/fkitchen5.jpg.avif', label: 'Kitchen' },
    { src: '/images/fkitchen2.jpg', label: 'Kitchen' },
    { src: '/images/fvanitie1.jpg.avif', label: 'Bathroom Vanity' },
    { src: '/images/fkitchen1.jpg.avif', label: 'Kitchen' },
    { src: '/images/ffireplacemantle1.jpg.avif', label: 'Fireplace Mantle' },
    { src: '/images/fkitchen2.jpg.avif', label: 'Kitchen' },
    { src: '/images/fentertainmentcenter1.jpg.avif', label: 'Entertainment Center' },
    { src: '/images/fkitchen8.jpg', label: 'Kitchen' },
    { src: '/images/fbookcase1.jpg.webp', label: 'Bookcase' },
    { src: '/images/fkitchen9.jpg', label: 'Kitchen' },
    { src: '/images/vanity1.jpg', label: 'Vanity' },
    { src: '/images/kitchen1.jpg', label: 'Kitchen' },
    { src: '/images/vanity2.jpg', label: 'Vanity' },
    { src: '/images/vanity3.jpg', label: 'Vanity' },
    { src: '/images/kitchen2.jpg', label: 'Kitchen' },
  ]

  function openLightbox(index) {
      return setLightboxIndex(index);
    }
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + portfolioImages.length) % portfolioImages.length);
  };
  const goNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % portfolioImages.length);
  };

  React.useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + portfolioImages.length) % portfolioImages.length);
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % portfolioImages.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  return (
    <div className="page-content" style={{
      backgroundColor: 'var(--color-bg-section)',
    }}>

      {/* ── HERO HEADER ── */}
      <section className="hero-section"
        style={{
          backgroundImage: "url('/images/fkitchen10.jpg.avif')",
          backgroundPosition: 'center 50%',
          borderTop: 'solid 2px var(--color-primary)',
          borderBottom: 'solid 2px var(--color-primary)'
        }}>
        <div className="hero-content">
          <h2>Our Portfolio</h2>
          <p>Years of beautiful designs and happy customers.</p>
        </div>
      </section>

      <div className="container">
        {/* ── PORTFOLIO GRID ── */}
        <div className="portfolio-grid">
          {portfolioImages.map((img, i) => (
            <div
              key={i}
              className="portfolio-card"
              onClick={() => openLightbox(i)}
            >
              <div className="portfolio-card-img">
                <img src={img.src} alt={img.label} />
              </div>
              <div className="portfolio-card-bottom">
                <span className="portfolio-card-title">{img.label}</span>
                <span className="portfolio-card-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <div className="portfolio-lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="lightbox-arrow lightbox-arrow--prev" onClick={goPrev}>‹</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={portfolioImages[lightboxIndex].src}
              alt={portfolioImages[lightboxIndex].label}
            />
            <p className="lightbox-caption">{portfolioImages[lightboxIndex].label}</p>
          </div>
          <button className="lightbox-arrow lightbox-arrow--next" onClick={goNext}>›</button>
          <div className="lightbox-counter">
            {lightboxIndex + 1} / {portfolioImages.length}
          </div>
        </div>
      )}
    </div>
  );
}

function AboutPage({ onNavigate }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <div className="page-content" style={{ 
      backgroundImage: 'url("/images/woodbackground.jpg.avif")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'var(--color-bg-section)'
    }}>
      <div className="container">

        {/* ── OVERVIEW SECTION ── */}
        <div className="about-overview">
          <div className="about-overview-img">
            <img src="/images/aboutus1.jpg" alt="Heritage Wood Co. Shop" />
          </div>
          <div className="about-overview-text">
            <h3>Overview</h3>
            <p>
              Under Ryan and Rachel's ownership, Heritage Wood Co. has been in business for almost 15 years and has always been a
              family-run business. Over the years, Heritage Wood Co. has remained dedicated to
              producing quality wood products and ensuring complete customer satisfaction.
            </p>
            <p>
              We love helping homeowners realize their dreams by collaboratively designing a space that they
              have already reimagined. Then, we purposefully do the work of producing that
              product with the same amount of care and attention to detail that went into designing it.
            </p>
            {/* ── REACH OUT BUTTON ── */}
            <button className="hero-cta-btn about-cta-btn" onClick={() => setModalOpen(true)}>
              Message Ryan
              <span className="hero-link-arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── SHOP SECTION — outside container so background goes full width ── */}
      <section className="about-shop-section">
        <div className="container">
          <div className="about-shop">
            <div className="about-shop-text">
              <h3>Our Shop</h3>
              <p>
                Located in Guys Mills, PA, this is where we work hard to ensure that our products
                truly reflect the beautiful designs that our customers bring to us.
              </p>
              <p>
                We're building a new shop! The new shop is located at the current address
                (9436 State Hwy 198 Guys Mills, PA 16327), which you'll find on our website and
                social media.
              </p>
            </div>
            <div className="about-shop-images">
              <img
                className="shop-img shop-img--top"
                src="/images/oldshop1.jpg"
                alt="Craftsmanship detail"
              />
              <img
                className="shop-img shop-img--bottom"
                src="/images/newshop1.jpg"
                alt="Custom cabinetry detail"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

function ContactPage({ onNavigate }) {
  const [state, handleSubmit] = useForm('xeevvzkp');
  const [modalOpen, setModalOpen] = React.useState(false);

  if (state.succeeded) {
    return (
      <div className="page-content contact-page">
        <div className="container">
          <Breadcrumb label="Contact Us" onNavigate={onNavigate} />
          <p className="form-success">Thanks for reaching out! We'll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content contact-page">
      <section className="hero-section"
        style={{ backgroundImage: "url('/images/fkitchen6.jpg.avif')" }}
      >
        <div className="hero-content">
          <h2>Let's Discuss Your Project!</h2>
          <p> We're here to help you design your custom cabinetry build and make it a reality.</p>
        </div>
      </section>
      <div className="container">
        <Breadcrumb label="Contact Us" onNavigate={onNavigate} />

        {/* Top row: contact info + form side by side */}
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Schedule a Consultation</h2>
            <h3>Hours</h3>
            <p>
              Monday – Friday: 8:00 AM – 5:00 PM
            </p>
            <h3>Contact Info.</h3>
            <button className="hero-cta-btn about-cta-btn" onClick={() => setModalOpen(true)}>
              Reach Out To Us
            <span className="hero-link-arrow">→</span>
            </button>
            <p>
              Call: <a href="tel:814-853-0323">814-853-0323</a>
            </p>
            <h3>Address</h3>
            <p>
              Heritage Wood Co.<br />
              9436 State Hwy 198<br />
              Guys Mills, PA 16327
            </p>
          </div>

          <div className="contact-info">
            <h2>Send Us A Message</h2>
            <form onSubmit={handleSubmit} noValidate>

              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input id="name" type="text" name="name" placeholder="Your name" required />
                <ValidationError field="name" errors={state.errors} className="form-error" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" name="email" placeholder="your@email.com" required />
                <ValidationError field="email" errors={state.errors} className="form-error" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" name="phone" placeholder="(814) 000-0000" />
                <ValidationError field="phone" errors={state.errors} className="form-error" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us what you're looking for..." required />
                <ValidationError field="message" errors={state.errors} className="form-error" />
              </div>

              <button type="submit" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>

        </div>

        {/* Map below, full width */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=9436+State+Hwy+198,+Guys+Mills+PA,+16327&output=embed"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Heritage Wood Co. contact map"
          />
        </div>

      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
 

/* ═══════════════════════════════════════════════════════════════
   7. APP BOOTSTRAP & METADATA
   ═══════════════════════════════════════════════════════════════ */

const PAGE_META = {
  'home': { title: 'Heritage Wood Co. | Home', Component: HomePage },
  'kitchen-cabinets': { title: 'Heritage Wood Co. | Kitchen Cabinets', Component: KitchenCabinetsPage },
  'bathroom-vanities': { title: 'Heritage Wood Co. | Bathroom Vanities', Component: BathroomVanitiesPage },
  'bookcases': { title: 'Heritage Wood Co. | Bookcases', Component: BookcasesPage },
  'entertainment-centers': { title: 'Heritage Wood Co. | Entertainment Centers', Component: EntertainmentCentersPage },
  'fireplace-mantles': { title: 'Heritage Wood Co. | Fireplace Mantles', Component: FireplaceMantlesPage },
  'portfolio': { title: 'Heritage Wood Co. | Portfolio', Component: PortfolioPage },
  'about': { title: 'Heritage Wood Co. | About Us', Component: AboutPage },
  'contact': { title: 'Heritage Wood Co. | Contact Us', Component: ContactPage },
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (PAGE_META[currentPage]) {
      document.title = PAGE_META[currentPage].title;
    }
    window.scrollTo(0, 0);
  }, [currentPage]);

  const CurrentComponent = PAGE_META[currentPage]?.Component || HomePage;

  return (
    <div id="site-wrapper" className="full-width-layout">
      <Nav currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        <CurrentComponent onNavigate={setCurrentPage} />
      </main>
      <PreFooter onNavigate={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default App;
