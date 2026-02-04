import { useState } from "react"
import conversation from "../assets/icons/conversation.png"
import Run from "./Run";
import { playClick } from "../assets/utilis/sound";
const GameUI=()=>{
    const [quote, setQuote] =useState(false);
    const [quotef, setQuotef] = useState(false);
    const [girl, setGirl] = useState(false);
    return(
        <>
        <div className="bg-black w-screen h-screen flex justify-center items-center">
          { !girl && <div className="font-[MyFont2] text-9xl">h</div>}
         { !girl && <div><img src={conversation} alt="error" className="invert block w-40.5 -translate-x-10.5 -translate-y-29.5 animate-fade-in"/></div> }
           {!quote && !quotef && <div className="text-3sm relative right-45 bottom-33 animate-fade-in font-[MyFont1]">hello I am Elle <br/> help me reach <br/>my home</div>}
           {quote && quotef && <div className="text-3sm relative right-45 bottom-33 animate-fade-in font-[MyFont1]">I dont have <br/> money help me<br/>  rob some coins</div>}
           {quotef && !quote && <div className="text-3sm relative right-45 bottom-33 animate-fade-in font-[MyFont1]">every coin = 2XP <br/> I need 5 to go<br/> home i.e. 10xp </div>}
            {!quote && !quotef && <button onClick={()=>{setQuote(true); setQuotef(true); playClick()}} className=" w-29 bg-white text-black relative right-69 rounded-3xl font-[MyFont1] text-xl animate-pulse translate-x-30.5 top-6 ">CONTINUE</button>}
          {quote && quotef &&  <button onClick={()=>{setQuotef(true); setQuote(false); playClick()} } className=" w-29 bg-white text-black relative right-69 rounded-3xl font-[MyFont1] text-xl animate-pulse translate-x-30.5 top-6 ">CONTINUE</button>}
          {!quote && quotef && <button onClick={()=>{setQuotef(false); setQuote(true); setGirl(true); playClick()} } className=" w-29 bg-white text-black relative right-69 rounded-3xl font-[MyFont1] text-xl animate-pulse translate-x-30.5 top-6 ">PLAY</button>}
          {!quotef && quote && <Run/>}
        </div>
</>
    )
}
export default GameUI