import { NavLink } from 'react-router-dom';

const Pricing = () => {
    const logoPackage=[
        {   
            title:'Basic',
            logoDesigns:'2',
            variations:'Color',
            typesOfDesign:'2D',
            payment:'50% Advance',
            fileSrc:'PDF, JPG, AI',
            correction:'300',
            initialDesign:'2-3 days'
        },
        {   
            title:'Professional',
            logoDesigns:'2',
            variations:'Color, Font',
            typesOfDesign:'2D',
            payment:'50% Advance',
            fileSrc:'PDF, JPG, AI',
            correction:'300',
            initialDesign:'4-6 days'
        },
        {   
            title:'Premium',
            logoDesigns:'3',
            variations:'Color, Font',
            typesOfDesign:'3D, Typography, Unique',
            payment:'50% Advance',
            fileSrc:'PDF, JPG, AI',
            correction:'300',
            initialDesign:'4-6 days'
        }
    ];

    const socialMedia=[
        {
            title:'Profile Optimization One Time',
            info:'Page Setup / Optimization,Updating Brand & Company Profile Info,Profile & Cover Pictures,Creating Service & Product Description if any,Organize Page Tabs'
        },
        {
            title:'Page Management Monthly',
            info:'Initial Consultation,Create Content Calendar,Creating X no of posts per month inclusive of graphic design,Generate Monthly Reports'

        },
        {
            title:'Ads Management On Demand',
            info:'Ad account setup,Brand Awareness Ad,Lead Generation Ad,Conversation Ad,Geneate Monthly Reports'
        }
    ];

    const bookCover=[
        {
            title:'Basic',
            coverDesigns:'1',
            variations:'-',
            typesOfDesign:'2D',
            payment:'50% Advance',
            initialDesign:'4-5 days'
        },
        {
            title:'Professional',
            coverDesigns:'2',
            variations:'Color',
            typesOfDesign:'2D, Typography, Stock Images',
            payment:'50% Advance',
            initialDesign:'4-5 days'
        },
        {
            title:'Premium',
            coverDesigns:'3',
            variations:'Color',
            typesOfDesign:'3D, Typography, Stock Images',
            payment:'50% Advance',
            initialDesign:'6-7 days'
        },
        {
            title:'Premium Plus',
            coverDesigns:'3',
            variations:'Color',
            typesOfDesign:'3D, Typography, Stock Images, Unique Custom Illustration',
            payment:'50% Advance',
            initialDesign:'6-7 days'
        },
    ]

  return (
    <div className='px-10 md:px-24 my-10 space-y-10'>
        <div className="title">
            <h4 className='text-[40px] uppercase font-bold opacity-50 border-b-2 border-gray-300'>Pricing</h4>
        </div>
        <div className="logo flex flex-col gap-8 items-start overflow-x-auto">
            <h4 className='font-semibold text-[24px] pb-2 border-b-2 border-amber-400 sticky z-10 left-0'>Logo Package</h4>
            <div className="details flex gap-10 overflow-x-auto">
                <div className="card1 flex flex-col gap-4 p-6 px-2 md:px-6">
                    <h6 className='text-xl font-semibold pb-2' >Specifications</h6>
                    <ul className='flex flex-col gap-5'>
                        <li>Logo Designs</li>
                        <li>Variations</li>
                        <li>Types of Design Covered</li>
                        <li>Payment Terms</li>
                        <li>Ready File Source</li>
                        <li>Correction Charges</li>
                        <li>Initial Design Will Be</li>
                    </ul>
                </div>
                {logoPackage.map((logo,index)=>(
                    <div key={index} className='flex flex-col gap-4 min-w-60 md:min-w-72 rounded-md border border-amber-400 p-6'>
                        <h6 className='text-[24px] font-bold'>{logo.title} </h6>
                        <ul className="flex flex-col gap-5 font-medium">
                            <li>{logo.logoDesigns}</li>
                            <li>{logo.variations} </li>
                            <li>{logo.typesOfDesign} </li>
                            <li>{logo.payment} </li>
                            <li>{logo.fileSrc} </li>
                            <li>{logo.correction} </li>
                            <li>{logo.initialDesign} </li>
                        </ul>
                    </div>
                ))}
            </div>
            <div className='w-full my-4 flex flex-row gap-2 items-center justify-center sticky z-10 left-0'>
                <h6 className='text-xl font-medium'>Need More Info?</h6>
                <NavLink to={'/contact'} className="relative inline-flex items-center px-6 py-2 overflow-hidden text-md font-medium text-amber-500 border border-amber-500 rounded-full hover:text-black group hover:bg-gray-50">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-amber-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="relative font-semibold">Enquire Now</span>
                </NavLink>
            </div>
        </div>
        <div className="social-media flex flex-col gap-8 items-start overflow-x-auto">
            <h4 className='font-semibold text-[24px] pb-2 border-b-2 border-amber-400 sticky z-10 left-0'>Social Media Marketing Services</h4>
            <div className="scmcard flex flex-row justify-between gap-10 overflow-x-auto">
                {socialMedia && socialMedia.map((item,index)=>(
                    <div key={index} className='border-2 rounded-lg min-w-80'>
                        <div className="title p-6 bg-black text-white font-semibold rounded-t-lg">
                            <h2>{item.title} </h2>
                        </div>
                        <ul className="list-disc p-6 px-10 space-y-4">
                            {item.info.split(',').map((point, index) => (
                                <li key={index} className="mb-2">
                                {point.trim()}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className="logo flex flex-col gap-8 items-start overflow-x-auto">
            <h4 className='font-semibold text-[24px] pb-2 border-b-2 border-amber-400 sticky z-10 left-0'>Book Covers</h4>
            <div className="details flex gap-10 overflow-x-auto">
                <div className="card1 flex flex-col gap-4 p-6 px-2 md:px-6 min-w-56">
                    <h6 className='text-xl font-semibold pb-2' >Cover Details</h6>
                    <ul className='flex flex-col gap-7'>
                        <li>Book Cover Designs</li>
                        <li>Variations</li>
                        <li>Types of Design Covered</li>
                        <li>Payment Terms</li>
                        <li>Initial Design Will Be</li>
                    </ul>
                </div>
                {bookCover.map((book,index)=>(
                    <div key={index} className='flex flex-col gap-4 min-w-60 md:min-w-40 rounded-md border border-gray-400'>
                        <div className="title bg-black rounded-t-md p-4 px-6">
                            <h6 className='text-[20px] text-white font-semibold'>{book.title} </h6>
                        </div>
                        <ul className="flex flex-col gap-3 mb-8 font-medium">
                            <li className='px-6'>{book.coverDesigns}</li><hr />
                            <li className='px-6'>{book.variations} </li><hr />
                            <li className='px-6 min-h-12'>{book.typesOfDesign} </li><hr />
                            <li className='px-6'>{book.payment} </li><hr />
                            <li className='px-6'>{book.initialDesign} </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Pricing