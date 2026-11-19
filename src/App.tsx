const CONTACT = "info@functionalrobots.co";

export default function App() {
  const mail = `mailto:${CONTACT}`;
  return (
    <>
      <header className="header">
        <a className="wordmark" href="/" aria-label="Functional Robotics, home">
          {/* Lucide "aperture", same as the product app's BrandMark. */}
          <svg className="wordmark__mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="m14.31 8 5.74 9.94" /><path d="M9.69 8h11.48" /><path d="m7.38 12 5.74-9.94" />
            <path d="M9.69 16 3.95 6.06" /><path d="M14.31 16H2.83" /><path d="m16.62 12-5.74 9.94" />
          </svg>
          functional<span className="wordmark__dot">.</span>
        </a>
        <a className="cta t-label" href={mail}>Talk to us</a>
      </header>

      <main>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero__inner">
            <h1 className="t-display" id="hero-title">Simplify deployments.</h1>
            <p className="hero__lede t-lede">
              One pipeline from simulation to the floor: teleoperate, train, evaluate and ship policies
              to a fleet, then keep them running.
            </p>
            <div className="hero__actions">
              <a className="cta t-label" href={mail}>Talk to us</a>
            </div>
          </div>
        </section>

        <section className="manifesto container" aria-label="What we believe">
          <ul>
            <li className="t-statement">Everyone trains a policy. Few get it onto a robot.</li>
            <li className="t-statement">Fewer still keep it running after week one.</li>
            <li className="t-statement">We build the part between training and routine.</li>
          </ul>
        </section>

        <section className="close" aria-labelledby="close-title">
          <div className="container close__inner">
            <h2 className="t-h2 close__title" id="close-title">
              Bring us the robot. <span>We'll bring the deployment.</span>
            </h2>
            <div>
              <a className="cta cta--night t-label" href={mail}>Talk to us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__row t-label">
          <span>© 2026 Functional Robotics</span>
          <a href={mail}>{CONTACT}</a>
        </div>
      </footer>
    </>
  );
}
