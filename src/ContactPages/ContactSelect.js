import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

function ContactSelect(props) {
  return (
    <div
    // initial={{  x: "100vw" }}
    // animate={{  x: 0 }}
    // transition={{ duration: 0.5 }}  
    className=" flex justify-center items-center              rounded-xl              sm:rounded-none             sm:rounded-e-lg              w-[80%] md:w-[55%] xl:w-[40%]             min-w-[80%] md:min-w-[40%] md:grow-0               bg-white text-center               ">
      <div>
        <h2 className=" text-2xl ">Welcome to Apple Contacts</h2>
        <h2 className=" py-10 text-xl ">Select a Contact!</h2>
        <p>OR</p>
        <Link to="/new">
          <button
            className=" hover:scale-110 duration-200 bg-sky-400 hover:text-black text-white hover:bg-white hover:border-sky-400 p-3 border-2 rounded-2xl
            mt-5
            "
          >
            Add a New Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactSelect;
