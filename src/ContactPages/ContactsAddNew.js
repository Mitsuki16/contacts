import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useBearStore } from "../Store";
import { motion } from "framer-motion";
import { redirect } from "react-router-dom";

function ContactsAddNew(props) {
  const fn = useBearStore((state) => state.firstName);
  const setFN = useBearStore((state) => state.setFirstName);
  const ln = useBearStore((state) => state.lastName);
  const setLN = useBearStore((state) => state.setLastName);
  const phone = useBearStore((state) => state.phone);
  const setPhone = useBearStore((state) => state.setphone);
  const phone1 = useBearStore((state) => state.phone1);
  const setPhone1 = useBearStore((state) => state.setphone1);
  const email = useBearStore((state) => state.email);
  const setEmail = useBearStore((state) => state.setEmail);
  const home1 = useBearStore((state) => state.home1);
  const setHome1 = useBearStore((state) => state.setHome1);
  const home2 = useBearStore((state) => state.home2);
  const setHome2 = useBearStore((state) => state.setHome2);
  const home3 = useBearStore((state) => state.home3);
  const setHome3 = useBearStore((state) => state.setHome3);
  const home4 = useBearStore((state) => state.home4);
  const setHome4 = useBearStore((state) => state.setHome4);
  const birthDay = useBearStore((state) => state.birthDay);
  const setBirthDay = useBearStore((state) => state.setBirthDay);
  const notes = useBearStore((state) => state.notes);
  const setNotes = useBearStore((state) => state.setNotes);
  const setData = useBearStore((state) => state.setData);

  function handleAddContact(e) {
    let data = {
      first_name: fn.charAt(0).toUpperCase() + fn.slice(1),
      last_name: ln.charAt(0).toUpperCase() + ln.slice(1),
      phone: phone,
      phone1: phone1,
      birthday: birthDay,
      email: email,
      address: home1,
      city: home2,
      county: home3,
      state: home4,
      notes: "",
    };
    console.log(data);
    setData(data);
    setFN("");
    setLN("");
  }

  return (
    <div className=" min-w-[30%] rounded-xl absolute  bg-white p-4 ">
      {/* initial={{  x: "100vw" }}
     animate={{  x: 0 }}
     transition={{ duration: 0.5 }}  > */}
      <div className="flex justify-center items-center w-full ">
        <div className="w-28 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-20 h-20 rounded-full"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className=" pt-10 -ml-5 mx-10 font-medium">
        <div className=" text-lg flex flex-col items-center justify-center gap-6 ">
          <div className="flex gap-5">
            <p className="text-gray-500 w-36 text-right">First Name</p>
            <div>
              <input
                className=" w-60 duration-200 focus:border-sky-400 outline-none border-b-2"
                value={fn}
                onChange={(e) => setFN(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-5">
            <p className="text-gray-500 w-36 text-right">Last Name</p>
            <div className="">
              <input
                className=" w-60 duration-200 focus:border-sky-400 outline-none border-b-2"
                value={ln}
                onChange={(e) => setLN(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-gray-500 w-36 text-right">iPhone</p>
            <div className="  ">
              <input
                className="  w-60 duration-200 focus:border-sky-400 outline-none border-b-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="">
                <input
                  className=" mt-4 w-60 duration-200 focus:border-sky-400 outline-none border-b-2"
                  value={phone1}
                  onChange={(e) => setPhone1(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-gray-500 w-36 text-right">Home</p>
            <div className="flex gap-5 flex-col">
              <div>
                <input
                  className=" w-60 duration-200 focus:border-sky-400 outline-none border-b-2"
                  value={home1}
                  onChange={(e) => setHome1(e.target.value)}
                />
              </div>
              <div>
                <input
                  className=" w-60 duration-200 focus:border-sky-400 outline-none border-b-2"
                  value={home2}
                  onChange={(e) => setHome2(e.target.value)}
                />
              </div>
              <div>
                <input
                  className=" w-60 duration-200 focus:border-sky-400 outline-none border-b-2"
                  value={home3}
                  onChange={(e) => setHome3(e.target.value)}
                />
              </div>
              <div>
                <input
                  className=" w-60 duration-200 focus:border-sky-400 outline-none border-b-2"
                  value={home4}
                  onChange={(e) => setHome4(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-gray-500 w-36 text-right">BirthDay</p>
            <div>
              <input
                className=" w-60 duration-200 focus:border-sky-400 outline-none border-b-2"
                type="date"
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-gray-500 w-36 text-right">Email</p>
            <div>
              <input
                className=" w-60 duration-200 focus:border-sky-400 outline-none border-b-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-gray-500 w-36 text-right">Notes</p>
            <div>
              <input
                className=" w-60 duration-200 focus:border-sky-400 outline-none border-b-2"
                type="text"
                maxLength={10}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" py-10 flex justify-around">
        <Link to="/">
          <button className=" text-white bg-sky-400 w-28 p-2 rounded-xl outline-none">
            Cancel
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={(e) => handleAddContact(e)}
            className=" text-white bg-sky-400 w-28 p-2 rounded-xl outline-none"
          >
            Add
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactsAddNew;
