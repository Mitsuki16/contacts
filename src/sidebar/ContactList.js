import React from "react";
import Contact from "./Contact";


function ContactList({  usersData, onSelectContact}  ) {
  let initials = usersData.map((i) => {
    return i["first_name"].charAt(0);
  });
  initials = initials.sort();
  initials = [...new Set(initials.sort())];


  var setContactClicked = (e) => {
    let selected_user = undefined
    let userList = usersData.map((user) => {
      if (user.first_name + " " + user.last_name === e) {
        selected_user =  { ...user, selected: true }
        return selected_user;
      }
      return {...user, selected: false };
    });
    onSelectContact(userList,selected_user)
  };

  let initial_contacts = initials.map((initial) => {
    return (
      <div key={initial}> 
        <div className="text-gray-500 text-xl pb-3">
          <p>{initial}</p>
        </div>
        {usersData.map((user) => {
          if (user["first_name"][0] === initial) {
            return <Contact
                selected={user["selected"]}
                onClick={setContactClicked}
                key={user["first_name"]+" "+user["last_name"]}
                first_name={user["first_name"]}
                last_name={user["last_name"]}
              />
          }
          return null
        })}
      </div>
    );
  });
  return initial_contacts;
}

export default ContactList;
