import { useState } from 'react';
import './App.css'
import { data } from './assets/data';
import { type ItemProps } from './components/Item/Item'
import { List } from './components/List/List';
import { Form, type FormDataStructure } from './components/Form/Form';

function App() {
  const [tasks, setTasks] = useState<ItemProps[]>(data);

  function handleFormSubmit ({title, description, priority} : FormDataStructure) {
    setTasks(
      [ {
        title: title,
        description: description,
        done: false,
        priority: priority as 'low' | 'normal' | 'high',
      }, 
      ...data])
  }

  return (
    <>
      <h1>Úkolníček</h1>
      <hr />
      <List title="úkoly, které musím udělat:" items={tasks}/>
      <hr />
      <Form onFormSubmit={handleFormSubmit}/>
    </>
  )
}

export default App
