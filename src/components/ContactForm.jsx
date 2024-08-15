import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoMdCloseCircle } from "react-icons/io";
import { BsFillSendCheckFill } from "react-icons/bs";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "30px 50px",
    backgroundColor: "white",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ContactForm() {
  const [hoveredSubmitBtn, setHoveredSubmitBtn] = useState(false);

  //For Modal

  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  //Email.js

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    

    // const formData = new FormData(form.current);
    // const formValues = Object.fromEntries(formData.entries());
    // console.log(formValues);

    const serviceId = "service_tt2hbaw";
    const templateId = "template_hi3iyfg";
    const publicKEY = "g4aLYw58lMbXqB_J4";

    // console.log(form.current)

    await emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKEY,
      })
      .then(
        () => {
          openModal();
          // alert('E-mail has been sent successfully! Thanks for reaching ✌️')
          console.log("SUCCESS!");
          console.log(e);
          e.target.reset();    
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <section class="bg-white py-48">
        <div class="container mx-auto">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 lg:col-span-6 " data-aos="fade-up">
              <div class="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                <span class="text-[#ffb646] text-xl">Contact</span>
                <h3 class="text-black text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  <span class="relative z-[1] before:rounded-full before:bg-[#ffb646] before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    Le
                  </span>
                  t’s
                  <br class="hidden lg:block" />
                  connect
                </h3>
              </div>

              <div class="flex flex-wrap flex-col gap-7">
                <div class="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                  <span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.33366 5.33325H26.667C28.1337 5.33325 29.3337 6.53325 29.3337 7.99992V23.9999C29.3337 25.4666 28.1337 26.6666 26.667 26.6666H5.33366C3.86699 26.6666 2.66699 25.4666 2.66699 23.9999V7.99992C2.66699 6.53325 3.86699 5.33325 5.33366 5.33325Z"
                        stroke="#080808"
                        stroke-opacity="0.9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M29.3337 8L16.0003 17.3333L2.66699 8"
                        stroke="#080808"
                        stroke-opacity="0.9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div class="flex flex-wrap flex-col flex-1">
                    <span class="paragraph !leading-none">Email us</span>
                    <h5 class="text-lg font-bold font-Syne text-black leading-7">
                      tanzeelurrehman1995@gmail.com
                    </h5>
                  </div>
                </div>
                <div class="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                  <span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0663 6.66658C21.3686 6.92067 22.5654 7.55759 23.5037 8.49583C24.4419 9.43407 25.0788 10.6309 25.3329 11.9333M20.0663 1.33325C22.772 1.63383 25.295 2.84548 27.2212 4.76926C29.1474 6.69304 30.3623 9.2146 30.6663 11.9199M29.3329 22.5599V26.5599C29.3344 26.9313 29.2584 27.2988 29.1096 27.639C28.9608 27.9793 28.7427 28.2847 28.469 28.5357C28.1954 28.7868 27.8724 28.9779 27.5206 29.0969C27.1688 29.2158 26.7961 29.26 26.4263 29.2266C22.3234 28.7808 18.3823 27.3788 14.9196 25.1333C11.698 23.0861 8.9667 20.3548 6.91959 17.1333C4.66622 13.6549 3.26391 9.69458 2.82625 5.57325C2.79293 5.20454 2.83675 4.83293 2.95492 4.48208C3.07309 4.13124 3.26301 3.80884 3.51261 3.53541C3.7622 3.26199 4.06599 3.04353 4.40464 2.89395C4.74329 2.74436 5.10937 2.66693 5.47959 2.66659H9.47959C10.1267 2.66022 10.754 2.88936 11.2446 3.3113C11.7352 3.73323 12.0557 4.31918 12.1463 4.95992C12.3151 6.24001 12.6282 7.49689 13.0796 8.70659C13.259 9.18382 13.2978 9.70247 13.1915 10.2011C13.0851 10.6997 12.8381 11.1574 12.4796 11.5199L10.7863 13.2133C12.6843 16.5513 15.4482 19.3152 18.7863 21.2133L20.4796 19.5199C20.8421 19.1614 21.2998 18.9144 21.7984 18.808C22.297 18.7017 22.8157 18.7405 23.2929 18.9199C24.5026 19.3713 25.7595 19.6844 27.0396 19.8533C27.6873 19.9446 28.2788 20.2709 28.7016 20.7699C29.1245 21.269 29.3491 21.906 29.3329 22.5599Z"
                        stroke="#080808"
                        stroke-opacity="0.9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div class="flex flex-wrap flex-col flex-1">
                    <span class="paragraph !leading-none">Call us</span>
                    <h5 class="text-lg font-bold font-Syne text-black leading-7">
                      +92 344 2678983
                    </h5>
                  </div>
                </div>
                <div class="flex flex-wrap gap-4 pb-4 border-b border-gray-300 lg:max-w-[416px]">
                  <span>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 29C6 28.4477 6.44772 28 7 28H25C25.5523 28 26 28.4477 26 29C26 29.5523 25.5523 30 25 30H7C6.44772 30 6 29.5523 6 29Z"
                        fill="#080808"
                        fill-opacity="0.9"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 10C14.3431 10 13 11.3431 13 13C13 14.6569 14.3431 16 16 16C17.6569 16 19 14.6569 19 13C19 11.3431 17.6569 10 16 10ZM11 13C11 10.2386 13.2386 8 16 8C18.7614 8 21 10.2386 21 13C21 15.7614 18.7614 18 16 18C13.2386 18 11 15.7614 11 13Z"
                        fill="#080808"
                        fill-opacity="0.9"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 4C13.6131 4 11.3239 4.94821 9.63604 6.63604C7.94821 8.32387 7 10.6131 7 13C7 17.1399 9.31185 20.9096 11.7546 23.7188C12.9638 25.1094 14.1755 26.2305 15.0851 27.0037C15.4449 27.3095 15.7562 27.5599 16 27.75C16.2438 27.5599 16.5551 27.3095 16.9149 27.0037C17.8245 26.2305 19.0362 25.1094 20.2454 23.7188C22.6882 20.9096 25 17.1399 25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.3869 4 16 4ZM16 29C15.4265 29.8192 15.4263 29.819 15.4259 29.8188L15.4251 29.8182L15.4228 29.8166L15.4154 29.8114L15.39 29.7933C15.3683 29.7778 15.3375 29.7557 15.2981 29.7269C15.2192 29.6693 15.1059 29.5853 14.9631 29.4762C14.6775 29.2579 14.2732 28.9384 13.7899 28.5276C12.8245 27.707 11.5362 26.5156 10.2454 25.0312C7.68815 22.0904 5 17.8601 5 13C5 10.0826 6.15893 7.28473 8.22183 5.22183C10.2847 3.15893 13.0826 2 16 2C18.9174 2 21.7153 3.15893 23.7782 5.22183C25.8411 7.28473 27 10.0826 27 13C27 17.8601 24.3118 22.0904 21.7546 25.0312C20.4638 26.5156 19.1755 27.707 18.2101 28.5276C17.7268 28.9384 17.3225 29.2579 17.0369 29.4762C16.8941 29.5853 16.7808 29.6693 16.7019 29.7269C16.6625 29.7557 16.6317 29.7778 16.61 29.7933L16.5846 29.8114L16.5772 29.8166L16.5749 29.8182L16.5741 29.8188C16.5737 29.819 16.5735 29.8192 16 29ZM16 29L16.5735 29.8192C16.2291 30.0603 15.7709 30.0603 15.4265 29.8192L16 29Z"
                        fill="#080808"
                        fill-opacity="0.9"
                      ></path>
                    </svg>
                  </span>
                  <div class="flex flex-wrap flex-col flex-1">
                    <span class="paragraph !leading-none">Office address</span>
                    <h5 class="text-lg font-bold font-Syne text-black leading-7">
                      Karachi, Pakistan
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-span-12 lg:col-span-6 "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* <button onClick={openModal}>Open Modal</button> */}
              <Modal
              id="root"
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="flex justify-center pb-5 text-[#ffb646]">
                  <BsFillSendCheckFill size={80} />
                </div>
                <div className="relative">
                  <button
                    className="absolute -right-8 -top-28 z-30 text-[#ffb646]"
                    onClick={closeModal}
                  >
                    <IoMdCloseCircle size={25} />
                  </button>
                  <div className="flex flex-col justify-center items-center space-y-4">
                  <h2 className="text-4xl font-Syne font-bold text-center pb-2">
                    Thank you!
                  </h2>
                  <h2
                    //  ref={(_subtitle) => (subtitle = _subtitle)}
                    className="font-semibold font-Syne text-lg text-center"
                  >
                    E-mail has been sent successfully! Thanks for reaching us
                    ✌️.
                    <br />
                    Our team will contact you shortly.{" "}
                  </h2>
                  <h2 className="text-2xl font-bold font-Syne ">Follow Us</h2>
                  <div className="flex space-x-3">
                    <FaFacebook
                      size={25}
                      className="text-gray-600 hover:text-[#e5aa52]"
                      title="Facebook"
                    />
                    <FaLinkedin
                      size={25}
                      className="text-gray-600 hover:text-[#e5aa52]"
                      title="LinkedIn"
                    />
                    <FaGithub
                      size={25}
                      className="text-gray-600 hover:text-[#e5aa52]"
                      title="Github"
                    />
                  </div>
                  </div>
                </div>
              </Modal>
              <form
                id="contact-form"
                action="mail.php"
                method="post"
                class="grid grid-cols-12 gap-[18px] font-Syne"
                ref={form}
                onSubmit={sendEmail}
              >
                <div class="col-span-12 md:col-span-6">
                  <label
                    class="text-sm font-normal font-Inter leading-tight mb-3 block"
                    for="from_name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    class="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black border-opacity-40 rounded-[8px] p-4 focus:border-black focus:border-opacity-40 focus:outline-none "
                    type="text"
                    required
                    placeholder="Your name*"
                    name="from_name"
                  />
                </div>
                <div class="col-span-12 md:col-span-6">
                  <label
                    class="text-sm font-normal font-Inter leading-tight mb-3 block"
                    for="from_email"
                  >
                    Email
                  </label>
                  <input
                    id="Email"
                    class="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black border-opacity-40 rounded-[8px] p-4 focus:border-black focus:border-opacity-40 focus:outline-none "
                    type="email"
                    required
                    placeholder="Your email*"
                    name="from_email"
                  />
                </div>
                <div class="col-span-12 md:col-span-6">
                  <label
                    class="text-sm font-normal font-Inter leading-tight mb-3 block"
                    for="phone"
                  >
                    Phone
                  </label>
                  <input
                    id="Phone"
                    class="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black border-opacity-40 rounded-[8px] p-4 focus:border-black focus:border-opacity-40 focus:outline-none "
                    type="text"
                    required
                    placeholder="Your number"
                    name="phone"
                  />
                </div>
                <div class="col-span-12 md:col-span-6">
                  <label
                    class="text-sm font-normal font-Inter leading-tight mb-3 block"
                    for="Subject"
                  >
                    Subject*
                  </label>
                  <input
                    id="Subject"
                    class="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black border-opacity-40 rounded-[8px] p-4 focus:border-black focus:border-opacity-40 focus:outline-none "
                    type="text"
                    required
                    placeholder="Your subject*"
                    name="subject"
                  />
                </div>

                <div class="col-span-12">
                  <label
                    class="text-sm font-normal font-Inter leading-tight mb-3 block"
                    for="Message"
                  >
                    Message
                  </label>
                  <textarea
                    class="h-[100px] font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black border-opacity-40 rounded-[8px] p-4 focus:border-black focus:border-opacity-40 focus:outline-none resize-none"
                    name="message"
                    id="Message"
                    cols="30"
                    rows="10"
                    required
                    placeholder="Type your message"
                  ></textarea>
                </div>

                <div class="col-span-12">
                  <button
                    class="flex items-center flex-wrap bg-black text-white font-bold px-4 py-3 rounded-lg  border border-black transition duration-200 hover:transiton hover:duration-200 hover:bg-transparent hover:text-black group"
                    type="submit"
                    onMouseEnter={() => setHoveredSubmitBtn(true)}
                    onMouseLeave={() => setHoveredSubmitBtn(false)}
                  >
                    Submit
                    <span
                      class={`inline-block ml-3 ${
                        hoveredSubmitBtn
                          ? "card-animate-arrow text-[#ffb646] transition duration-150"
                          : " "
                      }`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="currentColor"
                          stroke-opacity="0.9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7 7H17V17"
                          stroke="currentColor"
                          stroke-opacity="0.9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <p class="form-message mt-3"></p>
                </div>

                <div class="col-span-12">
                  <div class="justify-start sm:items-center gap-[23px] inline-flex mt-14 flex-col sm:flex-row">
                    <svg
                      width="110"
                      height="2"
                      viewBox="0 0 110 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 1H110"
                        stroke="#080808"
                        stroke-opacity="0.1"
                      ></path>
                    </svg>

                    <div class="flex flex-wrap gap-[23px]">
                      <h4 class="text-black text-xl font-bold font-Syne leading-7">
                        Follow me
                      </h4>

                      <ul class="flex flex-wrap gap-x-4 items-center">
                        <li>
                          <Link
                            to="#"
                            class="text-black transition-all duration-300 hover:text-[#ffb646]"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.443 5.3501C8.082 5.3501 8.673 5.4001 9.213 5.5481C9.754 5.6471 10.197 5.8451 10.59 6.0921C10.984 6.3401 11.279 6.6861 11.475 7.1311C11.672 7.5761 11.771 8.1211 11.771 8.7141C11.771 9.4071 11.623 10.0001 11.279 10.4451C10.984 10.8911 10.492 11.2861 9.902 11.5831C10.738 11.8311 11.377 12.2761 11.771 12.8701C12.164 13.4631 12.41 14.2051 12.41 15.0461C12.41 15.7391 12.262 16.3321 12.016 16.8271C11.771 17.3221 11.377 17.7671 10.934 18.0641C10.4528 18.3824 9.92083 18.6164 9.361 18.7561C8.771 18.9051 8.181 19.0041 7.591 19.0041H1V5.3501H7.443ZM7.049 10.8901C7.59 10.8901 8.033 10.7421 8.377 10.4951C8.721 10.2481 8.869 9.8021 8.869 9.2581C8.869 8.9611 8.819 8.6651 8.721 8.4671C8.623 8.2691 8.475 8.1201 8.279 7.9721C8.082 7.8731 7.885 7.7741 7.639 7.7251C7.393 7.6751 7.148 7.6751 6.852 7.6751H4V10.8911H7.05L7.049 10.8901ZM7.197 16.7281C7.492 16.7281 7.787 16.6781 8.033 16.6291C8.279 16.5791 8.525 16.4811 8.721 16.3321C8.92138 16.1873 9.08903 16.002 9.213 15.7881C9.311 15.5411 9.41 15.2441 9.41 14.8981C9.41 14.2051 9.213 13.7111 8.82 13.3641C8.426 13.0671 7.885 12.9191 7.246 12.9191H4V16.7291L7.197 16.7281ZM16.689 16.6781C17.082 17.0741 17.672 17.2721 18.459 17.2721C19 17.2721 19.492 17.1241 19.885 16.8771C20.279 16.5801 20.525 16.2831 20.623 15.9871H23.033C22.639 17.1731 22.049 18.0141 21.263 18.5591C20.475 19.0531 19.541 19.3501 18.41 19.3501C17.6864 19.3523 16.9688 19.218 16.295 18.9541C15.6887 18.7267 15.148 18.353 14.721 17.8661C14.2643 17.4107 13.9267 16.8498 13.738 16.2331C13.492 15.5901 13.393 14.8981 13.393 14.1061C13.393 13.3641 13.492 12.6721 13.738 12.0281C13.9749 11.4085 14.3252 10.8384 14.771 10.3471C15.2201 9.88594 15.7543 9.51613 16.344 9.2581C17.0007 8.99416 17.7022 8.85969 18.41 8.8621C19.246 8.8621 19.984 9.0111 20.623 9.3571C21.263 9.7031 21.754 10.0991 22.147 10.6931C22.541 11.2371 22.837 11.8801 23.033 12.5731C23.131 13.2651 23.18 13.9581 23.131 14.7491H16C16 15.5411 16.295 16.2831 16.689 16.6791V16.6781ZM19.787 11.4841C19.443 11.1381 18.902 10.9401 18.262 10.9401C17.82 10.9401 17.475 11.0401 17.18 11.1881C16.885 11.3361 16.689 11.5341 16.492 11.7321C16.311 11.9234 16.1912 12.1643 16.148 12.4241C16.098 12.6721 16.049 12.8701 16.049 13.0671H20.475C20.377 12.3251 20.131 11.8311 19.787 11.4841ZM15.459 6.2901H20.967V7.6261H15.46V6.2901H15.459Z"
                                fill="currentColor"
                                fill-opacity="0.9"
                              ></path>
                            </svg>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="text-black transition-all duration-300 hover:text-[#ffb646]"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.94043 5.00002C6.94017 5.53046 6.7292 6.03906 6.35394 6.41394C5.97868 6.78883 5.46986 6.99929 4.93943 6.99902C4.409 6.99876 3.90039 6.78779 3.52551 6.41253C3.15062 6.03727 2.94016 5.52846 2.94043 4.99802C2.9407 4.46759 3.15166 3.95899 3.52692 3.5841C3.90218 3.20922 4.411 2.99876 4.94143 2.99902C5.47186 2.99929 5.98047 3.21026 6.35535 3.58552C6.73024 3.96078 6.9407 4.46959 6.94043 5.00002ZM7.00043 8.48002H3.00043V21H7.00043V8.48002ZM13.3204 8.48002H9.34043V21H13.2804V14.43C13.2804 10.77 18.0504 10.43 18.0504 14.43V21H22.0004V13.07C22.0004 6.90002 14.9404 7.13002 13.2804 10.16L13.3204 8.48002Z"
                                fill="currentColor"
                                fill-opacity="0.9"
                              ></path>
                            </svg>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="text-black transition-all duration-300 hover:text-[#ffb646]"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.989 11.572C19.907 9.99792 19.3596 8.4836 18.416 7.221C18.1285 7.53061 17.8212 7.82123 17.496 8.091C16.4969 8.92086 15.3805 9.5982 14.183 10.101C14.35 10.451 14.503 10.79 14.638 11.11V11.113C14.665 11.174 14.688 11.231 14.732 11.342L14.749 11.382C16.262 11.212 17.858 11.275 19.405 11.485C19.611 11.512 19.805 11.541 19.989 11.572ZM10.604 4.122C11.5786 5.49516 12.4772 6.92062 13.296 8.392C14.519 7.91 15.53 7.302 16.344 6.625C16.674 6.351 16.938 6.093 17.14 5.87C15.701 4.65972 13.8803 3.99733 12 4C11.524 4 11.058 4.042 10.604 4.121V4.122ZM4.253 9.997C4.93423 9.97981 5.61464 9.93878 6.293 9.874C7.93264 9.72734 9.55828 9.4525 11.155 9.052C10.3205 7.60221 9.41956 6.19171 8.455 4.825C7.42472 5.3354 6.51626 6.06141 5.79124 6.95379C5.06623 7.84617 4.54162 8.88404 4.253 9.997ZM5.783 17.035C6.25195 16.3575 6.77894 15.7221 7.358 15.136C8.812 13.646 10.528 12.486 12.514 11.846L12.576 11.828C12.411 11.464 12.256 11.139 12.1 10.833C10.264 11.368 8.33 11.702 6.403 11.875C5.463 11.96 4.62 11.997 4 12.003C3.99815 13.8356 4.62722 15.6128 5.783 17.035ZM15.004 19.415C14.6184 17.4703 14.0725 15.5607 13.372 13.706C11.372 14.433 9.776 15.496 8.543 16.764C8.0454 17.2664 7.60382 17.8213 7.226 18.419C8.60481 19.4478 10.2797 20.0025 12 20C13.0299 20.0015 14.0504 19.8035 15.005 19.417L15.004 19.415ZM16.878 18.34C18.4393 17.1398 19.5028 15.4057 19.865 13.47C19.525 13.385 19.094 13.3 18.62 13.234C17.5661 13.0823 16.4968 13.0712 15.44 13.201C16.035 14.8799 16.5154 16.5961 16.878 18.34ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z"
                                fill="currentColor"
                                fill-opacity="0.9"
                              ></path>
                            </svg>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            class="text-black transition-all duration-300 hover:text-orange"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C1.99977 14.0992 2.65958 16.1454 3.88679 17.8484C5.114 19.5515 6.84631 20.8249 8.83798 21.488C9.33798 21.575 9.52598 21.275 9.52598 21.012C9.52598 20.775 9.51298 19.988 9.51298 19.15C7.00098 19.613 6.35098 18.538 6.15098 17.975C6.03798 17.687 5.55098 16.8 5.12598 16.562C4.77598 16.375 4.27598 15.912 5.11298 15.9C5.90098 15.887 6.46298 16.625 6.65098 16.925C7.55098 18.437 8.98798 18.012 9.56298 17.75C9.65098 17.1 9.91298 16.663 10.201 16.413C7.97598 16.163 5.65098 15.3 5.65098 11.475C5.65098 10.387 6.03798 9.488 6.67598 8.788C6.57598 8.538 6.22598 7.513 6.77598 6.138C6.77598 6.138 7.61298 5.875 9.52598 7.162C10.3401 6.9364 11.1812 6.82302 12.026 6.825C12.876 6.825 13.726 6.937 14.526 7.162C16.439 5.862 17.276 6.138 17.276 6.138C17.826 7.513 17.476 8.538 17.376 8.788C18.013 9.488 18.401 10.375 18.401 11.475C18.401 15.313 16.064 16.163 13.839 16.413C14.201 16.725 14.514 17.325 14.514 18.263C14.514 19.6 14.501 20.675 14.501 21.013C14.501 21.275 14.689 21.587 15.189 21.487C17.1738 20.8166 18.8985 19.5408 20.1203 17.8389C21.3421 16.1371 21.9995 14.095 22 12C22 6.475 17.525 2 12 2H12.001Z"
                                fill="currentColor"
                                fill-opacity="0.9"
                              ></path>
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactForm;
