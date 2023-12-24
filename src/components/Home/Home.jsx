import Banner from './Banner/Banner'
import Clients from './Clients/Clients'
import { NavLink } from 'react-router-dom';
import IconLogo from '../../assets/icons/IconLogo';
import IconBook from '../../assets/icons/IconBook';
import IconIllustration from '../../assets/icons/IconIllustration';
import IconBrochure from '../../assets/icons/IconBrochure';
import IconTshirt from '../../assets/icons/IconTshirt';
import './Home.css'

const Home = () => {
    const projectData = [
        {
          icon: <IconLogo className='scale-150 text-gray-800' />,
          title: 'Logo Design',
          description: 'Iconic branding capturing essence with creativity and strategy.',
        },
        {
          icon: <IconBook className='scale-150 text-gray-800' />,
          title: 'Book Covers',
          description: 'Transforming narratives into captivating and aesthetically appealing visuals.',
        },
        {
          icon: <IconIllustration className='scale-150 text-gray-800' />,
          title: 'Illustrations',
          description: 'Bespoke artistic designs bringing stories and concepts to vibrant life.',
        },
        {
          icon: <IconBrochure className='scale-150 text-gray-800' />,
          title: 'Brochures',
          description: 'Expertly designed visuals and content for impactful communication.',
        },
        {
            icon: <IconTshirt className='scale-150 text-gray-800' />,
            title: 'T-Shirts',
            description: 'Unique designs merging style with expressive identity statements.',
        },
    ];
  return (
    <div className='flex flex-col w-full'>
        <Banner/>
        <div className="wrap mx-10 md:mx-28 flex flex-col gap-6">
            <Clients/>
            <div className="about mb-5 flex flex-col justify-start items-start border-b pb-16">
                <h2 className='text-[32px] border-b-2 border-amber-400 font-bold'>About Us</h2>
                <p className='leading-loose my-6'>
                    At Cuckoo Images, we are passionate about design and dedicated to creating visually stunning and functional solutions. We are a leading design firm that specialises in providing a wide range of creative services to meet the unique needs of our clients. Whether you are looking for a captivating logo, a beautifully designed website, or eye-catching marketing materials, we have the talent and creativity to bring your vision to life. Also, we are passionate about all things typography. As specialists in typographic design, we bring a wealth of knowledge and expertise to help you create visually stunning and impactful designs.
                </p>
                <NavLink to={'/about'} className="relative inline-flex items-center px-10 py-2 overflow-hidden text-lg font-medium text-black border border-black rounded-full hover:text-black hover:border-transparent group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-amber-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative font-semibold text-[16px]">Read More</span>
                </NavLink>
            </div>
            <div className="projects mb-20 flex flex-col justify-start items-start gap-10">
                <h2 className='text-[32px] border-b-2 border-amber-400 font-bold'>Projects</h2>
                <div className="proj-types w-full flex flex-col md:flex-row justify-between gap-6">
                {projectData.map((project, index) => (
                    <div key={index} className="card group py-10 w-90 md:w-60 px-8 cursor-pointer border border-gray-200 rounded-lg flex flex-col gap-6 justify-start items-start shadow-xl hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
                        <div className="icons flex bg-gray-100 p-3 rounded-md">
                            {project.icon}
                        </div>
                        <h4 className='text-[24px] text-gray-900 font-semibold group-hover:underline group-hover:text-white transition-colors duration-300 ease-in-out'>{project.title}</h4>
                        <p className='text-base'>
                            {project.description}
                        </p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home