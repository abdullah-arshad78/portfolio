import React, { useRef, useState } from "react";
import useValidInput from "../hooks/useValidInput";
import emailjs from "@emailjs/browser";
import Modal from "../UI/Modal";
import SuccessContainer from "../UI/SuccessContainer";
import ErrorContainer from "../UI/ErrorContainer";

const validateEmail = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

const validateName = (name) => {
  return name.trim() !== "";
};

const validateText = (text) => {
  return text.trim().length >= 10;
};

const ContactForm = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(null);
  const form = useRef();
  const {
    value: nameValue,
    valueIsValid: nameIsValid,
    valueHasError: nameHasError,
    inputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    resetValue: nameReset,
  } = useValidInput(validateName);
  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    valueHasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    resetValue: emailReset,
  } = useValidInput(validateEmail);
  const {
    value: textValue,
    valueIsValid: textIsValid,
    valueHasError: textHasError,
    inputBlurHandler: textBlurHandler,
    inputChangeHandler: textChangeHandler,
    resetValue: textReset,
  } = useValidInput(validateText);
  const formIsValid = emailIsValid && nameIsValid && textIsValid;

  const closeSuccessHandler = () => {
    setFormSuccess(false);
  };
  const closeErroHandler = () => {
    setFormError(null);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    emailjs
      .sendForm(
        "service_06qs6kl",
        "template_8sybrec",
        form.current,
        "R7jAWGM_g9F_xoeGU"
      )
      .then(
        () => {
          setFormSuccess(true);
          nameReset();
          emailReset();
          textReset();
        },
        (error) => {
          setFormError(true);
          console.log(error.text);
        }
      );
  };

  return (
    <React.Fragment>
      <form
        ref={form}
        onSubmit={formSubmitHandler}
        className="py-6 bg-transparent w-full md:w-[58%] lg:w-[55.5%] p-4 rounded text-sm"
      >
        <div className="my-4">
          <label htmlFor="name" className="block font-bold">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`${
              nameHasError ? "bg-[#f5ebeb]" : ""
            } rounded text-[1rem]  w-[100%] md:w-[90%] md:focus:w-[95%] focus:outline-0 focus:border-b-4  ${
              nameHasError ? "focus:border-red-400" : "focus:border-cyan-700"
            } form-input py-2 px-3 my-1 shadow transition-all duration-150 ease-in `}
            placeholder="John Smith"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <span className="block text-red-400">Please add a valid name</span>
          )}
        </div>
        <div className="my-4">
          <label htmlFor="email" className="block  font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={`${
              emailHasError ? "bg-[#f5ebeb]" : ""
            } rounded text-[1rem]  w-[100%] md:w-[90%] md:focus:w-[95%] focus:outline-0 focus:border-b-4 ${
              emailHasError ? "focus:border-red-400" : "focus:border-cyan-700"
            } form-input py-2 px-3 my-1 shadow transition-all duration-150 ease-in `}
            placeholder="Johnsmith@example.com"
            formNoValidate
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <span className="block text-red-400">
              Please add a valid email{" "}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="" className="block font-bold">
            Your Message
          </label>
          <textarea
            className={`${
              textHasError ? "bg-[#f5ebeb]" : ""
            } resize-none text-[1rem]  rounded w-[100%] md:w-[90%] md:focus:w-[95%] h-[12rem] focus:outline-0 focus:border-2 ${
              textHasError ? "focus:border-red-400" : "focus:border-cyan-700"
            } form-input py-2 px-3 my-1 shadow transition-all duration-150 ease-in`}
            placeholder="Your Text ..."
            value={textValue}
            onChange={textChangeHandler}
            onBlur={textBlurHandler}
            name="text"
          />
          {textHasError && (
            <span className=" block text-red-400 mt-[-.5rem]">
              Minimun 10 characters required{" "}
            </span>
          )}
        </div>
        <button
          disabled={!formIsValid}
          className="bg-slate-700 text-2xl text-white py-2 px-3 rounded mt-2 hover:bg-slate-200 hover:text-slate-700 hover:border-2 hover:border-slate-700 transition-all duration-150 ease-in form-btn"
        >
          Submit
        </button>
      </form>
      {formSuccess && (
        <Modal onClose={closeSuccessHandler}>
          <SuccessContainer onClose={closeSuccessHandler}></SuccessContainer>
        </Modal>
      )}

      {formError && (
        <Modal onClose={closeErroHandler}>
          <ErrorContainer onClose={closeErroHandler}></ErrorContainer>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default ContactForm;
