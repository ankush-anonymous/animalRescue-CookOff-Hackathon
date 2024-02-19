import React from "react";
import { useSpring, animated } from "react-spring";

const style = {
  fontSize: "4rem",
  fontFamily: "source-sans",
  fontWeight: "bold",
  color: "#333", // Set your desired text color
};

function NumberScrollAnimation({ targetValue }) {
  // Define the spring animation
  const { number } = useSpring({
    reset: true,
    from: { number: 0 },
    to: { number: targetValue },
  });

  return (
    <div>
      <animated.div style={{ ...style }}>
        {number.to((val) => Math.floor(val))}
      </animated.div>
    </div>
  );
}

export default NumberScrollAnimation;
