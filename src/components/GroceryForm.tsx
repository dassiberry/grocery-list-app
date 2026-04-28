import React from 'react';
import styles from './GroceryForm.module.css';

interface Props {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddItem: (e: React.FormEvent) => void;
}

// grocery form component that allows users to input new items and add them to the list
const GroceryForm: React.FunctionComponent<Props> = ({ inputValue, onInputChange, onAddItem }) => {
  return (
    <form onSubmit={onAddItem} className={styles.form}>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Add item..."
        className={styles.input}
      />
      <button className={styles.button}
        type="submit">Add</button>
    </form>
  );
};

export default GroceryForm;