import { Navbar } from "./components/Navbar/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { HorizontalSection } from "./components/sections/HorizontalSection";
import { Footer } from "./components/Footer/Footer";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

function App() {

  const { isScrolling } = useIntersectionObserver()

  return (
    <>
    <Navbar isScrolling={isScrolling} />
    

    <div className="relative z-10 mb-[500px]">
      <main>
        {/* Hero */}
        {/* <section className="flex h-screen items-center justify-center bg-blue-500">
          <h1 className="text-5xl font-bold text-white">
            Hero Section
          </h1>
        </section> */}
        <HeroSection />

        {/* Horizontal Scroll */}
        <HorizontalSection />

      </main>
    </div>

    <Footer />
    </>
  );
}

export default App;