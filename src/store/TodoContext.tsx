'use client';

import React, { createContext, useState, useContext } from 'react'

type Todo = {
  id: string;
  text: string;
  completed: boolean;
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
    { id: '1', text: 'Learn React', completed: false },
    { id: '2', text: 'Learn TypeScript', completed: false },
    { id: '3', text: 'Learn Astro', completed: false },
  ])

  const addTodo = (text: string): void => {
    setTodos([{ id: Date.now().toString(), text, completed: false }, ...todos])
  }

  const removeTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id != id))
  }

  const isCompletedTodo = (id: string): void => {
    setTodos(todos.map((todo) => todo.id == id ? { ...todo, completed: !todo.completed } : todo))
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