import { useState, useRef, useEffect } from "react";

export default function useHover() {
  const [hovering, setHovering] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setHovering(true);
  const handleMouseOut = () => setHovering(false);

  useEffect(() => {
    // get node reference from DOM
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, hovering];
}
