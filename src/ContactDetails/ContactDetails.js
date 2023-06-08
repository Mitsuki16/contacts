import React from "react";
import { Link } from "react-router-dom";
import ContactSelect from "../ContactPages/ContactSelect";
import { motion } from "framer-motion";
import { redirect } from "react-router-dom";


function ContactDetails(props) {
    const userDetails = props.user
  return (
    <>
    {userDetails.first_name === undefined ? <ContactSelect />:
    <div
    //  key={userDetails.first_name}
    // initial={{  x: "100vw" }}
    // animate={{  x: 0 }}
    // transition={{ duration: 0.5 }} 
      className=" relative 
             rounded-xl 
             sm:rounded-none
             sm:rounded-e-lg
              w-[80%] md:w-[55%] xl:w-[40%]
             min-w-[80%] md:min-w-[40%] md:grow-0
               bg-white"
    >
      <div className="flex justify-start pl-[14%] lg:pl-[20%] m-4 pb-4 gap-4 ">
        <div className="w-28 rounded-full">
          {/* <img
            alt="Profile Pic"
            className="w-20 h-20 object-cover rounded-full"
            src="bh.jpeg"
          /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="w-20 h-20 rounded-full">
                            <path fillRule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clipRule="evenodd" />
                        </svg> 
        </div>
        <h2 className="self-center font-bold text-[17pt]">{userDetails.first_name+ " "+ userDetails.last_name}</h2>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-9 ">
          <div className="w-1/6">
            <div className=" p-4 bg-sky-500 rounded-full w-14 text-white cursor-pointer  duration-150 hover:scale-125  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-sky-600 mt-2 text-center font-medium ">
                Message
              </p>
            </div>
          </div>
          <div className="w-1/6 cursor-pointer ">
            <div className=" p-4 bg-sky-500 rounded-full w-14 text-white cursor-pointer  duration-150 hover:scale-125  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-sky-600 mt-2 text-center font-medium">Phone</p>
            </div>
          </div>
          <div className="w-1/6">
            <div className=" p-4 bg-sky-500 rounded-full w-14 text-white  cursor-pointer  duration-150 hover:scale-125  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
              </svg>
            </div>
            <div>
              <p className="text-sky-600 mt-2 text-center font-medium">
                Facetime
              </p>
            </div>
          </div>
          <div className="w-1/6">
            <div className=" p-4 bg-sky-500 rounded-full w-14 text-white  cursor-pointer  duration-150 hover:scale-125  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <div>
              <p className="  text-sky-600 mt-2 text-center font-medium">
                Mail
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-10 mx-10 font-medium">
        <div className=" text-lg divide-y-2 flex flex-col">
          <div className="flex gap-5 w-full">
            <p className="text-gray-500 w-28 text-right">iPhone</p>
            <div>
              <p>{userDetails.phone}</p>
              <p>{userDetails.phone1}</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-gray-500  w-28 text-right">FaceTime</p>
            <div>
              <div className=" flex ">
                <div className=" p-4 text-sky-500 rounded-full w-14 cursor-pointer  duration-150 hover:scale-125  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className=" p-4 text-sky-500 rounded-full w-14  cursor-pointer  duration-150 hover:scale-125  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-gray-500 w-28 text-right">Home</p>
            <div>
              <p>{userDetails.email}</p>
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-gray-500  w-28 text-right">Birthday</p>
            <p>June 8</p>
          </div>
          <div className="flex gap-5">
            <p className="text-gray-500  w-28 text-right">Home</p>
            <div>
              <p>{userDetails.address}</p>
              <p>{userDetails.city}</p>
              <p>{userDetails.county}</p>
              <p>{userDetails.state + " - " + userDetails.zip }</p>
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-gray-500 w-28 text-right">Note</p>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-5  w-full ">
        <div className="flex gap-[20%] justify-around items-center">
          <div>
            <button>
              <Link to="/new" >
              <svg
                className=" rounded-lg w-16 h-8  border-2 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg></Link>
            </button>
          </div>
          <div className=" flex gap-6 -ml-14 ">
            <button onClick={() => {return (props.onDeleteUser(userDetails.first_name+" "+userDetails.last_name))}} 
            className=" rounded-lg  w-20 h-8  border-2 font-bold text-lg ">
              Delete
            </button>
            <button className=" rounded-lg w-20 h-8  border-2 font-bold text-lg ">
              Edit
            </button>
            <button className=" ">
              <svg
                className=" rounded-lg w-16 h-8  border-2 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    }
    </> 
  );
}

export default ContactDetails;
