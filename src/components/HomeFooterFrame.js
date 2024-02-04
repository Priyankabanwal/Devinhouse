import "./HomeFooterFrame.css";

const HomeFooterFrame = () => {
  return (
    <div className="home-footer-frame">
      <img
        className="rounded-ellipse-icon"
        loading="eager"
        alt=""
        src="/ellipse-16@2x.png"
      />
      <h3 className="be-genuine-in">
        “Be genuine in your assessment, and provide constructive feedback to
        benefit both potential customers and the company providing the product
        or service.”
      </h3>
      <div className="frame-parent12">
        <div className="jacqueline-miller-parent">
          <div className="jacqueline-miller">Jacqueline Miller</div>
          <div className="ceo-of-an">CEO of an eduport</div>
        </div>
        <div className="slider">
          <div className="style-guide-frame-wrapper">
            <div className="style-guide-frame">
              <div className="home-instruction-frame" />
              <img
                className="chevron-right-icon3"
                alt=""
                src="/chevronright.svg"
              />
              <img
                className="about-license-frame"
                alt=""
                src="/vector-20.svg"
              />
            </div>
          </div>
          <div className="slider-inner">
            <div className="ellipse-container">
              <div className="frame-child3" />
              <img className="chevron-right-icon4" alt="" />
              <img
                className="contact-us-changelog-frame"
                alt=""
                src="/vector-21.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooterFrame;
