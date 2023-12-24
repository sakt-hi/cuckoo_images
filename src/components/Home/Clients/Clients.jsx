
const Clients = () => {
  return (
    <div className='my-10 w-full flex flex-col items-center border-b'>
        <div className="client text-[28px] uppercase font-bold text-gray-400">
            Our Clients
        </div>
        <div className="client-img w-full grid grid-cols-3 md:flex flex-row justify-center gap-[7vw] grayscale my-10">
            <img className='w-24 h-24' src="src/assets/client_1.png" alt="" />
            <img className='w-24 h-[6.5rem]' src="src/assets/client_2.png" alt="" />
            <img className='w-24 h-24' src="src/assets/client_3.png" alt="" />
            <img className='w-24 h-24' src="src/assets/client_4.jpeg" alt="" />
            <img className='w-24' src="src/assets/client_5.webp" alt="" />
        </div>
    </div>
  )
}

export default Clients