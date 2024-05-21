import { useCallback, useState } from "react";

export default function useCallbackPage() {
  const [count, setCount] = useState(0);

  // この関数は、コンポーネントが再レンダリングするたびに再作成される。
  const handleClick = () => {
    console.log(`Button clicked ${count} times`);
  };

  // この関数は、count が変更されたときだけ再作成される。
  const handleClickUseCallback = useCallback(() => {
    console.log(`Button clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <h1>useCallback Example</h1>
      <div className="flex gap-2">
        <button onClick={handleClick}>Click Me (normal)</button>
        <button onClick={handleClickUseCallback}>Click Me (useCallback)</button>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      <p>Button clicked {count} times</p>
    </div>
  );
}
