/** @jsxImportSource solid-js */

import {createSignal} from "solid-js";

export function Counter() {
    const [count, setCount] = createSignal(0);
    return (
        <button class="p-3 rounded bg-gray-200 border hover:bg-gray-300" type="button"
                onClick={() => setCount(count => count + 1)}>{count()}</button>
    );
}