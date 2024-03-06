import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { purple } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { usePagination } from 'custom-hooks-ts-lib';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteTodo, toggle } from '../../redux/operations';
import { selectVisibleTasks } from '../../redux/selectors';
import Form from '../Form';
import Button from '../Button/Button';
import s from './TodoList.module.css';

const TodoList = () => {
  const todos = useSelector(selectVisibleTasks);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(todos.length / PER_PAGE);
  const pagination = usePagination(todos, PER_PAGE);
  const dispatch = useDispatch();

  useEffect(() => {
    pagination.jumpToPage(page);
  }, [page, pagination]);

  const handlePageChange = (_, pageNumber) => {
    setPage(pageNumber);
  };

  const handleDelete = id => dispatch(deleteTodo(id));

  const handleUpdateTodo = (id, title, completed, userId) => {
    setSelectedTodo({ id, title, completed, userId });
  };

  const handleToggle = (id, title, completed, userId) =>
    dispatch(toggle({ id, title, completed, userId }));

  return (
    <div className={s.todo}>
      <Form selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />
      {todos.length > 0 ? (
        <ul className={s.list}>
          {pagination
            .getItemsToPage()
            .map(({ id, title, completed, userId }) => (
              <li className={s.point} key={id}>
                <Checkbox
                  type='checkbox'
                  onChange={() => handleToggle(id, title, completed, userId)}
                  checked={completed}
                  sx={{
                    color: purple[200],
                    '&.Mui-checked': {
                      color: purple[200],
                    },
                  }}
                />
                <p className={!completed ? s.text : `${s.text} ${s.checked}`}>
                  {title}
                </p>
                <Button
                  className={s.button}
                  onClick={() => handleUpdateTodo(id, title, completed, userId)}
                >
                  <FaEdit size={18} fill={'beige'} />
                </Button>
                <Button className={s.button} onClick={() => handleDelete(id)}>
                  <FaTrashAlt size={18} fill={'#ce93d8'} />
                </Button>
              </li>
            ))}
        </ul>
      ) : (
        <p className={s.emptyList}>No tasks</p>
      )}
      <div className={s.wrapper}>
        <Stack spacing={2}>
          {page && (
            <Pagination
              className={s.pagination}
              count={count}
              size='large'
              page={page}
              color='secondary'
              text='primary'
              variant='outlined'
              shape='rounded'
              onChange={handlePageChange}
            />
          )}
        </Stack>
      </div>
    </div>
  );
};

export default TodoList;
