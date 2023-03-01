import { useState } from "react";

function App(){
  // state (donne)
  const [fruits, setfruits] = useState([
    {id: 1, nom: "Abricot"},
    {id: 2, nom: "Banane"},
    {id: 3, nom: "Carise"}
  ])

  // Comportement
  const handleDelete = (id) => {
    console.log(id)
    // copie du state
    const fruitsCopy = fruits.slice();

    // Manipuler le state
    const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id)

    // Modifier le state
    setfruits(fruitsCopyUpdated)
  }

  // affichage
  return (
  <div>
    <h1>Liste de Fruits</h1>
    <ul>
      {fruits.map((fruit) =>
          <li key={fruit.id}>
          {fruit.nom} <button onClick={() => handleDelete(fruit.id)}>X</button>
          </li>
        )}
    </ul>
    <form action="submit">
        <input type="text" placeholder/>
    </form>
  </div>
  )
}


export default App;

