import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { dellItem, saveItem } from '../../features/todoListSlice';
import { TextArea } from '@blueprintjs/core';


const Styles = styled.div`
  .todo {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar input {
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px 0 0 5px;
  width: 70%;
  
}

.search-bar button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  
}

.search-bar button:hover {
  background-color: #218838;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 100%;
  max-width: 800px;
}

.modal-content input {
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  width: 70%;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.modal-content button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
}

.modal-content button:first-of-type {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
}

.modal-content button:first-of-type:hover {
  background-color: #218838;
}

.modal-content button:last-of-type {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
}

.modal-content button:last-of-type:hover {
  background-color: #c82333;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  padding: 10px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

ul li:last-child {
  border-bottom: none;
}

ul li button {
  padding: 5px 10px;
  font-size: 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

ul li button:hover {
  background-color: #c82333;
}

`;

function Todolist() {
    const [searchTerm, setSearchTerm] = useState("");
    const [newTaskText, setNewTaskText] = useState("");
    const [isAddingTask, setIsAddingTask] = useState(false);
  
    const dispatch = useDispatch();
    const listArr = useSelector((state) => state.todolist.items); 
  
    const handleAddTask = () => {
      setIsAddingTask(true);
    };
  
    const handleSaveTask = () => {
      if (newTaskText.trim()) {
        dispatch(saveItem(newTaskText)); 
        setNewTaskText("");
        setIsAddingTask(false);
      }
    };
  
    const handleDeleteTask = (id) => {
      dispatch(dellItem(id)); 
    };
  
    const filteredTasks = listArr
      ? listArr.filter((task) =>
          task.text.toLowerCase().includes(searchTerm.toLowerCase()) 
        )
      : [];
  
    return (
      <Styles>
        <div className="todo">
          <h1>To-Do List</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleAddTask}>+</button>
          </div>
          {isAddingTask && (
            <div className="modal">
              <div className="modal-content">
                <TextArea
                  type="text"
                  placeholder="Enter task text"
                  value={newTaskText}
                  style={{ width: "100%" }}
                  onChange={(e) => setNewTaskText(e.target.value)}
                />
                <div><button onClick={handleSaveTask}>Save</button>
                <button onClick={() => setIsAddingTask(false)}>Cancel</button></div>
              </div>
            </div>
          )}
          <ul>
            {filteredTasks.map((task) => (
              <li key={task.id}>
                {task.text} 
                <button onClick={() => handleDeleteTask(task.id)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </Styles>
    );
  }
  
  export default Todolist;