import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Extracts the current path (e.g., "/about")
  const { pathname } = useLocation();

  useEffect(() => {
    // "Instant" snaps to top. Use "smooth" for a scrolling animation.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]); // Runs every time 'pathname' changes

  return null;
};

export { ScrollToTop };