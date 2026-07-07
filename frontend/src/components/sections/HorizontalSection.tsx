import { useEffect } from "react";

type HorizontalSectionProps = {
  ref: any;
  isVisible: boolean;
};

export const HorizontalSection = ({ ref, isVisible }: HorizontalSectionProps) => {
  useEffect(() => {
    if (isVisible) {
      console.log("Horizontal section is active");
    }
  }, [isVisible]);

  return (
    <section ref={ref} className="bg-green-500 min-h-dvh">
      Horizontal Section
    </section>
  );
};