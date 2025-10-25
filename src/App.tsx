import { useState } from 'react';
import './App.css'
import { data } from './assets/data';
import { Item, type ItemProps } from './components/Item/Item'
import { List } from './components/List/List';
import { Form } from './components/Form/Form';

function App() {
  const [tasks, setTasks] = useState<ItemProps[]>(data);

  return (
    <>
      <h1>Úkolníček</h1>
      <Form />
      <hr />
      <List title="úkoly, které fakt hoří:" items={tasks}/>
    </>
  )
}

export default App
