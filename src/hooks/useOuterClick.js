import { useEffect, useRef } from "react";

function useOuterClick(callback) {
  // Initialize mutable ref, which stores callback
  const callbackRef = useRef();
  // returned to client, who marks "border" element
  const innerRef = useRef();

  // Update callback on each render, so second useEffect has access to current value
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      )
        callbackRef.current(e);
    }
  }, []);

  return innerRef;
}

export default useOuterClick;
