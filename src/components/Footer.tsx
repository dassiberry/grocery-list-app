import React from 'react';
import styles from './Footer.module.css';

interface Props {
  totalItems: number;
}
//footer component displays the number of items in the grocery list
const Footer: React.FC<Props> = ({ totalItems }) => (
  <footer className={styles.footer}>
    <p>Total Items in List: {totalItems}</p>
  </footer>
);

export default Footer;