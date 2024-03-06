import React from 'react';
import { useSelector } from 'react-redux';
import { selectTaskCount } from '../../redux/selectors';
import styles from './Counter.module.css';

const Counter = () => {
  const { current, completed } = useSelector(selectTaskCount);

  return (
    <ul className={styles.container}>
      <li className={styles.active}>
        <p className={styles.textActive}> Current: {current}</p>
      </li>
      <li className={styles.completed}>
        <p className={styles.textCompleted}> Completed: {completed}</p>
      </li>
    </ul>
  );
};

export default Counter;
