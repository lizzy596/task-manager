import React from 'react'
import TodoItem from './TodoItem'

const Todo = ({ allTasks, onDelete, onEdit, onRemove }) => {
  return (
    
       <div className="wrapper">
         <h1 className="title">Tasks</h1>
    {allTasks.map((item) => <TodoItem key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />)}
     {allTasks.length > 0 && <button className="btn clear" onClick={onRemove}>Clear All Items</button>}
      </div>

    
 
    
  )
}

export default Todo
