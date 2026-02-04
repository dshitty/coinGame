import { useEffect, useRef, useState } from "react"
import car from '../assets/images/pngtree-black-and-white-party-cop-car-isolated-png-image_8972577.png'
const Hard = () => {
  const [player, setPlayer] = useState({ x: 0, y: 0 });
  const [cop, setCop] = useState({ x: 300, y: 300 });
  const [flip, setFlip] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);

  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameSuccess, setGameSuccess] =useState(false)

  const [coins, setCoins] = useState(() =>
    Array.from({ length: 10 }, () => ({
      x: Math.random() * 2000 - 1000,
      y: Math.random() * 2000 - 1000
    }))
  );

  // 🔹 Keep latest player position for game loop
  const playerRef = useRef(player);
  useEffect(() => {
    playerRef.current = player;
  }, [player]);

  const keyHandle = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (gameOver) return; // stop movement after game over
    e.preventDefault();   // stop page from scrolling

    const speed = 12;

    if (e.key === "ArrowRight") {
      setPlayer(p => ({ ...p, x: p.x + speed }));
      setFlip(-1);
    }
    if (e.key === "ArrowLeft") {
      setPlayer(p => ({ ...p, x: p.x - speed }));
      setFlip(1);
    }
    if (e.key === "ArrowDown") {
      setPlayer(p => ({ ...p, y: p.y + speed }));
    }
    if (e.key === "ArrowUp") {
      setPlayer(p => ({ ...p, y: p.y - speed }));
    }
  };

  // 🎮 GAME LOOP (runs once)
  useEffect(() => {
    const interval = setInterval(() => {
      const player = playerRef.current;

      // Move cop toward player
      setCop(prev => {
        const dx = player.x - prev.x;
        const dy = player.y - prev.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 20) {
          setGameOver(true);
          return prev;
        }

        if (dist < 1) return prev;

        const speed = 8;
        return {
          x: prev.x + (dx / dist) * speed,
          y: prev.y + (dy / dist) * speed
        };
      });

      // Coin collection
      setCoins(prevCoins =>
        prevCoins.filter(coin => {
          const dx = player.x - coin.x;
          const dy = player.y - coin.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 30) {
            setScore(s =>
                { const newScore = s +1;
                    if(newScore>=10) setGameSuccess(true);
                    return newScore;

                });
            return false;
          }
          return true;
        })
      );

    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Auto focus game div
  useEffect(() => {
    ref.current?.focus();
  }, []);

  const worldX = -player.x + window.innerWidth / 2;
  const worldY = -player.y + window.innerHeight / 2;

  return (
    <>
      <div
        className="w-screen h-screen overflow-hidden relative bg-black"
        onKeyDown={keyHandle}
        tabIndex={0}
        ref={ref}
      >
        <div
          className="absolute"
          style={{
            transform: `translate(${worldX}px, ${worldY}px)`,
            transition: "transform 0.1s linear"
          }}
        >
          {/* Cop */}
          <div
            className="absolute w-20 h-10  rounded "
            style={{ left: cop.x, top: cop.y, transform:`scaleX(${-flip})` }}
          ><img src={car} alt="error" /></div>

          {/* Coins */}
          {coins.map((coin, i) => (
            <div
              key={i}
              className="absolute w-6 h-6 bg-yellow-400 rounded-full border-2 border-yellow-200"
              style={{ left: coin.x, top: coin.y }}
            />
          ))}
        </div>

        {/* Score */}
        <div className="absolute top-4 left-4 text-white text-2xl font-bold">
          Score: {score}
        </div>

        {/* GAME OVER Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-6xl font-bold">
            GAME OVER
          </div>
        )}
        {gameSuccess && (
  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-6xl font-bold">
    YOU WIN!
  </div>
)}

      </div>

      {/* Player */}
     { !gameOver&&!gameSuccess && <div
        className="font-[MyFont2] absolute outline-none focus:outline-none text-6xl"
        style={{
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scaleX(${flip})`,
        }}
      >
        e
      </div>}
    </>
  );
};

export default Hard;
