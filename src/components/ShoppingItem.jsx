export default function ShoppingItem({ item, onToggle, onUpdateQuantity }) {
  return (
    <li style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: '10px',
      borderBottom: '1px solid #eee',
      textDecoration: item.completed ? 'line-through' : 'none',
      color: item.completed ? '#888' : '#000'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input 
          type="checkbox" 
          checked={item.completed} 
          onChange={() => onToggle(item.id)} 
        />
        <span>{item.name}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <button onClick={() => onUpdateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
        <span style={{ minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
      </div>
    </li>
  );
}