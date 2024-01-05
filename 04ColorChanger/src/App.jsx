import { useState } from 'react'


function App() {
  const [Color, setColor] = useState("purple")
  
  return (
        <div className="w-full h-screen p-0 m-0" style={{background:Color}}>
         <div className='fixed flex flex-wrap justify-center bottom-24 inset-x-0 px-2'>
          <div className=' fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>
            <button onClick={()=>setColor("red")} className=' outline-none px-4 py-1 rounded-xl text-white shadow-md' style={{background: "red"}}>Red</button>
            <button onClick={()=>setColor("green")} className=' outline-none px-4 py-1 rounded-xl text-white shadow-md' style={{background: "green"}}>Red</button>
            <button onClick={()=>setColor("olive")} className=' outline-none px-4 py-1 rounded-xl text-white shadow-md' style={{background: "olive"}}>Red</button>
            <button onClick={()=>setColor("blue")} className=' outline-none px-4 py-1 rounded-xl text-white shadow-md' style={{background: "blue"}}>Red</button>
            <button onClick={()=>setColor("black")} className=' outline-none px-4 py-1 rounded-xl text-white shadow-md' style={{background: "black"}}>Red</button>
          </div>
         </div>
        </div>
  )
}

export default App
