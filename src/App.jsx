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

    const checkboxValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setFormPost(formPost => ({
      ...formPost,
      [event.target.name]: event.target.value
    }))

  }

  // funzione per creare nuovo post tramite chiamata all'API
  function createPost(event) {
    event.preventDefault();
    console.log('Ho creato un nuovo post');
  }

  //

  return (
    <>
      <h1>React Post Form</h1>
      <form onSubmit={createPost}>
        <div>
          <label htmlFor="author-element">Autore del post </label>
          <input
            type="text"
            id="author-element"
            name="author"
            value={formPost.author}
            onChange={handleFormPost}
            placeholder="Nome dell'autore" />
        </div>

        <hr />

        <div>
          <label htmlFor="title-element">Titolo del post </label>
          <input
            type="text"
            id="title-element"
            name="title"
            value={formPost.title}
            onChange={handleFormPost}
            placeholder="Titolo del post" />
        </div>

        <hr />

        <div>
          <label htmlFor="body-element">Contenuto del post </label>
          <input
            type="text"
            id="body-element"
            name="body"
            value={formPost.body}
            onChange={handleFormPost}
            placeholder="Contenuto del post" />
        </div>

        <hr />

        <div>
          <label htmlFor="public-element">Post pubblico? </label>
          <input
            type="checkbox"
            id="public-element"
            name="public"
            checked={formPost.public}
            onChange={handleFormPost} />
        </div>

        <hr />

        <button>Crea post</button>
      </form>

    </>
  )
}

export default App;