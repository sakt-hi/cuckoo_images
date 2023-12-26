import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Pricing from './components/Pricing/Pricing';
import ContactUs from './components/Contact Us/ContactUs';
import ScrollToTop from './ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Careers from './components/Careers/Careers';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div className='app-cont w-full h-[100vh] flex flex-col justify-between'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/careers' element={<Careers/>} />
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
        <FloatingWhatsApp phoneNumber='919786493393' accountName='Cuckoo Images' avatar='src/assets/cuckoologo.png' />
        <Footer></Footer>
      </div>
    </Router>
    
  )
}

export default App
