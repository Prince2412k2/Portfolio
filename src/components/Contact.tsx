import React from "react"
const Contact = React.memo(() => {

  const fields: Record<string, string> = {
    "Your Name": "text",
    "Phone Number": "tel",
    "Email Id": "email",
  }
  const pattern: Record<string, Array<string>> = {
    "text": ["^[a-zA-Z ]+$", "No special Character or Numbers allowed"],
    "tel": ["^\\+?\\d+$", "Only digits and plus sign allowed"],
    "email": ["^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", "follow the 'example@provider.com'"]
  }
  return (
    <div id="contact" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8" >
      <h1 className=" text-center text-6xl font-light text-teal-600">Get in Touch</h1>
      <form id="Contact" onSubmit={() => console.log("Submmited")} className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col gap-4">
          {Object.entries(fields).map(([tag, _type], index) => (
            <input
              title={pattern[_type][1]}
              key={index}
              type={_type}
              required
              pattern={pattern[_type][0]}

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
