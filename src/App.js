import{BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
import Services from "./Services"
import About from "./About"
import Products from "./Products"
import Contact from "./Contact"
function App(){
  return(
    <BrowserRouter>
    <nav>
      <Link to="/" className='link'> Home </Link> 
      <Link to="/about" className='link'> About Us </Link>
      <Link to="/services" className='link'> Services </Link>
      <Link to="/products" className='link'> Products </Link>
      <Link to="/contact" className='link'> Contact Us </Link> 
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='/services' element={<Services/>}/>
      <Route path='/products' element={<Products/>}/>    
      <Route path='/contact' element={<Contact/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}
export default App