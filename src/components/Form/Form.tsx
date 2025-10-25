import { useState } from 'react'
import './Form.css'

export interface FormDataStructure {
    title: string;
    description: string;
}

export function Form () {
  const [formData, setFormData] = useState<FormDataStructure>({
    title: '',
    description: '',
  })

  function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('odeslano', formData)
  }

  function handleChange(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
    <h2>Zadat nový úkol</h2>
    <form className="task-form" onSubmit={handleSubmit}>
      <label>
        <p>název úkolu</p>
        <input 
          type="text" 
          name="title"
          placeholder='název úkolu'
          value={formData.title} 
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <p>popis úkolu</p>
        <textarea 
          name="description"
          placeholder='popis úkolu'
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Přidat</button>
    </form>
    </>
  )
}
