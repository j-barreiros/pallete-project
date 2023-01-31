// Hooks
import { useEffect, useState } from 'react'

// Router
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

// Style
import './App.css'

// Components
import Navbar from './components/Navbar/Navbar'
import PalleteDisplay from './components/PalleteDisplay/PalleteDisplay'
import Sidebar from './components/Sidebar/Sidebar'
import CollectionBar from './components/CollectionBar/CollectionBar'

// Context
import { PalleteContextProvider } from './context/PalletesContext'
import GlobalStyle from './GlobalStyle'

// Pages
import CreatePallete from './pages/Create/CreatePallete'
import PalletePage from './pages/PalletePage/PalletePage'
import CollectionPage from './pages/CollectionPage/CollectionPage'
import PopularMonth from './pages/Popular/PopularMonth'
import PopularYear from './pages/Popular/PopularYear'
import PopularAllTime from './pages/Popular/PopularAllTime'

function App() {
  const [activePage, setActivePage] = useState('New');
  const [activeSubpage, setActiveSubpage] = useState('Month');

  return (
    <main className="App">
      <PalleteContextProvider>
        <GlobalStyle />
        <section className='main-content'>
          <BrowserRouter>
            <Navbar />
            <Sidebar
              activePage={activePage}
              activeSubpage={activeSubpage}
              setActiveSubpage={setActiveSubpage}
            />
            <Routes>
              <Route path='/' element={<PalleteDisplay activePage={activePage} activeSubpage={activeSubpage} />} />
              <Route path='/popular/month' element={<PopularMonth />} />
              <Route path='/popular/year' element={<PopularYear />} />
              <Route path='/popular/allTime' element={<PopularAllTime />} />
              <Route path='/collection' element={<CollectionPage />} />
              <Route path='/add' element={<CreatePallete />} />
              <Route path='/pallete/:palleteId' element={<PalletePage />} />
            </Routes>
            <CollectionBar />
          </BrowserRouter>
        </section>
      </PalleteContextProvider>
    </main>
  )
}

export default App