import IconVision from '../../assets/icons/IconVision'
import IconMission from '../../assets/icons/IconMission'

const About = () => {

    // const works=[
    //     {
    //         img:'',
    //         title:'',
    //         desc:''
    //     }
    // ]

  return (
    <div className='px-10 md:px-24 my-10 space-y-10'>
        <div className="our-story flex flex-col items-start gap-8">
            <h4 className='font-semibold text-[28px] pb-2 border-b-2 border-amber-400'>Our Story</h4>
            <p className='text-lg leading-loose'>
                Cuckoo images were initially started in 2018 as a company. It was started with a motive <b>“a simple design could speak out loud”</b>. We believe that powerful design has the ability to captivate, inspire, and leave a lasting impact. Our journey fueled by a passion for creativity and a desire to provide exceptional design solutions to our clients.
            </p>
        </div>
        <hr />
        <div className="vision-mission flex flex-col md:flex-row justify-between gap-6">
            <div className="basis-1/2 our-vision bg-white shadow-xl rounded-lg border border-gray-200 p-10 flex flex-col items-start gap-8">
                <div className="w-full flex justify-between">
                    <h4 className='font-semibold text-[28px]'>Our Vision</h4>
                    <div className="icon flex items-center rounded-full p-2 bg-gray-200">
                        <IconVision className='text-gray-600' width='2em' height='2em' />
                    </div>
                </div>
                <p className='text-lg leading-loose'>
                    Our vision is to extent a massive innovative way of designing and to establish a huge revolution in graphic designing field worldwide
                </p>
            </div>
            <div className="basis-1/2 our-mission bg-white shadow-xl rounded-lg border border-gray-200 p-10 flex flex-col items-start gap-8">
                <div className="w-full flex justify-between">
                    <h4 className='font-semibold text-[28px]'>Our Mission</h4>
                    <div className="icon flex items-center rounded-full p-2 bg-gray-200">
                        <IconMission className='text-gray-600' width='2em' height='2em' />
                    </div>
                </div>
                <p className='text-lg leading-loose'>
                    Our mission is open doors for creative students and creators to learning and creating innovative designs.
                </p>
            </div>
        </div>
        <div className="works">

        </div>
        <hr />
    </div>
  )
}

export default About