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

// manages the grocery list's state 
export default function App() {
  const [items, setItems] = useState<GroceryItem[]>(() => {
    const saved = localStorage.getItem('groceryList');
    return saved ? JSON.parse(saved) : [];
  });

  // state for the input field value
  const [inputValue, setInputValue] = useState<string>('');

  // save the grocery list to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('groceryList', JSON.stringify(items));
  }, [items]);

  // handles changes in the input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  // adds a new item to the grocery list and prevents empty submissions
  const addItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim() === '') return;

    //creates a new grocery item with ID, name, and if bought status
    const newItem: GroceryItem = {
      id: crypto.randomUUID(),
      name: inputValue,
      isBought: false,
    };

    setItems([...items, newItem]);
    setInputValue('');
  };

  // mark items as bought 
  const toggleBought = (id: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, isBought: !item.isBought } : item
    ));
  };

  // delete items from the list
  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

// structure of the site
  return (
    <div className={styles.container}>
      <Header/>
      <GroceryForm
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onAddItem={addItem}
      />

      {items.length === 0 ? (
        <p className={styles.emptyMessage}>No items added yet</p>
      ) : (
        <GroceryList
          items={items}
          onToggle={toggleBought}
          onDelete={deleteItem}
        />
      )}

      <Footer totalItems={items.length} />
    </div>
  );
}