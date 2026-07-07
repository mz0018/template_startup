import { useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const HorizontalSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (isVisible) console.log("horizontal section active");
  }, [isVisible]);

  return (
    <div ref={ref} className="bg-green-500 min-h-dvh">
      Horizontal Section
    </div>
  );
};
