/** @jsxImportSource react */
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      className="rounded border bg-gray-200 p-3 hover:bg-gray-300"
      type="button"
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      {count}
    </button>
  );
}
