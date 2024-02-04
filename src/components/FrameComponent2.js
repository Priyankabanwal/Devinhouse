import { useMemo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  contactUs,
  theIdeationProcessIsACruc,
  propPadding,
  propPadding1,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const theIdeationProcessStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="frame-wrapper5" style={frameDivStyle}>
      <div className="contact-us-parent" style={frameDiv1Style}>
        <img className="contact-us-icon" alt="" src={contactUs} />
        <div className="the-ideation-process" style={theIdeationProcessStyle}>
          {theIdeationProcessIsACruc}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
