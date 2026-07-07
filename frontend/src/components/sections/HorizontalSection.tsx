import { useEffect, useState } from "react";

type HorizontalSectionProps = {
  ref: any;
  isVisible: boolean;
};

export const HorizontalSection = ({
  ref,
  isVisible,
}: HorizontalSectionProps) => {
  const [stickySection, setStickySection] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setStickySection(true);
      console.log("Horizontal section is active");
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className={`bg-green-500 py-20 ${
        stickySection ? "sticky top-0" : ""
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="mb-10 text-4xl font-bold text-white">
          Horizontal Section
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-3 text-xl font-semibold">Content One</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vitae justo sed lorem faucibus consequat.
            </p>
          </article>

          <article className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-3 text-xl font-semibold">Content Two</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula neque vel sapien facilisis.
            </p>
          </article>

          <article className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-3 text-xl font-semibold">Content Three</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Vivamus convallis nisi non magna fermentum.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};