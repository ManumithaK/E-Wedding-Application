import React from "react";
import AnimatedNumbers from "react-animated-numbers";

export default function NumberAnimator(props) {
  return (
    <>
      <div>
        <br />
        <div>
          <AnimatedNumbers
            includeComma={true}
            animateToNumber={props.counter}
            fontStyle={{ fontSize: 50 }}
            configs={[
              { mass: 1, tension: 220, friction: 100 },
              { mass: 1, tension: 180, friction: 130 },
              { mass: 1, tension: 280, friction: 90 },
              { mass: 1, tension: 180, friction: 135 }
            ]}
          ></AnimatedNumbers>
        </div>
      </div>
    </>
  );
}
