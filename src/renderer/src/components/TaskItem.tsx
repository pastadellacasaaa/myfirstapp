import { Trash2 } from 'lucide-react'
import { JSX } from 'react'

// This "Interface" tells TypeScript exactly what data App.tsx is allowed to send
interface TaskItemProps {
  task: string;
  done: boolean;      // Add this line
  onToggle: () => void; // Add this line
  onDelete: () => void;
}

const TaskItem = ({ task, done, onToggle, onDelete }: TaskItemProps): JSX.Element => {
  return (
    <li className={done ? 'done' : ''} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Link the checkbox to the onToggle function */}
      <input 
        type="checkbox" 
        checked={done} 
        onChange={onToggle} 
      />
      
      <span style={{ flex: 1, textDecoration: done ? 'line-through' : 'none' }}>
        {task}
      </span>

      <button className="delete" onClick={onDelete} style={{ cursor: 'pointer' }}>
        <Trash2 size={16} color="#ff4d4d" />
      </button>
    </li>
  )
}

export default TaskItem