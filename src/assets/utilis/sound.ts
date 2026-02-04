const clickAudio = new Audio("/sounds/mixkit-sci-fi-click-900.wav")
export const playClick = () => {
  clickAudio.currentTime = 0; 
  clickAudio.play();
};