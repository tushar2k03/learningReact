import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Chai aur React with Tushar</h1>
      <p>Count: {count}</p>
      <button onClick={()=> setCount(count+1)}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(0)}>Reset Button</button>
    </div>
  );
}

export default App;

