import { useState } from "react";

export default function RandomNumber() {
  const [num, setNum] = useState(0);

  const generate = () => {
    const random = Math.floor(Math.random() * 100); // 0–99
    setNum(random);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={generate}>New Number</button>
    </div>
  );
}