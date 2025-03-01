import "./index.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  const deleteTask = (formData) => {
    const taskToDelete = Number(formData.get("index"));
    const updatedTasks = task.filter((_, index) => index !== taskToDelete);
    setTask(updatedTasks);
  };

  const allTasks = task.map((t, index) => (
    <form className="flex justify-between" key={index} action={deleteTask}>
      <input type="checkbox" className="mr-5" id={index} />
      <label id={index}>{t}</label>
      <button className="pl-5 hover:cursor-pointer">X</button>
    </form>
  ));

  const addTask = (formData) => {
    const gotInput = formData.get("tasks");
    setTask((prevTasks) => [...prevTasks, gotInput]);
  };

  return (
    <>
      <form action={addTask}>
        <div className="flex justify-center pt-10">
          <input placeholder="enter your task here" name="tasks"></input>
          <button className="hover:cursor-pointer">Add Task</button>
        </div>
      </form>
      <div className="flex flex-col items-center pt-10 ">
        <div>{allTasks}</div>
      </div>
    </>
  );
}

export default App;
