import HeroSection from "../components/HeroSection";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import HomeFooterFrame from "../components/HomeFooterFrame";
import FrameComponent from "../components/FrameComponent";
import "./Index1.css";

const Index1 = () => {
  return (
    <div className="index">
      <HeroSection />
      <img className="logo-group-icon" alt="" src="/vector-1.svg" />
      <img className="index-child" loading="eager" alt="" src="/group-21.svg" />
      <div className="ideate">Ideate</div>
      <img className="vector-icon" alt="" src="/vector-2.svg" />
      <img className="index-item" loading="eager" alt="" src="/group-27.svg" />
      <div className="reserach">Reserach</div>
      <img className="index-inner" loading="eager" alt="" src="/group-39.svg" />
      <div className="create">Create</div>
      <img className="logo-group-icon1" alt="" src="/vector-3.svg" />
      <section className="frame-parent">
        <div className="our-services-parent">
          <h2 className="our-services">{`Our Services `}</h2>
          <h1 className="high-impact-services-for-container">
            <p className="high-impact-services">{`High-impact services `}</p>
            <p className="for-your-business">for your business</p>
          </h1>
        </div>
        <FrameComponent4 />
      </section>
      <section className="testing-parent">
        <div className="testing">Testing</div>
        <img className="frame-child" loading="eager" alt="" />
      </section>
      <FrameComponent3 />
      <section className="frame-group">
        <div className="process-parent">
          <h2 className="process">Process</h2>
          <h1 className="process-that-moves-container">
            <p className="process-that-moves">{`Process that moves `}</p>
            <p className="things-forward">things forward</p>
          </h1>
        </div>
        <div className="frame-wrapper">
          <FrameComponent1 />
        </div>
        <h1 className="recent-showcase">Recent Showcase</h1>
        <div className="frame-container">
          <div className="frame-div">
            <div className="frame-parent1">
              <div className="rectangle-parent">
                <img
                  className="frame-item"
                  loading="eager"
                  alt=""
                  src="/rectangle-20@2x.png"
                />
                <div className="web-ui-design-parent">
                  <h2 className="web-ui-design">Web UI design</h2>
                  <div className="creative-ui-design">Creative UI design</div>
                </div>
              </div>
              <div className="graphic-design-parent">
                <h2 className="graphic-design">{`Graphic design `}</h2>
                <div className="graphic-design1">{`Graphic design `}</div>
              </div>
            </div>
          </div>
          <div className="frame-parent2">
            <div className="start-trial-wrapper">
              <div className="start-trial">
                <div className="ellipse-parent">
                  <div className="frame-inner" />
                  <img className="chevron-right-icon" alt="" />
                  <img className="vector-icon1" alt="" src="/vector-18.svg" />
                </div>
                <input
                  className="start-your-free"
                  placeholder="Start your Free Trial"
                  type="text"
                />
              </div>
            </div>
            <div className="frame-parent3">
              <div className="rectangle-group">
                <img
                  className="rectangle-icon"
                  alt=""
                  src="/rectangle-21@2x.png"
                />
                <button className="rectangle-wrapper">
                  <div className="rectangle">
                    <div className="text" />
                    <img className="frame-icon" alt="" src="/vector-19.svg" />
                  </div>
                </button>
              </div>
              <div className="to-design-digital-strategy-parent">
                <h2 className="to-design-digital">
                  To design Digital Strategy
                </h2>
                <div className="social-media-marketing">
                  Social Media Marketing
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent4">
          <div className="vector-parent">
            <img
              className="vector-icon2"
              loading="eager"
              alt=""
              src="/rectangle-22@2x.png"
            />
            <div className="frame-wrapper1">
              <div className="ui-design-parent">
                <h2 className="ui-design">UI Design</h2>
                <div className="creative-rebranding-for">
                  Creative Rebranding for logo
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-container">
            <img
              className="frame-child1"
              loading="eager"
              alt=""
              src="/rectangle-23@2x.png"
            />
            <div className="ui-design-group">
              <h2 className="ui-design1">UI Design</h2>
              <div className="creative-rebranding-for1">
                Creative Rebranding for logo
              </div>
            </div>
          </div>
        </div>
        <HomeFooterFrame />
      </section>
      <FrameComponent />
    </div>
  );
};

export default Index1;
