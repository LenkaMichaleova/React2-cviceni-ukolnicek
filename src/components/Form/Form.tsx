import './Form.css'

export function Form () {
  function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('odeslano')
  }

  return (
    <>
    <h2>Zadat nový úkol</h2>
    <form className="task-form" onSubmit={handleSubmit}>
      <label>
        <p>název úkolu</p>
        <input type="text" name="title" />
      </label>
      <br />
      <label>
        <p>popis úkolu</p>
        <textarea name="description" />
      </label>
      <button type="submit">Přidat</button>
    </form>
    </>
  )
}