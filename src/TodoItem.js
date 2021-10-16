import { FaTimes } from "react-icons/fa";
import { FaRegEdit } from 'react-icons/fa';


const TodoItem = ({ item, onDelete, onEdit }) => {
  const { id, task, day } = item
  return (
    <div className="item" key={id}>
     
      <h3>{task}</h3>
      <h4>{day}</h4>
      <div className="controls">
      <FaRegEdit className="edit" onClick={() => onEdit(id) } />
      <FaTimes className="delete" onClick={() => onDelete(id)} />
     
      </div>
     
      </div>
      
   
   
  )
}

export default TodoItem