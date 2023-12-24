import {useState, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import IconHome from '../../assets/icons/IconHome';
import IconAbout from '../../assets/icons/IconAbout';
import IconProjects from '../../assets/icons/IconProjects';
import IconPricing from '../../assets/icons/IconPricing';
import IconBlogs from '../../assets/icons/IconBlogs';
import IconContactUs from '../../assets/icons/IconContactUs';
import cuckooImageLogo from '../../assets/cuckoologo_white.png'

const Navbar = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    // You can adjust these values based on your design requirements
    const smallScreenSize = 600; // Example: set a threshold for small screens
    const largeScreenSize = 1200; // Example: set a threshold for large screens

    // Get the window width
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Determine the image size based on screen width
    let imageSize = '38%'; // Default size
    if (screenWidth <= smallScreenSize) {
        imageSize = '25%'; // Adjust the size for small screens
    } else if (screenWidth <= largeScreenSize) {
        imageSize = '30%'; // Adjust the size for medium screens
    }

    function showDropdownOptions() {
        document.getElementById("options").classList.toggle("hidden");
    }

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        console.log(location.pathname)
      };
    }, [currentPath]);

    return (
        <div className={`${currentPath==='/'?'fixed':'sticky bg-black'} top-0 w-full ${scrollY > 100 && currentPath==='/' ? 'bg-black' : 'bg-transparent'}`} style={{ zIndex: '1000' }}> 
            <header className="lg:px-24 px-4 flex flex-col md:flex-row items-center justify-between py-4">
                <div className="logo-div flex flex-row w-[90%] md:w-auto justify-between">
                    <div className="flex justify-between items-center">
                        <a href='/' className="text-xl">
                            <img src={cuckooImageLogo} style={{width:imageSize,height:'auto'}} alt="Cuckoo Images" />
                        </a>
                    </div>

                    <button onClick={showDropdownOptions} className="pointer-cursor md:hidden flex flex-row justify-between items-center w-auto px-2 py-2 text-gray-700 bg-none border-2 border-none rounded-md shadow focus:outline-none ">
                        <svg className="fill-current text-white"
                            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>

                <ul id='options' className='flex md:hidden list-none flex-col gap-8 items-start bg-black text-white w-[100%] p-8'>
                    <li>
                    <NavLink to="/" exact='true' className="md:py-2 px-0 flex items-center gap-1.5" activeClassName="active">
                        <IconHome /> Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/about" className="md:py-2 px-0 flex items-center gap-1.5" activeClassName="active">
                        <IconAbout /> About
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/projects" className="md:py-2 px-0 flex items-center gap-1.5" activeClassName="active">
                        <IconProjects /> Projects
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/pricing" className="md:py-2 px-0 flex items-center gap-1.5" activeClassName="active">
                        <IconPricing /> Pricing
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/blog" className="md:py-2 px-0 flex items-center gap-1.5" activeClassName="active">
                        <IconBlogs /> Blog
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact" className="md:py-2 px-0 flex items-center gap-1.5 md:mb-0 mb-2" activeClassName="active">
                        <IconContactUs /> Contact Us
                    </NavLink>
                    </li>
                </ul>

                <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between gap-8 text-lg text-white pt-4 md:pt-0">
                        <li>
                        <NavLink to="/" exact='true' className="md:py-2 px-0 flex items-center gap-1.5 hover:border-b hover:border-white" activeClassName="active">
                            <IconHome /> Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/about" className="md:py-2 px-0 flex items-center gap-1.5 hover:border-b hover:border-white" activeClassName="active">
                            <IconAbout /> About
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/projects" className="md:py-2 px-0 flex items-center gap-1.5 hover:border-b hover:border-white" activeClassName="active">
                            <IconProjects /> Projects
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/pricing" className="md:py-2 px-0 flex items-center gap-1.5 hover:border-b hover:border-white" activeClassName="active">
                            <IconPricing /> Pricing
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/blog" className="md:py-2 px-0 flex items-center gap-1.5 hover:border-b hover:border-white" activeClassName="active">
                            <IconBlogs /> Blog
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact" className="md:py-2 px-0 flex items-center gap-1.5 md:mb-0 mb-2 hover:border-b hover:border-white" activeClassName="active">
                            <IconContactUs /> Contact Us
                        </NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
