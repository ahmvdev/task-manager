import "./index.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  const allTasks = task.map((t) => <li key={t}>{t}</li>);

  const addTask = (formData) => {
    const gotInput = formData.get("tasks");
    setTask((prevTasks) => [...prevTasks, gotInput]);
  };

  return (
    <>
      <form action={addTask}>
        <div className="flex justify-center pt-10">
          <input placeholder="enter your task here" name="tasks"></input>
          <button>Add Task</button>
        </div>
      </form>
      <div className="flex flex-col items-center pt-10 ">
        <div>{allTasks}</div>
      </div>
    </>
  );
}

export default App;
