import { useState } from "react";

export default function HookExample1() {
  const [current, setCurrent] = useState<number>(4);

  // 버튼 클릭 시 current 값 변경
  const update = () => {
    setCurrent(5);
    // setCurrent(5): current 값을 5로 변경한다.
    // setCurrent((prev) => prev + 1);
    // setCurrent((prev) => prev + 1): current 값을 이전 상태값에 1을 더한 값으로 변경한다.
  };

  return (
    <div>
      <div className="bg-blue-400 text-6xl font-extrabold">
        현재 파드 기수는? {current}
      </div>
      <button
        className="border-2 dark:border-white border-black  pr-2 pl-2 mt-2"
        onClick={update}
      >
        업데이트
      </button>
      {/* onClick: 버튼 클릭 시 update 함수 실행 */}
    </div>
  );
}
