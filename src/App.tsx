// Hooks
import { useState } from 'react'

// Style
import './App.css'
import CollectionBar from './components/CollectionBar/CollectionBar'

// Components
import Navbar from './components/Navbar/Navbar'
import PalleteDisplay from './components/PalleteDisplay/PalleteDisplay'
import Sidebar from './components/Sidebar/Sidebar'

// Context
import { PalleteContextProvider } from './context/PalletesContext'
import GlobalStyle from './GlobalStyle'

function App() {
  const [activePage, setActivePage] = useState('New');
  const [activeSubPage, setActiveSubPage] = useState('Month');

  return (
    <main className="App">
      <PalleteContextProvider>
        <GlobalStyle />
        <Navbar />
        <section className='main-content'>
          <Sidebar
            activePage={activePage}
            setActivePage={setActivePage}
            activeSubpage={activeSubPage}
            setActiveSubpage={setActiveSubPage}
          />
          <PalleteDisplay
            activePage={activePage}
            activeSubpage={activeSubPage}
          />
          <CollectionBar />
        </section>
      </PalleteContextProvider>
    </main>
  )
}

export default App
