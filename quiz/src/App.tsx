
import { useState } from "react"
import Rain from "./components/Rain"
import GameUI from "./components/GameUI"
import Settings from "./components/settings"
import Easy from "./components/Easy"
import Med from "./components/Med"
import Hard from "./components/Hard"

const App = ()=>{
    const [started, setStarted] = useState(false)
    const [setting, setSetting] = useState(false)
    const [easy, setEasy] = useState(false)
    const [med, setMed] = useState(false)
    const [hard, setHard] = useState(false)
return(
    <>
    {!started && !setting && <Rain onStart={()=>setStarted(true)} onSet={()=>setSetting(true)}/>}
        {started && <GameUI/>}
        {setting && !easy && !med && !hard && <Settings onEasy={()=>setEasy(true)} onMed = {()=>setMed(true)} onHard = {()=>setHard(true)}/>}
           {easy && <Easy/>} 
           {med && <Med/>}
           {hard && <Hard/>}
    </>
    

)
}
export default App