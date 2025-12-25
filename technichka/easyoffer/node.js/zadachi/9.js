Найти ошибки в данном коде

import React, { useState } from 'react';

export const MyComponent = ({ title }) => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    count += 1;
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount()}>Click me!</button>
      <p>{props.subtitle}</p>
    </div>
  );
};