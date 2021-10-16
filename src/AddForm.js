import { useState, useEffect } from 'react'

const AddForm = ({ onAdd, editItem, editing }) => {

  const [task, setTask] = useState('')
  const [day, setDay] = useState('')




useEffect(() => {
  const {task, day} = editItem;
  setTask(task);
  setDay(day);
}, [editItem])




  const handleAdd = (e) => {
    e.preventDefault()
    onAdd({task, day})
    setTask('')
    setDay('')
  }



  return (
    <form onSubmit={handleAdd}>

      <div className="form-control">
      <label>Task:
      </label>
      <input 
      type='text'
      value={task}
      onChange={(e) => setTask(e.target.value)}
      />
      
      </div>

      <div className="form-control">
      <label>Day & Time:
      </label>
      <input 
      type='text'
      value={day}
      onChange={(e) => setDay(e.target.value)}
      />
      
      </div>

    

     


        <button className="btn submit">{editing ? 'Edit' : 'Submit'}</button>

       


      
    
    
     
    </form>
  )
}

export default AddForm