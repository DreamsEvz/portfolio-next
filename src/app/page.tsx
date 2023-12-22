import Image from 'next/image'
import Presentation from './components/presentation'
import Navbar from './components/navbar'
import Skills from './components/skills'
export default function Home() {
  
  return (
    <main className="picture-shadow">
      <Navbar />
      <Presentation />
      <Skills/>
    </main>
  )
}
