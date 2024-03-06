import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './redux/operations.js';
import Container from './components/Container';
import TodoList from './components/TodoList';
import AppBar from './components/AppBar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Container>
      <h1>ToDo List</h1>
      <AppBar />
      <TodoList />
    </Container>
  );
};

export default App;
