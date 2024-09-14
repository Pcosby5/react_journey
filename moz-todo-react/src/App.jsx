import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}


const filterMap = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

// Use Object.keys to get filter names correctly
const filterNames = Object.keys(filterMap);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleCompleteTask(id) {
    const updatedTask = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTask);
  }

  function deleteTask(id) {
    const tasksLeftArray = tasks.filter((task) => id !== task.id);
    setTasks(tasksLeftArray);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  // Filter tasks based on the current filter (All, Active, Completed)
  const taskList = tasks
    .filter(filterMap[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleCompleteTask={toggleCompleteTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  // Generate the filter buttons (All, Active, Completed)
  const filterList = filterNames.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNouns = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNouns} remaining`;
  const listHeadingRef = useRef(null);

  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {

    if (tasks.length < prevTaskLength) {
      listHeadingRef.current.focus();
    }}, [tasks.length, prevTaskLength]);


  return (
    <div className="todoapp stack-large">
      <h1>Todo_list</h1>

      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">{filterList}</div>

      <h2
        id="list-heading"
        tabIndex = "-1"
        ref={listHeadingRef}>
        {headingText}
      </h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
