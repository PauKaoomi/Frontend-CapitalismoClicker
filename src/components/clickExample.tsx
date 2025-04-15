
import { useState } from 'react'

export default function clickExample() {
  const [clicks, setClicks] = useState(0)

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <p>Has hecho clic {clicks} veces</p>
      <button
        onClick={() => setClicks(clicks + 1)}
        style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        ¡Haz clic!
      </button>
    </div>
  )
}