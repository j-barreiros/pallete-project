// Hooks
import { useState } from 'react'

// Style
import './App.css'

// Components
import Navbar from './components/Navbar/Navbar'
import PalleteDisplay from './components/PalleteDisplay/PalleteDisplay'

// Context
import { PalleteContextProvider } from './context/PalletesContext'

function App() {

  return (
    <main className="App">
      <PalleteContextProvider>
        <Navbar />
        <section>
          <PalleteDisplay />
        </section>
      </PalleteContextProvider>
    </main>
  )
}

export default App
