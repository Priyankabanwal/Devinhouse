import FrameComponent2 from "./FrameComponent2";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="frame-parent11">
      <FrameComponent2
        contactUs="/vector-15.svg"
        theIdeationProcessIsACruc="The ideation process is a crucial phase in the design process where creative thinking and brainstorming"
      />
      <FrameComponent2
        contactUs="/vector-16.svg"
        theIdeationProcessIsACruc="Research is a critical component of the design process, helping designers understand the problem"
        propPadding="0px 0px var(--padding-smi)"
        propPadding1="var(--padding-13xl) var(--padding-21xl)"
        propWidth="199px"
      />
      <div className="vector-parent1">
        <img className="vector-icon7" alt="" src="/vector-17.svg" />
        <div className="designing-a-process-container">
          <p className="designing-a-process">
            Designing a process involves several key steps to ensure clarity,
            efficiency, successful
          </p>
          <p className="implementation">implementation</p>
        </div>
      </div>
      <div className="layer-1-parent">
        <img className="layer-1-icon" alt="" src="/layer-1.svg" />
        <div className="testing-is-a">
          Testing is a crucial phase in the design process to ensure that the
          product or system meets the specified requirements
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
