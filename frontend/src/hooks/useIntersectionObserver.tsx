import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (options = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  //Intersect observer
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
      observer.disconnect();
    };
  }, [options]);

  //Scroll function
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { ref, isVisible, isScrolling };
};