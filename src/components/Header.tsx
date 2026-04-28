import React from 'react';
import styles from './Header.module.css';

const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <h1>My Grocery List</h1>
      <p>Organize your shopping list by adding, removing, and marking items as bought with ease!</p>
    </header>
  );
};

export default Header;