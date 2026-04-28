import React from 'react';
import GroceryItem from '../App';
import styles from './GroceryItem.module.css';

interface Props {
  item: GroceryItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
// grocery item component that displays the item name and handles toggle and delete actions
const GroceryItemComponent: React.FC<Props> = ({ item, onToggle, onDelete }) => (
  <li className={styles.itemRow}>
    <span
      className={item.isBought ? styles.bought : styles.itemName}
      onClick={() => onToggle(item.id)}
    >
      {item.name}
    </span>
    <button className={styles.deleteBtn} onClick={() => onDelete(item.id)}>Delete</button>
  </li>
);

export default GroceryItemComponent;