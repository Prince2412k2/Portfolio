import HeaderLeft from "./components/HeaderLeft"
import Home from "./components/Home"
import Experience from "./components/Experience"
import Projects from "./components/Project"
import Contact from "./components/Contact"
// import Contributions from "./components/GithubBoard"
import './index.css'
function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />
        <main className="flex-[3]">
          <Home />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
