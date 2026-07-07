import { Navbar } from "./components/Navbar/Navbar"
import { HeroSection } from "./components/sections/HeroSection"
import { HorizontalSection } from "./components/sections/HorizontalSection"
import { Footer } from "./components/Footer/Footer"
import { useIntersectionObserver } from "./hooks/useIntersectionObserver"

const App = () => {
  const { ref, isVisible, isScrolling } = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <>
      <Navbar isScrolling={isScrolling} />

      <main>
        <HeroSection />

        <div className="h-[200dvh]">
          <HorizontalSection ref={ref} isVisible={isVisible} />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App