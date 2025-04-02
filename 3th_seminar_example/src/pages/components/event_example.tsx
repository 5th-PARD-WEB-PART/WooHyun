import { useState } from "react";

export default function EventExample() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(inputValue);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-extrabold position: absolute top-8 left-0 right-0 text-center">
        3th Event 실습 코드
      </h1>
      <input
        className=" border-2 border-black dark:border-white rounded-md mb-2 p-2"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button
        className=" font-extrabold bg-blue-300"
        onClick={handleButtonClick}
      >
        Display Alert
      </button>
    </div>
  );
}
