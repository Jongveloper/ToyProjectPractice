import React, { useCallback, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const plusCount = useCallback(() => {
    setCount((count) => count + 1)
  }, [])

  const minusCount = useCallback(() => {
    setCount((count) => count - 1);
  }, [])
  return (
    <div>
      <h3 data-testid='counter'>{count}</h3>
      <div>
        <button data-testid='plus-button' onClick={plusCount}>+</button>
        <button data-testid='minus-button' onClick={minusCount}>-</button>
      </div>
    </div>
  );
}

export default App;
