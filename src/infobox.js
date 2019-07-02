import React from "react";
import ReactDOM from "react-dom";
import Text from "./Text";
import { Transition } from "react-spring/renderprops";
//import { Transition, animated } from "react-spring/renderprops";

const InfoBox = props => {
  const findText = Text.filter(text => {
    return text.id === props.id;
  });
  //const spring = useSpring({ opacity: 1, from: { opacity: 0 } });
  //const spring = useSpring({ from: { opacity: 0 }, opacity: props.id ? 1 : 0 });
  return findText.map(text => (
    <Transition
      items={text}
      keys={text => text.id}
      from={{ position: "absolute", opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {text =>
        text &&
        (props => (
          <div style={props}>
            {text.name}
            {text.d}
          </div>
        ))
      }
    </Transition>
  ));
  // return findText.map(text => (
  //   <div>
  //     <h4>{text.name}</h4>
  //     <p>{text.d}</p>
  //   </div>
  // ));
};
export default InfoBox;
