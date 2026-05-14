import { useState } from 'react';
import ShoppingItem from './ShoppingItem';

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newItem = {
      id: Date.now(),
      name: inputValue,
      quantity: 1,
      completed: false
    };

    setItems([...items, newItem]);
    setInputValue('');
  };

  const toggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #4CAF50', 
      borderRadius: '12px', 
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: '#fff'
    }}>
      <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>Список покупок</h2>
      
      <form onSubmit={addItem} style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Назва товару..."
          style={{ flexGrow: 1, padding: '8px' }}
        />
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '8px 15px', cursor: 'pointer' }}>
          Додати
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <ShoppingItem 
            key={item.id} 
            item={item} 
            onToggle={toggleItem} 
            onUpdateQuantity={updateQuantity} 
          />
        ))}
      </ul>

      {items.length > 0 && (
        <div style={{ 
          marginTop: '20px', 
          paddingTop: '10px', 
          borderTop: '2px solid #2e7d32',
          textAlign: 'right',
          fontSize: '1.2em',
          fontWeight: 'bold'
        }}>
          Усього товарів: {totalQuantity}
        </div>
      )}
    </div>
  );
}