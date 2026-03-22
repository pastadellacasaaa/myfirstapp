import { useState, useEffect, JSX } from 'react'
import './App.css'

import Header from './components/Header'
import TaskItem from './components/TaskItem'
import { Plus } from 'lucide-react'

interface Todo {
id: number
text: string
done: boolean
}
function App(): JSX.Element {
const [todos, setTodos] = useState<Todo[]>([])
const [input, setInput] = useState('')
// Load from localStorage when app opens
useEffect(() => {
const saved = localStorage.getItem('todos')
if (saved) setTodos(JSON.parse(saved))
}, [])
// Save to localStorage whenever todos change
useEffect(() => {
localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])
const addTodo = (): void => {
if (!input.trim()) return
setTodos(prev => [...prev, { id: Date.now(), text: input.trim(), done:
false }])
setInput('')
}
const toggleTodo = (id: number): void =>
setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
const deleteTodo = (id: number): void =>
setTodos(prev => prev.filter(t => t.id !== id))
return (
    <div className="app">
      {/* 1. Use the Header component instead of <h1> */}
      <Header />

      <div className="input-row">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
          placeholder="What needs to be done?"
        />
        {/* 2. Use the Plus icon inside your button */}
        <button onClick={addTodo}>
          <Plus size={16} /> Add
        </button>
      </div>

      {todos.length === 0 && (
        <p className="empty">No todos yet, add one above!</p>
      )}

      <ul>
        {todos.map(todo => (
          /* 3. Use TaskItem instead of the <li> block */
          <TaskItem 
            key={todo.id} 
            task={todo.text} 
            done={todo.done} 
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)} 
          />
        ))}
      </ul>

      {todos.length > 0 && (
        <p className="summary">
          {todos.filter(t => t.done).length} of {todos.length} done
        </p>
      )}
    </div>
  )
}
export default App