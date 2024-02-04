import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-child" />
      <img className="hero-section-item" alt="" src="/rectangle-40@2x.png" />
      <img className="clip-path-group" alt="" src="/clip-path-group.svg" />
      <header className="hero-section-inner">
        <div className="frame-parent5">
          <div className="logo-parent">
            <img className="logo-icon" loading="eager" alt="" src="/logo.svg" />
            <h2 className="canvix">Canvix</h2>
          </div>
          <div className="navigation">
            <div className="footer-frame">
              <div className="home">Home</div>
            </div>
            <div className="footer-frame1">
              <div className="about">About</div>
            </div>
            <div className="footer-frame2">
              <div className="contact-us">Contact Us</div>
            </div>
          </div>
          <button className="button">
            <div className="get-in-touch">Get in touch</div>
          </button>
        </div>
      </header>
      <div className="hero-section-inner1">
        <div className="frame-parent6">
          <div className="password-protected-parent">
            <div className="password-protected">
              <div className="trusted-by-leading">
                Trusted by Leading Brands
              </div>
            </div>
            <img
              className="b331014c589cab-client-04-icon"
              loading="eager"
              alt=""
              src="/6496714814b331014c589cab-client04.svg"
            />
            <img
              className="a8ebaefe07573-client-05-icon"
              loading="eager"
              alt=""
              src="/64967154860a8ebaefe07573-client05.svg"
            />
            <img
              className="a0e31c39d2f577-client-03-icon"
              loading="eager"
              alt=""
              src="/6496714260a0e31c39d2f577-client03.svg"
            />
            <img
              className="a4896c258e54657-client-02-icon"
              alt=""
              src="/654868347a4896c258e54657-client02.svg"
            />
            <div className="wrapper-image">
              <img
                className="image-icon"
                loading="eager"
                alt=""
                src="/image.svg"
              />
            </div>
          </div>
          <div className="frame-wrapper2">
            <div className="frame-parent7">
              <div className="ready-to-take-your-business-gr-parent">
                <h1 className="ready-to-take-container">
                  <p className="ready-to-take">{`Ready to take your `}</p>
                  <p className="business-growth">
                    <span className="business">Business</span>
                    <span className="span">{` `}</span>
                    <span className="growth">Growth</span>
                    <span>{` `}</span>
                  </p>
                  <p className="to-the-next">to the next level?</p>
                </h1>
                <div className="lorem-ipsum-dolor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
                  massa libero egestas malesuada viverra gravida libero cursus
                  nulla leo pulvinar.
                </div>
              </div>
              <div className="start-trial1">
                <div className="ellipse-group">
                  <div className="ellipse-div" />
                  <img className="chevron-right-icon1" alt="" />
                  <img
                    className="password-protected-pair"
                    loading="eager"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className="start-your-free1">Start your Free Trial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="ornament-26-1" alt="" src="/ornament-26-1@2x.png" />
    </section>
  );
};

export default HeroSection;
