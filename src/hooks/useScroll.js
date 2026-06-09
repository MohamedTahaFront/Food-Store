import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollActive, setScrollActive] = useState("home");

  const [top, setTop] = useState(false);
  const handleTop = () => {
    setTop(window.scrollY > 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleTop);
    return () => window.removeEventListener("scroll", handleTop);
  }, []);

  return { scrollActive, setScrollActive ,top};
};
