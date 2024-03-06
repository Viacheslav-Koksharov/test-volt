import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { selectStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/filtersSlice';
import Button from '../Button/Button';
import s from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={s.wrapper}>
      <Button
        className={s.button}
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        className={s.button}
        selected={filter === statusFilters.current}
        onClick={() => handleFilterChange(statusFilters.current)}
      >
        Current
      </Button>
      <Button
        className={s.button}
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

export default Filter;
