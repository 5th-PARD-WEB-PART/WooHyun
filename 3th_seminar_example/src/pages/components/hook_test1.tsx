import { useState, useEffect } from "react";

export default function HookTest1() {
  const [current, setCurrent] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>("bg-blue-400");

  const setCountNumber = () => {
    setCurrent((prev) => prev + 2);
  };

  const setRestNumber = () => {
    setCurrent(0);
  };

  // current 값에 따라 배경색을 변경하는 useEffect
  useEffect(() => {
    if (current >= 30) {
      setBgColor("bg-red-400");
    } else if (current >= 20) {
      setBgColor("bg-green-400");
    } else if (current >= 10) {
      setBgColor("bg-yellow-400");
    } else {
      setBgColor("bg-blue-400");
    }

    if (current !== 0 && current % 10 === 0) {
      console.log(`🎉 ${current}을(를) 넘었습니다!`);
    }
  }, [current]);

  return (
    <div>
      <div
        className={`${bgColor} text-6xl font-extrabold transition-colors duration-500`}
      >
        Add even number: {current}
      </div>
      <div>
        <button
          className="border-2 dark:border-white border-black pr-2 pl-2 mt-2"
          onClick={setCountNumber}
        >
          +2
        </button>
        <button
          className="border-2 dark:border-white border-black pr-2 pl-2 mt-2"
          onClick={setRestNumber}
        >
          0
        </button>
      </div>
    </div>
  );
}
