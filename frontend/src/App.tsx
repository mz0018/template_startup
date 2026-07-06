import { Navbar } from "./components/Navbar/Navbar"
import { useIntersectionObserver } from "./hooks/useIntersectionObserver"

const App = () => {
  const { ref, isVisible, isScrolling } = useIntersectionObserver()

  return (
    <>
      <Navbar isScrolling={isScrolling} />

      <main>
        <section className="bg-red-500 h-screen flex items-center justify-center text-center">
          Hero dito erp
        </section>

        <section className="bg-blue-500 h-screen flex items-center justify-center text-center">
          How it works? Section
        </section>
      </main>
    </>
  )
}

export default App