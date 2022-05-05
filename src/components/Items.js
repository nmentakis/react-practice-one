import Item from './Item';

const Items = ({items, getAllItems}) => {

  return (
    <ul>
      {
        items.map((item) => {
          return <Item key={item.id} item={item} getAllItems={getAllItems}/>
        })
      }
      
    </ul>
  )
}

export default Items;