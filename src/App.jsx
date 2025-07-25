import { useState } from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-3xl text-indigo-300'>Yo GSAP</h1>
    </div>
  )
}

export default App
