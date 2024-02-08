import React from 'react'
import {TodoProvider} from "../store/TodoContext";
import Form from "../components/Form";
import RenderTodos from "../components/RenderTodos";
import "../style.css";


const App = () => {
  return (
    <TodoProvider>
	<main className="h-dvh flex justify-center items-center text-white flex-col">
		<Form />
		<RenderTodos />
	</main>
	</TodoProvider>
  )
}

export default App