import React from 'react'
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interface';

declare var confirm: (question: string) => boolean

const jsonParse = (str: string): [] => {
    try {
        JSON.parse(str);
    } catch (e) {
        return [];
    }
    return JSON.parse(str);
}

export const TodosPage: React.FC = () => {
    const localTodos: string = localStorage.getItem('TODOS') || '[]';
    const [todos, setTodos] = React.useState<ITodo[]>(jsonParse(localTodos) as ITodo[]);

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

    React.useEffect(() => {
        localStorage.setItem('TODOS', JSON.stringify(todos))
        return () => {}
    }, [todos]);

    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList
                onDelete={deleteHandler}
                onToggle={toggleHandler}
                todos={todos} />
        </>
    )
}