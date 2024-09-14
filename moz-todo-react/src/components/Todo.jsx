import { useState, useRef, useEffect } from "react";


function usePrevious(value) {
    const ref = useRef();
    useEffect(()=> {
        ref.current = value;
    });

    return value;
}

function Todo(props) {
    // console.log(props);
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");
    const editButtonRef = useRef("null");
    const editFieldRef = useRef("null");
    // console.log(editButtonRef.current);
    // console.log(editFieldRef.current);
    const wasEditing = usePrevious(isEditing);

    // here, current value of wasEditing will always be the previous value of isEditing (false)
    // console.log(wasEditing);




    function handleChange (e) {
        setNewName(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }
    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
                New name for {props.name}
            </label>
            <input
            id={props.id}
            className="todo-text"
            type="text"
            value={newName}
            onChange={ handleChange }
            ref={editFieldRef}
            />
            </div>

            <div className="btn-group">
            <button

            type="button"
            className="btn todo-cancel"
            onClick={() => setEditing(false)}>
            Cancel
            <span className="visually-hidden">renaming {props.name}</span>

            </button>

            <button type="submit" className="btn btn__primary todo-edit">
                Save
                <span className="visually-hidden">new name for {props.name}</span>
            </button>

            </div>
        </form>
);
    const viewTemplate = (
    <div className="stack-small">
        <div className="c-cb">
        <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleCompleteTask(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
            {props.name}
        </label>
        </div>

        <div className="btn-group">
        <button
            type="button"
            className="btn"
            onClick={() => setEditing(true)}
            ref={editButtonRef}>
            Edit <span className="visually-hidden">{props.name}</span>
        </button>

        <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}>
            Delete <span className="visually-hidden">{props.name}</span>
        </button>
        </div>
    </div>
    );

    useEffect(() => {
        if(!wasEditing && isEditing) {
            editFieldRef.current.focus();
        }
        else if(wasEditing && !isEditing) {
            editButtonRef.current.focus();
        }
    }, [wasEditing, isEditing]);


    return (
        <li className="todo">
            { isEditing ? editingTemplate : viewTemplate }
        </li>
    );
}

export default Todo;
