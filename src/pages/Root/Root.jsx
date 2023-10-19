import {Outlet} from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import './Root.css'

const Root = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Root