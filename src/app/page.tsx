import Image from 'next/image'
import Presentation from './components/presentation'
export default function Home() {
  
  return (
    <main className="flex items-center justify-center custom-radial-gradient picture-shadow">
      <Presentation />
    </main>
  )
}
