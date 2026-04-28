import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GroceryForm from './components/GroceryForm';
import GroceryList from './components/GroceryList';
import Footer from './components/Footer';
import styles from './App.module.css';

export interface GroceryItem {
  id: string;
  name: string;
  isBought: boolean;
}

export default function App() {
  const [items, setItems] = useState<GroceryItem[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const saved = localStorage.getItem('groceryList');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('groceryList', JSON.stringify(items));
  }, [items]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

const addItem = (e: React.FormEvent) => {
  e.preventDefault(); 

  if (inputValue.trim() === '') return;
  
  const newItem: GroceryItem = {
    id: crypto.randomUUID(),
    name: inputValue,
    isBought: false,
  };
  
  setItems([...items, newItem]);
  setInputValue('');
};

  const toggleBought = (id: string) => {
    setItems(items.map(i => i.id === id ? { ...i, isBought: !i.isBought } : i));
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div className={styles.container}>
      <Header />
      <GroceryForm inputValue={inputValue} onInputChange={handleInputChange} onAddItem={addItem} />
      {items.length === 0 ? (
        <p className={styles.emptyMessage}>No items added yet</p>
      ) : (
        <GroceryList items={items} onToggle={toggleBought} onDelete={deleteItem} />
      )}
      <Footer totalItems={items.length} />
    </div>
  );
}