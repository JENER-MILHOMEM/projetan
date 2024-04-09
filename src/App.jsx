import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './assets/pages/home'
import Contato from './assets/pages/contato'
import Empresa from './assets/pages/empresa'
import Projeto from './assets/pages/projeto'
import Footer from './assets/comp/footer'
import Navbar from './assets/comp/navbar'
import ProjetoNovo from './assets/pages/newprojects'

function App() {

  return (
      <Router >
        <Navbar/>
        <Routes>

          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/contato' element={<Contato/>}/> 
          <Route exact path='/empresa' element={<Empresa/>}/> 
          <Route exact path='/projeto' element={<Projeto/>}/> 
          <Route exact path='/novoprojeto' element={<ProjetoNovo/>}/>

        </Routes>
        
        <Footer/>
      </Router>
  )
}

export default App
