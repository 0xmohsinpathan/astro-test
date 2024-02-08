'use client';

import React, { createContext, useState, useContext } from 'react'

type Todo = {
  id: string;
  text: string;
  completed: boolean;
  completedStyle: string;
}

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  isCompletedTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextType | null>(null);


export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Learn React', completed: false, completedStyle: ' border-yellow-700 bg-yellow-400' },
    { id: '2', text: 'Learn TypeScript', completed: false, completedStyle: ' border-yellow-700 bg-yellow-400' },
    { id: '3', text: 'Learn Astro', completed: false, completedStyle: ' border-yellow-700 bg-yellow-400' },
  ])

  const addTodo = (text: string): void => {
    setTodos([{ id: Date.now().toString(), text, completed: false, completedStyle: ' border-yellow-700 bg-yellow-400' }, ...todos])
  }

  const removeTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id != id))
  }

  const isCompletedTodo = (id: string): void => {
    setTodos(todos.map((todo) => todo.id == id ? { ...todo, completed: !todo.completed, completedStyle: !todo.completed ? ' border-green-700 bg-green-400' : ' border-yellow-700 bg-yellow-400'} : todo))
  }

  return (
    <TodoContext.Provider value={ { todos, addTodo, removeTodo, isCompletedTodo } }>
      { children }
    </TodoContext.Provider>
  )
}




export const useTodos = () => {
  const todoValues = useContext(TodoContext)

  if (!todoValues) {
    throw new Error('useTodos must be used within a TodoProvider')
  }

  return todoValues
}