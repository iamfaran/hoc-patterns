import { useState } from "react";
export default function withHover(Element) {
  debugger;
  return (props) => {
    debugger;
    const [hovering, setHover] = useState(false);
    console.log(hovering);
    return (
      <Element
        {...props}
        hovering={hovering}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
    );
  };
}
