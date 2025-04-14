// Hook
import { useState } from "react";

function App() {

  // variabile di stato che corrisponde ad un oggetto
  const [formPost, setFormPost] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })

  // funzione unica per la gestione dell'evento OnChange dei campi
  function handleFormPost(event) {

    setFormPost(formPost => ({
      ...formPost,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <>
      <h1>React Post Form</h1>

      <div>
        <label htmlFor="author-element">Autore </label>
        <input
          type="text"
          id="author-element"
          name="author"
          value={formPost.author}
          onChange={handleFormPost}
          placeholder="Nome dell'autore" />
      </div>
    </>
  )
}

export default App;