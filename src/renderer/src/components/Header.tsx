import { CheckCircle } from 'lucide-react'
import { JSX } from 'react'

const Header = (): JSX.Element => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <CheckCircle color="#FFD700" size={32} />
      <h1 style={{ color: 'blue' }}>My Desktop To-Do</h1>
    </header>
  )
}

export default Header