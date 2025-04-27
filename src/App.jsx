import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer/Footer.jsx'
import { Header } from './Components/Header/Header.jsx'
import { OfferBanner } from './Components/OfferBanner/OfferBanner.jsx'


function App() {


  return(
    <div className="flex flex-col min-h-screen">
      <OfferBanner />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
