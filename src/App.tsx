import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/NavBar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interface';

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

    return (
        <div>
            <Navbar />
            <div className="container ph2">
                <TodoForm onAdd={addHandler} />
                <TodoList todos={todos} />
            </div>
        </div>
    );
}

export default App;
