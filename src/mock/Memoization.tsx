import React, { useCallback, useMemo, useState } from "react";

const Memoization = () => {
  const [inputValue, setInputValue] = useState("");
  // Memoized Component example
  const MemoizedComponent = React.memo(function ({ value }: { value: string }) {
    console.log("Rendering MemoizedComponent");
    return <div>{value}</div>;
  });
  // useMemo and useCallback examples
  const expensiveCalculation = useMemo(() => {
    return inputValue.length * 1000; // Dummy expensive calculation
  }, [inputValue]);

  const memoizedCallback = useCallback(() => {
    console.log("Callback with input:", inputValue);
  }, [inputValue]);

  //...........

  return (
    <>
      <h2>Memoization Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* Memoization with useMemo and useCallback */}
      <div>
        <h2>Memoization Example</h2>
        <p>Expensive Calculation Result: {expensiveCalculation}</p>
        <button onClick={memoizedCallback}>Trigger Callback</button>
      </div>

      {/* Memoized Component */}
      <div>
        <h2>Memoized Component Example</h2>
        <MemoizedComponent value={inputValue} />
      </div>
    </>
  );
};

export default Memoization;
