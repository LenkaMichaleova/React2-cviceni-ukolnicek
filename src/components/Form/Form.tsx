import { useState } from 'react'
import './Form.css'

export interface FormDataStructure {
    title: string;
    description: string;
    priority?: string;
}

export function Form () {
  const [formData, setFormData] = useState<FormDataStructure>({
    title: '',
    description: '',
    priority: 'normal',
  })

  function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('odeslano', formData)
  }

  function handleChange(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
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
      <label>
        <p>priorita</p>
        <select 
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="low">Nízká</option>
          <option value="normal">Normální</option>
          <option value="high">Vysoká</option>
        </select>
      </label>
      <button type="submit">Přidat</button>
    </form>
    </>
  )
}
