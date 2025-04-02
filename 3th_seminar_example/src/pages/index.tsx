import React from "react";
import EventExample from "./components/event_example";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <EventExample />
      {/* 이벤트 실습 예제 */}
    </div>
  );
}
