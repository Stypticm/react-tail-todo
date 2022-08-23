import React from 'react'

interface NewTodoFormProps {
  value: string,
  handleChange: React.ChangeEventHandler<HTMLInputElement>, 
  handleKeyDown: React.KeyboardEventHandler<HTMLInputElement>, 
  inputRef: React.MutableRefObject<HTMLInputElement>
}

const InputTodo: React.FC<NewTodoFormProps> = ({ value, handleChange, handleKeyDown, inputRef }) => {
  return (
    <div className="w-full">
          <div className="flex justify-center">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Create a new todo..."
              className="w-screen bg-slate-800 text-slate-400 p-5"
              onKeyPress={handleKeyDown}
              ref={inputRef}
            />
          </div>
        </div>
  )
}

export default InputTodo;