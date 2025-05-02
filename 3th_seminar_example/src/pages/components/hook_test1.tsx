import { useState, useEffect } from "react";

export default function HookTest1() {
  const [current, setCurrent] = useState<number>(0);
  //bgColor의 초기값을 bg-blue-400으로 설정
  const [bgColor, setBgColor] = useState<string>("bg-blue-400");

  const setCountNumber = () => {
    setCurrent((prev) => prev + 1);
  };

  const setRestNumber = () => {
    setCurrent(0);
  };

  // current 값에 따라 배경색을 변경하는 useEffect
  useEffect(() => {
    // current 값에 따라 배경색을 변경
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
  }, []);

  return (
    <div>
      {/** 배경색을 변경하는 div */}
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
