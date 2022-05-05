import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoCreator from './components/TodoCreator';
import Items from './components/Items';



const App = () => {
  const [items, setItems] = useState([]);


  //set up a get request to get all todos
  useEffect( () => {
    // fetch("http://localhost:3001/api/items")
    getAllItems();
  }, []);


  const getAllItems = () => {
    axios.get("http://localhost:3001/api/items")
      .then(res =>{
        setItems(res.data);
      });
  }


  return (
    <div>
      <TodoCreator getAllItems={getAllItems}/>
      <Items items={items} getAllItems={getAllItems}/>
    </div>
  );
}




export default App;
