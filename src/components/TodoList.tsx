import React from 'react'
import { ITodo } from './../interface';

type TodoListProps = {
    todos: ITodo[],
    onDelete(id: number): void
    onToggle(obTodo: ITodo): void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => {
    if (todos.length === 0) {
        return <p className="center">Пока нет дел</p>
    }

    const deleteHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();

        onDelete(id);
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo'];
                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li key={todo.id} className={classes.join(' ')}>
                        <label >
                            <input 
                                type="checkbox" 
                                checked={todo.completed} 
                                onChange={onToggle.bind(null, todo)}
                                />
                            <span>{todo.title}</span>
                            <i 
                                onClick={event => deleteHandler(event, todo.id)} 
                                className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}