import Filter from '../Filter/Filter';
import Counter from '../Counter/Counter';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.wrapper}>
      <section className={s.section}>
        <h2 className={s.title}>Tasks</h2>
        <Counter />
      </section>
      <section className={s.section}>
        <h2 className={s.title}>Filter by status</h2>
        <Filter />
      </section>
    </header>
  );
};

export default AppBar;
