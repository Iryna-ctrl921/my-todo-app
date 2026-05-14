export default function DisplayCounter({ value, onIncrement, onDecrement }) {
  const counterStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: value >= 50 ? 'red' : 'black', 
    margin: '10px 0'
  };

  return (
    <div>
      <div style={counterStyle}>{value}</div>
      <button onClick={onIncrement} style={btnStyle}>+</button>
      <button onClick={onDecrement} style={btnStyle}>-</button>
    </div>
  );
}

const btnStyle = { padding: '5px 20px', fontSize: '1.2rem', cursor: 'pointer', margin: '0 5px' };