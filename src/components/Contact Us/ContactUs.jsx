
import IconContactUs from '../../assets/icons/IconContactUs'
import IconMail from '../../assets/icons/IconMail'
import IconFacebook from '../../assets/icons/IconFacebook'
import IconInstagram from '../../assets/icons/IconInstagram'
import IconLinkedIn from '../../assets/icons/IconLinkedIn'
import { BiSend } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'

const ContactUs = () => {
    const fields = [
        { name: "fullName", label: "Full Name", type: "text", required: true },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          pattern: /^\S+@\S+$/i,
        },
        { name: "message", label: "Message", type: "textarea", required: true },
    ];

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
        toast.success(`Thank You, We'll get back to you soon`);
        reset();
    };



  return (
    <div className='px-10 md:px-24 my-10 space-y-10'>
        <div className="wrap mx-2 md:mx-20 flex flex-col md:flex-row justify-between gap-12">
            <div className="contact-info flex flex-col gap-10 order-2 md:order-1">
                <div className="contact flex flex-col gap-4 justify-start items-start">
                    <h4 className='text-xl font-semibold border-b-2 border-amber-400 mb-4'>Contact Info</h4>
                    <a href='tel:+919786493393' className="phone flex items-center gap-2 opacity-80">
                        <IconContactUs />
                        <p>+91 9786493393</p>
                    </a>
                    <a href='mailto:cuckooimages@gmail.com' className="phone flex items-center gap-2 opacity-80">
                        <IconMail />
                        <p>cuckooimages@gmail.com</p>
                    </a>
                    <div className="social mt-4 flex justify-center items-center gap-2 opacity-80">
                        <a href='https://www.facebook.com/people/Cuckoo-Images/100063620695881/' className="">
                            <IconFacebook className='' />
                        </a>
                        <a href='https://www.instagram.com/cuckoo_images/' className="">
                            <IconInstagram className='' />
                        </a>
                        <a href='https://www.linkedin.com/company/cuckoo-images/' className="">
                            <IconLinkedIn className='' />
                        </a>
                    </div>
                </div>
                <div className="address flex flex-col gap-4 justify-start items-start">
                    <h4 className='text-xl font-semibold border-b-2 border-amber-400 mb-2'>Address</h4>
                    <p className='leading-loose opacity-80'>
                    No.C17, Solai Apartment, SBI building,<br />
                    near MGR garden, Poonamalle high road,<br />
                    Ramapuram, Chennai-600089
                    </p>
                </div>
                <div className="map w-full h-60">
                <iframe
                    className='max-w-full h-60'
                    title="Cuckoo Images Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2143176522927!2d80.17867187456523!3d13.022019787298005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526195001bb765%3A0xe0b63bcfcff497cf!2sCuckoo%20images!5e0!3m2!1sen!2sin!4v1703416107403!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </div>
            <div className="form flex flex-col items-start gap-8 order-1 md:order-2">
                <h4 className='text-xl font-semibold border-b-2 border-amber-400 mb-2'>Get In Touch</h4> 
                <form
                    className="flex flex-col justify-start items-center min-w-auto w-full md:min-w-96"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {fields.map((field) => (
                    <div
                        key={field.name}
                        className={`${
                        field.type === "textarea"
                            ? "mb-6"
                            : "grid grid-cols-1 mb-6 gap-3"
                        } w-full`}
                    >
                        <div className="text-left flex flex-col  gap-2 w-full">
                        <label className="font-semibold">{field.label}</label>
                        {field.type === "textarea" ? (
                            <textarea
                            {...register(field.name, { required: field.required })}
                            className="border border-gray-300 bg-white text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 pb-16 px-4 md:py-3 md:pb-16 md:px-4 md:mb-0 focus:border-amber-500"
                            placeholder={`Type ${field.label.toLowerCase()}...`}
                            ></textarea>
                        ) : (
                            <input
                            {...register(field.name, {
                                required: field.required,
                                pattern: field.pattern,
                            })}
                            className="border border-gray-300 bg-white text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-amber-500"
                            type={field.type}
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                            />
                        )}
                        </div>
                    </div>
                    ))}
                    <div className="w-full text-left">
                    <button
                        className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-black text-white text-sm font-bold rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-amber-400 hover:text-black lg:m-0 md:w-max md:px-6"
                        title="Send"
                        type="submit"
                    >
                        <span>Send</span>
                        <BiSend />
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs