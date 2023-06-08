import React, { useState } from "react";

function Contact(props) {
  let classes = "cursor-pointer hover:bg-sky-300 hover:text-white p-3 rounded-xl ";
  if(props.selected == true){
    classes += " bg-sky-500 hover:bg-sky-500 hover:text-black";
  }
  const thisClicked = (e) => {
    props.onClick(props.first_name + " " + props.last_name)
    
  };
  return (
    <div key={props.first_name + " " + props.last_name}>
      <div className={classes} onClick={(e) => thisClicked()}>
        <p>{props.first_name + " " + props.last_name}</p>
      </div>
    </div>
  );
}

export default Contact;
