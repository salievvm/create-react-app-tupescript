import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/NavBar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interface';

declare var confirm: (question: string) => boolean

const App: React.FC = () => {
    const [todos, setTodos] = React.useState<ITodo[]>([]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false
        }

        setTodos(prev => [newTodo, ...prev])
    }

    const deleteHandler = (id: number) => {
        const resConfirm = confirm('Вы уверены что хотите удалить задачу?');
        if (resConfirm)
            setTodos(prev => {
                return prev.filter(todo => todo.id !== id)
            })
    }

    const toggleHandler = (obTodo: ITodo) => {
        setTodos(prev => {
            return prev.map(todo => {
                if (todo.id === obTodo.id) {
                    return { ...todo, completed: !todo.completed}
                }
                return todo;
            })
        })
    }

    return (
        <div>
            <Navbar />
            <div className="container ph2">
                <TodoForm onAdd={addHandler} />
                <TodoList
                    onDelete={deleteHandler}
                    onToggle={toggleHandler}
                    todos={todos} />
            </div>
        </div>
    );
}

export default App;
