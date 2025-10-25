import './App.css'
import { Item } from './components/Item/Item'

function App() {
  return (
    <>
      <h1>Úkolníček</h1>
      <Item title='Úkol 1' description='popis prvního úkolu' done={false} />
      <Item title='Úkol 2' description='popis druhého úkolu' done={true} />
      <Item title='Úkol 3' description='popis třetího úkolu' done={false} />
    </>
  )
}

export default App
