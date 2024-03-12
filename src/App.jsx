import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
// import { MaintenanceBanner } from './components/MaintenanceBanner'

function App() {
  return (<>
    <div className='App'>
      {/* <MaintenanceBanner /> */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  </>
  )

}

export default App
