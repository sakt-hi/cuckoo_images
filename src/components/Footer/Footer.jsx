import './Footer.css'
import IconContactUs from '../../assets/icons/IconContactUs'
import IconMail from '../../assets/icons/IconMail'
import IconFacebook from '../../assets/icons/IconFacebook'
import IconInstagram from '../../assets/icons/IconInstagram'
import IconLinkedIn from '../../assets/icons/IconLinkedIn'

const Footer = () => {
  return (
    <div className="footer px-10 md:px-24 py-16 flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start md:items-center">
        <div className="logo flex flex-col gap-4 justify-center">
            <a href='/' className="text-xl">
                <img src="src/assets/cuckoologo_white.png" className='opacity-50 w-24 md:w-32' alt="Cuckoo Images" />
            </a>
            <p className='copyrights text-gray-400 text-sm'>© Copyright 2023 Cuckoo Images. All rights reserved</p>
        </div>
        <div className="contact-info flex flex-col md:flex-row gap-10 md:gap-20 items-start">
            <div className="contact flex flex-col gap-4 justify-start items-start">
                <h4 className='text-xl font-semibold text-white border-b mb-4'>Contact</h4>
                <a href='tel:+919786493393' target='_blank' rel='noreferrer' className="phone flex items-center gap-2 text-white opacity-80">
                    <IconContactUs />
                    <p>+91 9786493393</p>
                </a>
                <a href='mailto:cuckooimages@gmail.com' target='_blank' rel='noreferrer' className="phone flex items-center gap-2 text-white opacity-80">
                    <IconMail />
                    <p>cuckooimages@gmail.com</p>
                </a>
                <div className="social flex justify-center items-center gap-2 text-white opacity-80">
                    <a href='https://www.facebook.com/people/Cuckoo-Images/100063620695881/' target='_blank' rel='noreferrer' className="">
                        <IconFacebook className='' />
                    </a>
                    <a href='https://www.instagram.com/cuckoo_images/' target='_blank' rel='noreferrer' className="">
                        <IconInstagram className='' />
                    </a>
                    <a href='https://www.linkedin.com/company/cuckoo-images/' target='_blank' rel='noreferrer' className="">
                        <IconLinkedIn className='' />
                    </a>
                </div>
            </div>
            <div className="address flex flex-col gap-4 justify-start items-start">
                <h4 className='text-xl font-semibold text-white border-b mb-2'>Address</h4>
                <a href='https://maps.app.goo.gl/R6crSSohcbDa22oE8' target='_blank' rel='noreferrer' className='leading-loose text-white opacity-80'>
                No.C17, Solai Apartment, SBI building,<br />
                near MGR garden, Poonamalle high road,<br />
                Ramapuram, Chennai-600089
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer