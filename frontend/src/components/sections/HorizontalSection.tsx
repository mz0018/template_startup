import { useEffect, useRef, useState } from "react";

export const HorizontalSection = () => {
  // Wrapper (the tall element)
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Horizontal content
  const contentRef = useRef<HTMLDivElement>(null);

  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !contentRef.current) return;

      // Distance from top of viewport
      const rect = wrapperRef.current.getBoundingClientRect();

      /**
       * When wrapper reaches top:
       *
       * rect.top = 0
       *
       * While scrolling:
       *
       * rect.top becomes negative
       *
       * We convert it into a positive value.
       */
      const progress = Math.max(0, -rect.top);

      /**
       * Total width of all cards
       */
      const contentWidth = contentRef.current.scrollWidth;

      /**
       * Width of the screen
       */
      const viewportWidth = window.innerWidth;

      /**
       * Maximum horizontal movement
       */
      const maxTranslate = contentWidth - viewportWidth;

      /**
       * Never move farther than the last card
       */
      const x = Math.min(progress, maxTranslate);

      setTranslateX(x);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Height of the wrapper
   *
   * viewport height
   * +
   * horizontal distance
   */

  const sectionHeight = "300vw";

  return (
    <div
      ref={wrapperRef}
      style={{
        height: sectionHeight,
      }}
    >
      <section className="sticky top-0 flex h-screen items-center overflow-hidden bg-green-500">
        <div
          ref={contentRef}
          className="flex gap-6 px-10"
          style={{
            transform: `translateX(-${translateX}px)`,
          }}
        >
          <article className="flex h-[70vh] min-w-screen items-center justify-center rounded-lg bg-white text-4xl font-bold">
            Card One
          </article>

          <article className="flex h-[70vh] min-w-screen items-center justify-center rounded-lg bg-white text-4xl font-bold">
            Card Two
          </article>

          <article className="flex h-[70vh] min-w-screen items-center justify-center rounded-lg bg-white text-4xl font-bold">
            Card Three
          </article>
        </div>
      </section>
    </div>
  );
};