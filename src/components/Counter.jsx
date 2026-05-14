import { useState } from 'react';
import DisplayCounter from './DisplayCounter';

export default function Counter() {
  const [count, setCount] = useState(0); 
  const [step, setStep] = useState(1);   

  const increment = () => setCount(count + step);
  
  const decrement = () => {
    setCount(prev => (prev - step < 0 ? 0 : prev - step));
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #ccc', 
      borderRadius: '12px', 
      textAlign: 'center',
      backgroundColor: '#fff'
    }}>
      <h3>Віджет лічильника</h3>

      <div style={{ marginBottom: '15px' }}>
        <label>Задати крок: </label>
        <input 
          type="number" 
          value={step} 
          onChange={(e) => setStep(Number(e.target.value))}
          style={{ width: '60px', padding: '5px', borderRadius: '4px' }}
        />
      </div>

      <DisplayCounter 
        value={count} 
        onIncrement={increment} 
        onDecrement={decrement} 
      />
    </div>
  );
}