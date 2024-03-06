import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CgAddR } from 'react-icons/cg';
import { addTodo, update } from '../../redux/operations';
import Button from '../Button/Button';
import s from './Form.module.css';

const Form = ({ selectedTodo, setSelectedTodo }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
    } else {
      setTitle('');
    }
  }, [selectedTodo]);

  const handleChangeForm = e => {
    setTitle(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (selectedTodo) {
      dispatch(update({ ...selectedTodo, title: title }));
      setSelectedTodo(null);
    } else {
      const todo = {
        userId: 1,
        title: title,
        completed: false,
      };
      dispatch(addTodo(todo));
    }

    setTitle('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmitForm}>
      <input
        className={s.input}
        type='text'
        name='title'
        value={title}
        maxLength='30'
        autoComplete='off'
        placeholder='Add New Task'
        onChange={handleChangeForm}
      />
      <Button className={s.button} type='submit' aria-label='Add task'>
        <CgAddR size={20} fill={'var(--light-color)'} />
      </Button>
    </form>
  );
};

export default Form;
