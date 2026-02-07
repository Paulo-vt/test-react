import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Compteur simple</h1>
      <p style={{ fontSize: '2rem', margin: '1rem 0' }}>{count}</p>
      <div>
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <button onClick={() => setCount(c => c + 1)} style={{ marginLeft: '1rem' }}>+</button>
      </div>
    </div>
  );
}

export default App;
