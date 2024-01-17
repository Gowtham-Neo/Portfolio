import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [message, setmessage] = useState(false);
   
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jw9w378",
        "template_3vy3hxu",
        form.current,
        "WPCAJ856QUhi1jvC0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setmessage(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="items-center min-h-screen mt-5 md:mt-20 md:bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-200"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center md:items-center">
        <h1 className="font-serif text-3xl font-bold md:mt-20 text-amber-500">
          Contact
        </h1>
        <span className="mt-2 font-serif md:ml-2 md:mt-0">Get In Touch</span>
      </div>
      <div className="flex flex-col justify-center gap-8 my-10 md:flex-row ">
        <div className="flex flex-col items-center justify-center gap-3 p-5">
          <div className="flex flex-col items-center p-4 border border-black rounded-xl">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="mb-2"
            >
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
            </svg>
            <h2 className="font-serif">Email</h2>
            <h2 className="font-serif">s.gowtham.engr@gmail.com</h2>
            <a
              href="mailto:s.gowtham.engr@gamil.com"
              className="font-semibold text-orange-700 hover:text-orange-600"
            >
              Send a message
            </a>
          </div>
          <div className="flex flex-col items-center p-4 mt-4 border border-black rounded-xl w-60">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
              className="mb-2"
            >
              <path
                fillRule="evenodd"
                d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
              />
            </svg>
            <h2 className="font-serif">Whatsapp</h2>
            <h2 className="font-serif">9944170244</h2>
            <a
              href="https://api.whatsapp.com/send?phone=9944170233"
              className="font-semibold text-orange-700 hover:text-orange-600"
            >
              Send a message
            </a>
          </div>
        </div>
        <div>
          <form className="w-full p-8 bg-transparent border border-none" ref={form} onSubmit={(e)=>sendEmail(e)}>
            <div className="flex flex-col justify-start">
              <input
                type="text"
                name="to_name"
                id="text"
                placeholder="Name"
                required
                className="px-4 py-2 mb-6 border border-black rounded-lg outline-none focus:outline-none bg-inherit"
              />
              <input
                type="email"
                name="from_name"
                id="email"
                placeholder="Email"
                className="px-4 py-2 mb-6 border border-black rounded-lg outline-none focus:outline-none bg-inherit"
                required
              />
              <textarea
                type="textarea"
                name="message"
                id="message"
                rows="3"
                placeholder="Message"
                className="px-4 py-2 mb-6 border border-black rounded-lg outline-none focus:outline-none bg-inherit"
                required
              ></textarea>
              <button
                className="px-4 py-2 text-sm text-black border rounded-lg shadow-sm md:font-medium border-hidden bg-amber-500 hover:bg-amber-400 hover:shadow-inner hover:scale-105"
                
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="flex items-start justify-center mb-4 font-serif font-semibold ease-in-out text-amber-600">{message ? "Thank You For sending your Message." : ""}</p>
    </div>
  );
}
