export const HeroSection = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-blue-500">
      <div className="mx-auto flex min-h-dvh max-w-7xl items-center justify-between gap-12 px-6">
        {/* Left Article */}
        <article className="max-w-md">
          <p className="mb-2 text-sm uppercase tracking-widest text-gray-700">
            Welcome
          </p>
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            Build Something Amazing
          </h1>
          <p className="text-lg text-gray-800">
            Create beautiful, modern websites with React and Tailwind CSS. Fast,
            responsive, and easy to customize.
          </p>
        </article>

        {/* Right Article */}
        <article className="max-w-sm rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Featured Project
          </h2>
          <p className="text-gray-600">
            A clean and minimal portfolio built with Next.js, Tailwind CSS, and
            Framer Motion for smooth animations.
          </p>

          <button className="mt-6 rounded-lg bg-gray-900 px-5 py-2 text-white transition hover:bg-gray-700">
            View Project
          </button>
        </article>
      </div>
    </section>
  );
};