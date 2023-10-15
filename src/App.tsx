import './css/app.css';
import { Menu } from "./components/menu.tsx";
import { About } from "./pages/about";
import { Contact } from "./pages/contact.tsx";
import { Home } from "./pages/home.tsx";
import { Technologies } from "./pages/technologies.tsx";
import { Projects } from './pages/projects.tsx';
import { Footer } from './pages/footer.tsx';




function App() {
  return (
    <div>
      <Menu />
      <Home />
      <About />
      <Technologies />
      <Projects/>
      <Contact />
      <Footer/>
    </div>

  )
}

export default App
