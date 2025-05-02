"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>{"Loading..."}</div>;
}