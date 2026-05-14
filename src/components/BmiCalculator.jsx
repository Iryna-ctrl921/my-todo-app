import { useState } from 'react';
import BmiResult from './BmiResult';

export default function BmiCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      return bmiValue;
    }
    return null;
  };

  const bmi = calculateBmi();

  return (
    <div style={{ 
      padding: '25px', 
      border: '2px solid #3498db', 
      borderRadius: '15px', 
      maxWidth: '350px',
      margin: '20px auto',
      backgroundColor: '#fdfdfd',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Калькулятор ІМТ</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Зріст (см):</label>
        <input 
          type="number" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Наприклад: 175"
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Вага (кг):</label>
        <input 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Наприклад: 70"
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <BmiResult bmi={bmi} />
    </div>
  );
}