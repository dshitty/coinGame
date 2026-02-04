const bgMusic = new Audio("/sounds/original_soundtrack-game-gaming-video-game-music-471936.mp3"); // path from public
bgMusic.loop = true;
bgMusic.volume = 0.4;
bgMusic.play().catch(() => {}); // in case browser blocks autoplay

export default bgMusic;