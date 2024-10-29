import { useState } from 'react'
import { ImcFront } from './Components/ImcFront'
import { ImcTable } from './Components/ImcTable'
import { data } from './data/data'
import './App.css'

function App() {

  const calcImc = (e, height, width) => {
    e.preventDefault()
    if (!width || !height)return
    console.log("Executou o clique")
    const heightFloat = +height.replace(",", ".")
    const widthFloat = +width.replace(",", ".")

    const imcResult = (widthFloat / (heightFloat * heightFloat)).toFixed(1)
    setImc(imcResult)
  }

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return (
    <>
      <div className='container'>
        {!imc ? 
          (<ImcFront calcImc={calcImc} />) 
          : 
          (<ImcTable data={data} />)}
      </div>
    </>
  )
}

export default App
