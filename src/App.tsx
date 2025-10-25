import { useState } from 'react';
import './App.css'
import { data } from './assets/data';
import { Item, type ItemProps } from './components/Item/Item'
import { List } from './components/List/List';

function App() {
  const [tasks, setTasks] = useState<ItemProps[]>(data);

  return (
    <>
      <h1>Úkolníček</h1>
      <Item title='Úkol 1' description='popis prvního úkolu' done={false} />
      <Item title='Úkol 2' description='popis druhého úkolu' done={true} />
      <Item title='Úkol 3' description='popis třetího úkolu' done={false} />
      <hr />
      <List title="úkoly, které fakt hoří:" items={tasks}/>
    </>
  )
}

export default App
