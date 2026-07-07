import { useEffect, useRef, useState } from "react";

type HorizontalSectionProps = {
  ref: any;
  isVisible: boolean;
};

export const HorizontalSection = ({ ref, isVisible }: HorizontalSectionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible) return;

      const scrollAmount = window.scrollY;

      // Adjust the speed here
      setTranslateX(scrollAmount * 0.5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      console.log("Horizontal section is active");
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="sticky top-0 h-screen overflow-hidden bg-green-500 py-20"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="mb-10 text-4xl font-bold text-white">
          Horizontal Section
        </h2>

        <div
          ref={contentRef}
          className="flex gap-6 transition-transform"
          style={{
            transform: `translateX(-${translateX}px)`,
          }}
        >
          <article className="min-w-[100vw] rounded-lg bg-white p-6 shadow-lg">
            <h3 className="text-3xl font-bold">Content One</h3>
            <p className="mt-4">Lorem ipsum dolor sit amet.</p>
          </article>

          <article className="min-w-[100vw] rounded-lg bg-white p-6 shadow-lg">
            <h3 className="text-3xl font-bold">Content Two</h3>
            <p className="mt-4">Lorem ipsum dolor sit amet.</p>
          </article>

          <article className="min-w-[100vw] rounded-lg bg-white p-6 shadow-lg">
            <h3 className="text-3xl font-bold">Content Three</h3>
            <p className="mt-4">Lorem ipsum dolor sit amet.</p>
          </article>
        </div>
      </div>
    </section>
  );
};