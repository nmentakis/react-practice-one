import axios from 'axios';
import {useState} from 'react';
import UpdateItem from './UpdateItem';

const Item = ({item, getAllItems}) => {

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = () => {
    axios.patch("http://localhost:3001/api/items/" + item.id, {completed: !item.completed})
      .then(response => getAllItems());
  }
  
  const handleClick = () => {
    axios.delete("http://localhost:3001/api/items/" + item.id)
      .then(response => getAllItems());
  }

  const returnToItem = () => {
    setIsEditing(false)
  }

  if (isEditing) {
    return <UpdateItem item={item} getAllItems={getAllItems} returnToItem={returnToItem}/>
  } else {
    return (
      <li>
        <span>
          {
            item.completed ? <del>{item.content}</del> : item.content
          }
        </span>
        <input type="checkbox" checked={item.completed} onChange={handleChange}/>
        <button onClick={handleClick}>Delete todo </button>
        <button onClick={() => setIsEditing(true)}>Edit todo</button>
      </li>
    )
  }
}

export default Item;