import { BiSend } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'

const Careers = () => {
    const careerForm = [
        { name: "fullName", label: "Full Name", type: "text", required: true },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          pattern: /^\S+@\S+$/i,
        },
        { name: "portfolio", label: "Porfolio / Resume Link", type: "text", required: true },
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
    <div className="px-10 md:px-24 my-10 space-y-10">
        <div className="form flex flex-col items-start gap-6">
            <h4 className="text-[32px] font-semibold border-b-2 border-amber-400 mb-4">Join with us</h4>
            <form
                    className="flex flex-col justify-start items-center min-w-auto w-full md:w-2/4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {careerForm.map((field) => (
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
                        <span>Submit</span>
                        <BiSend />
                    </button>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default Careers