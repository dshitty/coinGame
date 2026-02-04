import { playClick } from "../assets/utilis/sound"
import bgMusic from "../assets/utilis/bgmusic"
type level={
    onEasy: () => void
    onMed: () => void
    onHard: () => void
}

const Settings=({onEasy, onMed, onHard}:level)=>{
return(
    <>
        <div className="h-screen w-screen flex justify-center items-center bg-black">
    <div className="flex flex-col relative bottom-8">
        <div className="w-40  text-white relative right-35 bottom-5 rounded-3xl font-[MyFont1] text-xl animate-pulse translate-x-30.5">SELECT THE LEVEL</div>
   <button onClick={()=>{onEasy(); playClick();bgMusic.play().catch(()=>{})}} className=" w-20 bg-white text-black relative right-30 rounded-3xl font-[MyFont1] text-xl animate-pulse translate-x-30.5 ">EASY </button> 
    <button onClick={()=>{onMed(); playClick();bgMusic.play().catch(()=>{})}} className=" w-29 bg-white text-black relative right-33 rounded-3xl font-[MyFont1] text-xl animate-pulse translate-x-30.5 text-center my-5">MEDIUM</button>
    <button onClick={()=>{onHard(); playClick();bgMusic.play().catch(()=>{})}}className=" w-29 bg-white text-black relative right-33 bottom-6 rounded-3xl font-[MyFont1] text-xl animate-pulse translate-x-30.5 text-center my-5">HARD</button>
    </div>
    </div>
    </>
)
}
export default Settings