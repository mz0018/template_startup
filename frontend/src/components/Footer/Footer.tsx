export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[-1] h-screen bg-gray-900 text-gray-300">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-gray-700 pb-8 md:flex-row">
          <div>
            <h2 className="text-xl font-semibold text-white">Your Brand</h2>
            <p className="mt-2 text-sm text-gray-400">
              Building beautiful web experiences.
            </p>
          </div>

          <nav className="flex gap-6 text-sm">
            <a href="#" className="transition hover:text-white">
              Home
            </a>
            <a href="#" className="transition hover:text-white">
              About
            </a>
            <a href="#" className="transition hover:text-white">
              Projects
            </a>
            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              GitHub
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};