import React from 'react';
import GroceryItemComponent from './GroceryItem';
import GroceryItem from '../App';

interface Props {
  items: GroceryItem[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const GroceryList: React.FC<Props> = ({ items, onToggle, onDelete }) => (
  <>
    <ul>
      {items.map(item => (
        <GroceryItemComponent key={item.id} item={item} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  </>
);

export default GroceryList;