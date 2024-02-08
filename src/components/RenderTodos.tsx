import React from 'react'
import { useTodos } from '../store/TodoContext'

const RenderTodos = () => {
const { todos, removeTodo, isCompletedTodo } = useTodos();

  
function renderTasks() {
  let renderedTasks;

  if (todos.length > 0) {
    renderedTasks = todos.map((value, index) => (
      <div key={ index } className={ `relative flex items-center justify-between ${value.text.length >= 50 ? "mr-4 hover:mr-3" : ""}` }>
        <div className={ `flex justify-between items-center  py-2 px-2 w-full my-2 mx-2  bg-opacity-10 border-opacity-25  border-2 rounded-md duration-500` } >
          <div className={ `flex justify-around items-center me-4 gap-4 w-[80%]` }>
            <div className="checkbox-wrapper">
              <input checked={ value.completed } onChange={ () => isCompletedTodo(value.id) } type="checkbox" />
              <svg viewBox="0 0 35.6 35.6">
                <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
              </svg>
            </div>
            <div className='w-[90%]'>
              <p className={ `text-white text-2xl  select-none  ${value.text.length >= 50 ? "truncate hover:whitespace-normal" : ""}  ${value.completed ? "line-through text-opacity-25" : ""}` }>{ value.text }</p>
            </div>
          </div>          
          <div className={ `items-center gap-4 flex` } >
            <button onClick={ () => { removeTodo(value.id); } }  className='button'>
              <svg viewBox='0 0 448 512' className='svgIcon hover:dark:drop-shadow-[0_0_0.3rem_#ffffff70]'>
                <path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    ));
  } else {
    renderedTasks = <h1 className='pt-12 text-3xl text-center text-gray-400 text-opacity-60'>No Task Available</h1>;
  }

  return renderedTasks;
}
  

  return (
    <div className='relative min-w-[480px] w-2/3 h-[30rem] mt-12 bg-opacity-80 no-scrollbar bg-black outline-2 border-2 border-dashed border-x-4 border-y-white border-x-blue-500 rounded-lg overflow-auto'>
    {renderTasks()}
    </div>
  )
}

export default RenderTodos