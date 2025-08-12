import React from "react"
import { useForm, type UseFormRegisterReturn } from "react-hook-form"
const Contact = React.memo(() => {

  const fields: Record<string, string> = {
    "Your Name": "text",
    "Phone Number": "tel",
    "Email Id": "email",
  }
  const { register, handleSubmit, } = useForm()


  const onSubmit = (data: any) => {
    alert("Form submited")
    console.log(data);
  }

  const onError = (error: any) => {
    let msg = ""
    if (error.email) { msg += "Wrong Email Format\n" }
    if (error.phone) { msg += "Wrong Phone number format\n" }
    msg += "\n Please Add correct format"
    alert(msg);
  };

  const maper: Record<string, UseFormRegisterReturn> = {
    tel: register("phone", {
      required: "Phone number is required",
      pattern: {
        value: /^\+?\d{10,15}$/,
        message: "Invalid phone number format",
      },
    }),
    email: register("email", {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address",
      },
    }),
  };
  return (
    <div id="contact" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8" >
      <h1 className=" text-center text-6xl font-light text-teal-600">Get in Touch</h1>
      <form id="Contact" onSubmit={handleSubmit(onSubmit, onError)} className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col gap-4">
          {Object.entries(fields).map(([tag, _type], index) => (
            <input
              key={index}
              type={_type}
              {...maper[_type]}
              placeholder={tag}
              className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50  focus:ring-2 focus:ring-teal-500 " />
          ))}
        </div>
        <textarea placeholder="Your messsage" className="h-32 w-full resize-none rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"></textarea>
        <button className="rounded-lg border-2 border-teal-400 bg-teal-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-teal-600 ">Submit</button>
      </form>
    </div >
  )
})


export default Contact
