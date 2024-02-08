import React, { useState, type FormEvent } from 'react'
import { useTodos } from '../store/TodoContext'

const Form = () => {
    const { addTodo } = useTodos();

    const [Text, setText] = useState("");

    function submitHandler(e:FormEvent<HTMLFormElement>) {
      if (Text !== "") {
        e.preventDefault();
        addTodo(Text);
        setText("");
      } else {
        e.preventDefault();
      }
    }

  return (
    <form className="flex gap-x-5 w-[450px]" aria-label="todoList-form" onSubmit={ submitHandler }>
      <div className="flex-1">
        <input
          type="text"
          placeholder="What do you have planned?"
          className="w-full p-4 pl-8 font-mono bg-transparent border-2 border-white rounded-l-full outline-none"
          value={ Text }
          required
          onChange={ (e) => {
            setText(e.target.value)
          } }
        />
      </div>
      <button className="flex-shrink-0 px-6 py-3 font-medium text-blue-400 duration-75 ease-in bg-transparent border border-blue-400 rounded-r-full hover:border-none hover:outline-dashed hover:brightness-200 hover:text-blue-600 hover:border-blue-600">
        Add Task
      </button>
    </form>
  )
}

export default Form