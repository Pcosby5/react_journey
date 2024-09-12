import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { useState } from "react";
import { nanoid } from "nanoid";



function App(props) {
  // console.log(props);

const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    // alert(name);
    const newTask = {id: `todo-${(nanoid ())}`, name, completed: false};
    setTasks([...tasks, newTask]);
  }


  function toggleCompleteTask (id) {
    const updatedTask = tasks.map((task) => {
      if(id === task.id) {
        return {...task, completed: !task.completed };

      }
      console.log(task.completed);
      return task;
    });

    setTasks(updatedTask);

  }

  function deleteTask (id) {
    console.log(id);
    const tasksLeftArray = tasks.filter((task) => id != task.id );
    setTasks(tasksLeftArray)
  }

  const taskList = tasks?.map((task) => (
    <Todo id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleCompleteTask={toggleCompleteTask}
      deleteTask={deleteTask}
    />
  ));

  const tasksNouns = taskList.length !==1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNouns} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>Todo_list</h1>

      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />

      </div>

      <h2 id="list-heading">{headingText}</h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">

        {taskList}

      </ul>

    </div>
  );
}

export default App;
