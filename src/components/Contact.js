import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="px-6 pt-[9rem] pb-[6rem]  about-background simple-text text-slate-600 text-xl flex flex-col justify-start items-center min-h-[98vh]">
      <h2 className="secondary-heading text-5xl text-center mb-6 md:mb-[3rem] text-zinc-600 move-up">
        Contact Me!
      </h2>
      <div className=" items-center w-[90vw] md:w-[80vw] flex flex-col justify-center items-center md:items-start computer-bg rounded move-up">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
