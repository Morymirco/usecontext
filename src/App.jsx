import { useState } from 'react'
import { CountProvider } from './compteur/countcontext'
import Counter from './compteur/compteur'

function App() {
  

  return (
    <CountProvider>
		 <Counter />
	</CountProvider>
  )
}

export default App


