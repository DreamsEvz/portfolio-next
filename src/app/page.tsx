import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Pathing from "./components/pathing";
import Presentation from "./components/presentation";
import Projects from "./components/projects";
import Skills from "./components/skills";
export default function Home() {
  return (
    <main className="picture-shadow">
      <Navbar />
      <Presentation />
      <Skills />
      <Pathing />
      <Projects />
      <Footer />
    </main>
  );
}
