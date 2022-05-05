
import axios from 'axios';
import {useState} from 'react';

const TodoCreator = ({ getAllItems }) => {

  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post("http://localhost:3001/api/items", {content: userInput})
      .then(response => {
        getAllItems();
        setUserInput("");
      });

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoCreator">Add a new todo: </label>
      <input 
        id="todoCreator"
        type="text"
        value={userInput}
        onChange={handleChange}
      />
      <button type="submit">Add item</button>
    </form>
  )
}


export default TodoCreator;