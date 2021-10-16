import React from 'react'
import { useState, useEffect } from 'react'
import Todo from './Todo'
import AddForm from './AddForm'
import uniqid from 'uniqid';
import Alert from './Alert';
import {Helmet} from "react-helmet";


const getLocalStorage = () => {
  let allTasks = localStorage.getItem('allTasks');
  if (allTasks) {
    return (allTasks = JSON.parse(localStorage.getItem('allTasks')));
  } else {
    return [];
  }
};




const App = () => {

 const [allTasks, setAllTasks] = useState(getLocalStorage());
 const [editing, setEditing] = useState(false);
 const [editItem, setEditItem] = useState({});
 const [editId, setEditId] = useState(null);
 const [alert, setAlert] = useState({ show: false, msg: '', type: '' });


const handleDelete = (id) => {
setAllTasks(allTasks.filter((item) => item.id !== id))
showAlert(true, 'deleting', 'item removed!');
}


const handleEdit = (id) => {
  setEditing(true);
  const specificItem = allTasks.find((item) => item.id === id);
  setEditId(id);
  setEditItem(specificItem);
 

}


const showAlert = (show = false, type = '', msg = '') => {
  setAlert({ show, type, msg });
};


const handleClearAll = () => {
  setAllTasks([]);
}






 const handleSubmit = ({task, day }) => {
  let updTask = task;
  let updDay = day

  if(editing) {

    setAllTasks(allTasks.map((item) => {
      if(item.id === editId) {
        return {id: editId, task: updTask, day: updDay};
      } else {
        return item
      }
    }))
    setEditing(false)
    setEditItem({})
    setEditId(null)
    showAlert(true, 'editing', 'item updated!');

  

   
    
   
   
 

  } else {


    let newId = uniqid()
    let newItem = { id: newId, task, day }
    setAllTasks([...allTasks, newItem])
    showAlert(true, 'success', 'item added!');



  }
  
 
  
 }

 useEffect(() => {
  localStorage.setItem('allTasks', JSON.stringify(allTasks));
}, [allTasks]);


  return (
    <>
       <Helmet>
        <title>Task Tracker</title>
        <meta name="description" content="Task Tracker" />
    </Helmet>
    <div className="container">
    <div className="wrap">
    

    {alert.show && <Alert {...alert} removeAlert={showAlert} allTasks={allTasks} />}
    
      <AddForm onAdd={handleSubmit} editing={editing} editing={editing} editItem={editItem} editing={editing}/>
      <Todo allTasks={allTasks} onDelete={handleDelete} onEdit={handleEdit} onRemove={handleClearAll}/>
    </div>
    </div>
      
    </>
  )
}

export default App
