import client1 from '../../../assets/client_1.png'
import client2 from '../../../assets/client_2.png'
import client3 from '../../../assets/client_3.png'
import client4 from '../../../assets/client_4.jpeg'
import client5 from '../../../assets/client_5.webp'

const Clients = () => {
  return (
    <div className='my-10 w-full flex flex-col items-center border-b'>
        <div className="client text-[28px] uppercase font-bold text-gray-400">
            Our Clients
        </div>
        <div className="client-img w-full grid grid-cols-3 md:flex flex-row justify-center gap-[7vw] grayscale my-10">
            <img className='w-24 h-24' src={client1} alt="" />
            <img className='w-24 h-[6.5rem]' src={client2} alt="" />
            <img className='w-24 h-24' src={client3} alt="" />
            <img className='w-24 h-24' src={client4} alt="" />
            <img className='w-24' src={client5} alt="" />
        </div>
    </div>
  )
}

export default Clients