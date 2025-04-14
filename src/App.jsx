// Hook
import { useState } from "react";
// Axios
import axios from "axios";

const endpoint = ' https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts';

function App() {

  // variabile che contiene lo stato iniziale 
  const initialFormPost = {
    author: '',
    title: '',
    body: '',
    public: false
  }

  // variabile di stato che corrisponde ad un oggetto
  const [formPost, setFormPost] = useState(initialFormPost);

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

    // chiamata con axios all'endpoint indicato e variabile useState che sarà aggiornata
    axios.post(endpoint, formPost)
      .then(response => {
        console.log(response.data)

        // alert per avvisare il client che l'operazione è andata a buon fine
        alert('La creazione del post è andata a buon fine!');

        setFormPost(initialFormPost);

      })
      .catch(error => {
        // alert per avvisare il client che l'operazione non è andata a buon fine
        alert('Ops..Qualcosa è andato storto!')
      })
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