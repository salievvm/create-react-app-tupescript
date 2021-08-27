import React from 'react'

interface ITodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<ITodoFormProps> = (props) => {
    // const [title, setTitle] = React.useState<string>('');

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const ref = React.useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title);
            // setTitle('');
        }
    }

    return (
        <div className='input-field'>
            <input
                autoFocus
                // value={title}
                // onChange={changeHandler}
                ref={ref}
                onKeyPress={keyPressHandler}
                placeholder="Введите значение"
                type="text"
                id="title" />
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}