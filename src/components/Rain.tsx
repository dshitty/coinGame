import bgMusic from "../assets/utilis/bgmusic";
import { playClick } from "../assets/utilis/sound";

type startScreenProp={
    onStart: ()=>void;
    onSet: () => void;
}


const Rain = ({onStart,onSet}:startScreenProp) => {
    return(
        <>
    <div className="h-screen w-screen flex justify-center items-center bg-black">
    <div className="text-white -translate-y-60 font-[MyFont1] text-4xl animate-zoom translate-x-33.5 "> ‎ TAKE HER TO HER DESTINATION</div>
    <div className="flex flex-col relative bottom-8">
   <button onClick={()=>{onStart(); playClick(); bgMusic.play().catch(()=>{})}} className=" w-20 bg-white text-black relative right-60 rounded-3xl font-[MyFont1] text-xl animate-pulse translate-x-30.5 ">PLAY </button> 
    <button onClick={()=>{onSet(); playClick()}}className=" w-29 bg-white text-black relative right-64 rounded-3xl font-[MyFont1] text-xl animate-pulse translate-x-30.5 text-center my-5">SETTINGS</button>
    </div>
    <span className="font-[MyFont2] text-9xl h-screen relative right-110 top-50 animate-pulse">h</span>
    </div>
    
    </>) 
};
export default Rain