import { useSpring, animated } from "react-spring";
import React from "react";

const Animate = (props) => {
  const prop = useSpring({ val: props.number, from: { val: 0 } });
  return (
    <animated.div className="number">
      {prop.val.interpolate((val) => Math.floor(val))}
    </animated.div>
  );
};

export default Animate;
