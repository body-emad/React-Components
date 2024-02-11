import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Study German", "Study Spanish"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index === 0) return; // No need to move if it's already at the top
    const updatedTasks = [...tasks];
    const temp = updatedTasks[index];
    updatedTasks[index] = updatedTasks[index - 1];
    updatedTasks[index - 1] = temp;
    setTasks(updatedTasks);
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return; // No need to move if it's already at the bottom
    const updatedTasks = [...tasks];
    const temp = updatedTasks[index];
    updatedTasks[index] = updatedTasks[index + 1];
    updatedTasks[index + 1] = temp;
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list-container">
      <h1>To Do List App</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a New Task..."
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <div key={index}>
            <li>
              <span className="text">{task}</span>
            </li>
            <button onClick={() => deleteTask(index)} className="delete-task">
              Delete Task
            </button>
            <button onClick={() => moveTaskUp(index)} className="move-up">
              UP
            </button>
            <button onClick={() => moveTaskDown(index)} className="move-down">
              DOWN
            </button>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
