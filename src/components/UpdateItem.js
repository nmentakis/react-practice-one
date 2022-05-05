import axios from 'axios';
import {useState} from 'react';

const UpdateItem = ({item, getAllItems, returnToItem}) => {
  const [updateInput, setUpdateInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.patch("http://localhost:3001/api/items/" + item.id, {content: updateInput, completed:false})
      .then(response => {
        //get updated item list
        getAllItems();
        //clear the input box
        setUpdateInput("");
        returnToItem();
      })

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="updateInput">Enter updated todo: </label>
      <input 
        id="updateInput"
        type="text"
        value={updateInput}
        onChange={(event) =>  setUpdateInput(event.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  )
}


export default UpdateItem;