import { Navbar } from "./components/Navbar/Navbar";
import { HorizontalSection } from "./components/sections/HorizontalSection";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

function App() {

  const { isScrolling } = useIntersectionObserver()

  return (
    <>
    <Navbar isScrolling={isScrolling} />
    <main>
      {/* Hero */}
      <section className="flex h-screen items-center justify-center bg-blue-500">
        <h1 className="text-5xl font-bold text-white">
          Hero Section
        </h1>
      </section>

      {/* Horizontal Scroll */}
      <HorizontalSection />

      {/* Next Section */}
      <section className="flex h-screen items-center justify-center bg-red-500">
        <h1 className="text-5xl font-bold text-white">
          Footer Section
        </h1>
      </section>
    </main>
    </>
  );
}

export default App;