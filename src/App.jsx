import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Profile from './Components/Profile'
import Services from './Components/Services'

function App() {

  return (
    <>
      <main>
        <NavBar/> 
        <About/>
        {/* <Services/>
        {/* <Home/>
        <Contact/>
        <Footer/>  */}
      </main>
    </>
  )
}

export default App
