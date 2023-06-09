import { useEffect, useRef, useState } from "react";
import ContactList from "./sidebar/ContactList";
import ContactDetails from "./ContactDetails/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useBearStore } from "./Store";

const USER_DATA = [
  {
    first_name: "James",
    last_name: "Butt",
    company_name: "Benton, John B Jr",
    address: "6649 N Blue Gum St",
    city: "New Orleans",
    county: "Orleans",
    state: "LA",
    zip: 70116,
    phone1: "504-621-8927",
    phone: "504-845-1427",
    email: "jbutt@gmail.com",
  },
  {
    first_name: "Josephine",
    last_name: "Darakjy",
    company_name: "Chanay, Jeffrey A Esq",
    address: "4 B Blue Ridge Blvd",
    city: "Brighton",
    county: "Livingston",
    state: "MI",
    zip: 48116,
    phone1: "810-292-9388",
    phone: "810-374-9840",
    email: "josephine_darakjy@darakjy.org",
  },
  {
    first_name: "Art",
    last_name: "Venere",
    company_name: "Chemel, James L Cpa",
    address: "8 W Cerritos Ave #54",
    city: "Bridgeport",
    county: "Gloucester",
    state: "NJ",
    zip: 8014,
    phone1: "856-636-8749",
    phone: "856-264-4130",
    email: "art@venere.org",
  },
  {
    first_name: "Lenna",
    last_name: "Paprocki",
    company_name: "Feltz Printing Service",
    address: "639 Main St",
    city: "Anchorage",
    county: "Anchorage",
    state: "AK",
    zip: 99501,
    phone1: "907-385-4412",
    phone: "907-921-2010",
    email: "lpaprocki@hotmail.com",
  },
  {
    first_name: "Donette",
    last_name: "Foller",
    company_name: "Printing Dimensions",
    address: "34 Center St",
    city: "Hamilton",
    county: "Butler",
    state: "OH",
    zip: 45011,
    phone1: "513-570-1893",
    phone: "513-549-4561",
    email: "donette.foller@cox.net",
  },
  {
    first_name: "Simona",
    last_name: "Morasca",
    company_name: "Chapman, Ross E Esq",
    address: "3 Mcauley Dr",
    city: "Ashland",
    county: "Ashland",
    state: "OH",
    zip: 44805,
    phone1: "419-503-2484",
    phone: "419-800-6759",
    email: "simona@morasca.com",
  },
  {
    first_name: "Mitsue",
    last_name: "Tollner",
    company_name: "Morlong Associates",
    address: "7 Eads St",
    city: "Chicago",
    county: "Cook",
    state: "IL",
    zip: 60632,
    phone1: "773-573-6914",
    phone: "773-924-8565",
    email: "mitsue_tollner@yahoo.com",
  },
  {
    first_name: "Leota",
    last_name: "Dilliard",
    company_name: "Commercial Press",
    address: "7 W Jackson Blvd",
    city: "San Jose",
    county: "Santa Clara",
    state: "CA",
    zip: 95111,
    phone1: "408-752-3500",
    phone: "408-813-1105",
    email: "leota@hotmail.com",
  },
  {
    first_name: "Sage",
    last_name: "Wieser",
    company_name: "Truhlar And Truhlar Attys",
    address: "5 Boston Ave #88",
    city: "Sioux Falls",
    county: "Minnehaha",
    state: "SD",
    zip: 57105,
    phone1: "605-414-2147",
    phone: "605-794-4895",
    email: "sage_wieser@cox.net",
  },
  {
    first_name: "Kris",
    last_name: "Marrier",
    company_name: "King, Christopher A Esq",
    address: "228 Runamuck Pl #2808",
    city: "Baltimore",
    county: "Baltimore City",
    state: "MD",
    zip: 21224,
    phone1: "410-655-8723",
    phone: "410-804-4694",
    email: "kris@gmail.com",
  },
  {
    first_name: "Minna",
    last_name: "Amigon",
    company_name: "Dorl, James J Esq",
    address: "2371 Jerrold Ave",
    city: "Kulpsville",
    county: "Montgomery",
    state: "PA",
    zip: 19443,
    phone1: "215-874-1229",
    phone: "215-422-8694",
    email: "minna_amigon@yahoo.com",
  },
  {
    first_name: "Abel",
    last_name: "Maclead",
    company_name: "Rangoni Of Florence",
    address: "37275 St  Rt 17m M",
    city: "Middle Island",
    county: "Suffolk",
    state: "NY",
    zip: 11953,
    phone1: "631-335-3414",
    phone: "631-677-3675",
    email: "amaclead@gmail.com",
  },
  {
    first_name: "Kiley",
    last_name: "Caldarera",
    company_name: "Feiner Bros",
    address: "25 E 75th St #69",
    city: "Los Angeles",
    county: "Los Angeles",
    state: "CA",
    zip: 90034,
    phone1: "310-498-5651",
    phone: "310-254-3084",
    email: "kiley.caldarera@aol.com",
  },
  {
    first_name: "Graciela",
    last_name: "Ruta",
    company_name: "Buckley Miller & Wright",
    address: "98 Connecticut Ave Nw",
    city: "Chagrin Falls",
    county: "Geauga",
    state: "OH",
    zip: 44023,
    phone1: "440-780-8425",
    phone: "440-579-7763",
    email: "gruta@cox.net",
  },
  {
    first_name: "Cammy",
    last_name: "Albares",
    company_name: "Rousseaux, Michael Esq",
    address: "56 E Morehead St",
    city: "Laredo",
    county: "Webb",
    state: "TX",
    zip: 78045,
    phone1: "956-537-6195",
    phone: "956-841-7216",
    email: "calbares@gmail.com",
  },
  {
    first_name: "Mattie",
    last_name: "Poquette",
    company_name: "Century Communications",
    address: "73 State Road 434 E",
    city: "Phoenix",
    county: "Maricopa",
    state: "AZ",
    zip: 85013,
    phone1: "602-277-4385",
    phone: "602-953-6360",
    email: "mattie@aol.com",
  },
  {
    first_name: "Meaghan",
    last_name: "Garufi",
    company_name: "Bolton, Wilbur Esq",
    address: "69734 E Carrillo St",
    city: "Mc Minnville",
    county: "Warren",
    state: "TN",
    zip: 37110,
    phone1: "931-313-9635",
    phone: "931-235-7959",
    email: "meaghan@hotmail.com",
  },
  {
    first_name: "Gladys",
    last_name: "Rim",
    company_name: "T M Byxbee Company Pc",
    address: "322 New Horizon Blvd",
    city: "Milwaukee",
    county: "Milwaukee",
    state: "WI",
    zip: 53207,
    phone1: "414-661-9598",
    phone: "414-377-2880",
    email: "gladys.rim@rim.org",
  },
  {
    first_name: "Yuki",
    last_name: "Whobrey",
    company_name: "Farmers Insurance Group",
    address: "1 State Route 27",
    city: "Taylor",
    county: "Wayne",
    state: "MI",
    zip: 48180,
    phone1: "313-288-7937",
    phone: "313-341-4470",
    email: "yuki_whobrey@aol.com",
  },
  {
    first_name: "Fletcher",
    last_name: "Flosi",
    company_name: "Post Box Services Plus",
    address: "394 Manchester Blvd",
    city: "Rockford",
    county: "Winnebago",
    state: "IL",
    zip: 61109,
    phone1: "815-828-2147",
    phone: "815-426-5657",
    email: "fletcher.flosi@yahoo.com",
  },
  {
    first_name: "Bette",
    last_name: "Nicka",
    company_name: "Sport En Art",
    address: "6 S 33rd St",
    city: "Aston",
    county: "Delaware",
    state: "PA",
    zip: 19014,
    phone1: "610-545-3615",
    phone: "610-492-4643",
    email: "bette_nicka@cox.net",
  },
  {
    first_name: "Veronika",
    last_name: "Inouye",
    company_name: "C 4 Network Inc",
    address: "6 Greenleaf Ave",
    city: "San Jose",
    county: "Santa Clara",
    state: "CA",
    zip: 95111,
    phone1: "408-540-1785",
    phone: "408-813-4592",
    email: "vinouye@aol.com",
  },
  {
    first_name: "Willard",
    last_name: "Kolmetz",
    company_name: "Ingalls, Donald R Esq",
    address: "618 W Yakima Ave",
    city: "Irving",
    county: "Dallas",
    state: "TX",
    zip: 75062,
    phone1: "972-303-9197",
    phone: "972-896-4882",
    email: "willard@hotmail.com",
  },
  {
    first_name: "Maryann",
    last_name: "Royster",
    company_name: "Franklin, Peter L Esq",
    address: "74 S Westgate St",
    city: "Albany",
    county: "Albany",
    state: "NY",
    zip: 12204,
    phone1: "518-966-7987",
    phone: "518-448-8982",
    email: "mroyster@royster.com",
  },
  {
    first_name: "Alisha",
    last_name: "Slusarski",
    company_name: "Wtlz Power 107 Fm",
    address: "3273 State St",
    city: "Middlesex",
    county: "Middlesex",
    state: "NJ",
    zip: 8846,
    phone1: "732-658-3154",
    phone: "732-635-3453",
    email: "alisha@slusarski.com",
  },
  {
    first_name: "Allene",
    last_name: "Iturbide",
    company_name: "Ledecky, David Esq",
    address: "1 Central Ave",
    city: "Stevens Point",
    county: "Portage",
    state: "WI",
    zip: 54481,
    phone1: "715-662-6764",
    phone: "715-530-9863",
    email: "allene_iturbide@cox.net",
  },
  {
    first_name: "Chanel",
    last_name: "Caudy",
    company_name: "Professional Image Inc",
    address: "86 Nw 66th St #8673",
    city: "Shawnee",
    county: "Johnson",
    state: "KS",
    zip: 66218,
    phone1: "913-388-2079",
    phone: "913-899-1103",
    email: "chanel.caudy@caudy.org",
  },
  {
    first_name: "Ezekiel",
    last_name: "Chui",
    company_name: "Sider, Donald C Esq",
    address: "2 Cedar Ave #84",
    city: "Easton",
    county: "Talbot",
    state: "MD",
    zip: 21601,
    phone1: "410-669-1642",
    phone: "410-235-8738",
    email: "ezekiel@chui.com",
  },
  {
    first_name: "Willow",
    last_name: "Kusko",
    company_name: "U Pull It",
    address: "90991 Thorburn Ave",
    city: "New York",
    county: "New York",
    state: "NY",
    zip: 10011,
    phone1: "212-582-4976",
    phone: "212-934-5167",
    email: "wkusko@yahoo.com",
  },
  {
    first_name: "Bernardo",
    last_name: "Figeroa",
    company_name: "Clark, Richard Cpa",
    address: "386 9th Ave N",
    city: "Conroe",
    county: "Montgomery",
    state: "TX",
    zip: 77301,
    phone1: "936-336-3951",
    phone: "936-597-3614",
    email: "bfigeroa@aol.com",
  },
  {
    first_name: "Ammie",
    last_name: "Corrio",
    company_name: "Moskowitz, Barry S",
    address: "74874 Atlantic Ave",
    city: "Columbus",
    county: "Franklin",
    state: "OH",
    zip: 43215,
    phone1: "614-801-9788",
    phone: "614-648-3265",
    email: "ammie@corrio.com",
  },
  {
    first_name: "Francine",
    last_name: "Vocelka",
    company_name: "Cascade Realty Advisors Inc",
    address: "366 South Dr",
    city: "Las Cruces",
    county: "Dona Ana",
    state: "NM",
    zip: 88011,
    phone1: "505-977-3911",
    phone: "505-335-5293",
    email: "francine_vocelka@vocelka.com",
  },
  {
    first_name: "Ernie",
    last_name: "Stenseth",
    company_name: "Knwz Newsradio",
    address: "45 E Liberty St",
    city: "Ridgefield Park",
    county: "Bergen",
    state: "NJ",
    zip: 7660,
    phone1: "201-709-6245",
    phone: "201-387-9093",
    email: "ernie_stenseth@aol.com",
  },
  {
    first_name: "Albina",
    last_name: "Glick",
    company_name: "Giampetro, Anthony D",
    address: "4 Ralph Ct",
    city: "Dunellen",
    county: "Middlesex",
    state: "NJ",
    zip: 8812,
    phone1: "732-924-7882",
    phone: "732-782-6701",
    email: "albina@glick.com",
  },
  {
    first_name: "Alishia",
    last_name: "Sergi",
    company_name: "Milford Enterprises Inc",
    address: "2742 Distribution Way",
    city: "New York",
    county: "New York",
    state: "NY",
    zip: 10025,
    phone1: "212-860-1579",
    phone: "212-753-2740",
    email: "asergi@gmail.com",
  },
  {
    first_name: "Solange",
    last_name: "Shinko",
    company_name: "Mosocco, Ronald A",
    address: "426 Wolf St",
    city: "Metairie",
    county: "Jefferson",
    state: "LA",
    zip: 70002,
    phone1: "504-979-9175",
    phone: "504-265-8174",
    email: "solange@shinko.com",
  },
  {
    first_name: "Jose",
    last_name: "Stockham",
    company_name: "Tri State Refueler Co",
    address: "128 Bransten Rd",
    city: "New York",
    county: "New York",
    state: "NY",
    zip: 10011,
    phone1: "212-675-8570",
    phone: "212-569-4233",
    email: "jose@yahoo.com",
  },
  {
    first_name: "Rozella",
    last_name: "Ostrosky",
    company_name: "Parkway Company",
    address: "17 Morena Blvd",
    city: "Camarillo",
    county: "Ventura",
    state: "CA",
    zip: 93012,
    phone1: "805-832-6163",
    phone: "805-609-1531",
    email: "rozella.ostrosky@ostrosky.com",
  },
  {
    first_name: "Valentine",
    last_name: "Gillian",
    company_name: "Fbs Business Finance",
    address: "775 W 17th St",
    city: "San Antonio",
    county: "Bexar",
    state: "TX",
    zip: 78204,
    phone1: "210-812-9597",
    phone: "210-300-6244",
    email: "valentine_gillian@gmail.com",
  },
  {
    first_name: "Kati",
    last_name: "Rulapaugh",
    company_name: "Eder Assocs Consltng Engrs Pc",
    address: "6980 Dorsett Rd",
    city: "Abilene",
    county: "Dickinson",
    state: "KS",
    zip: 67410,
    phone1: "785-463-7829",
    phone: "785-219-7724",
    email: "kati.rulapaugh@hotmail.com",
  },
  {
    first_name: "Youlanda",
    last_name: "Schemmer",
    company_name: "Tri M Tool Inc",
    address: "2881 Lewis Rd",
    city: "Prineville",
    county: "Crook",
    state: "OR",
    zip: 97754,
    phone1: "541-548-8197",
    phone: "541-993-2611",
    email: "youlanda@aol.com",
  },
  {
    first_name: "Dyan",
    last_name: "Oldroyd",
    company_name: "International Eyelets Inc",
    address: "7219 Woodfield Rd",
    city: "Overland Park",
    county: "Johnson",
    state: "KS",
    zip: 66204,
    phone1: "913-413-4604",
    phone: "913-645-8918",
    email: "doldroyd@aol.com",
  },
  {
    first_name: "Roxane",
    last_name: "Campain",
    company_name: "Rapid Trading Intl",
    address: "1048 Main St",
    city: "Fairbanks",
    county: "Fairbanks North Star",
    state: "AK",
    zip: 99708,
    phone1: "907-231-4722",
    phone: "907-335-6568",
    email: "roxane@hotmail.com",
  },
  {
    first_name: "Lavera",
    last_name: "Perin",
    company_name: "Abc Enterprises Inc",
    address: "678 3rd Ave",
    city: "Miami",
    county: "Miami-Dade",
    state: "FL",
    zip: 33196,
    phone1: "305-606-7291",
    phone: "305-995-2078",
    email: "lperin@perin.org",
  },
  {
    first_name: "Erick",
    last_name: "Ferencz",
    company_name: "Cindy Turner Associates",
    address: "20 S Babcock St",
    city: "Fairbanks",
    county: "Fairbanks North Star",
    state: "AK",
    zip: 99712,
    phone1: "907-741-1044",
    phone: "907-227-6777",
    email: "erick.ferencz@aol.com",
  },
  {
    first_name: "Fatima",
    last_name: "Saylors",
    company_name: "Stanton, James D Esq",
    address: "2 Lighthouse Ave",
    city: "Hopkins",
    county: "Hennepin",
    state: "MN",
    zip: 55343,
    phone1: "952-768-2416",
    phone: "952-479-2375",
    email: "fsaylors@saylors.org",
  },
  {
    first_name: "Jina",
    last_name: "Briddick",
    company_name: "Grace Pastries Inc",
    address: "38938 Park Blvd",
    city: "Boston",
    county: "Suffolk",
    state: "MA",
    zip: 2128,
    phone1: "617-399-5124",
    phone: "617-997-5771",
    email: "jina_briddick@briddick.com",
  },
  {
    first_name: "Kanisha",
    last_name: "Waycott",
    company_name: "Schroer, Gene E Esq",
    address: "5 Tomahawk Dr",
    city: "Los Angeles",
    county: "Los Angeles",
    state: "CA",
    zip: 90006,
    phone1: "323-453-2780",
    phone: "323-315-7314",
    email: "kanisha_waycott@yahoo.com",
  },
  {
    first_name: "Emerson",
    last_name: "Bowley",
    company_name: "Knights Inn",
    address: "762 S Main St",
    city: "Madison",
    county: "Dane",
    state: "WI",
    zip: 53711,
    phone1: "608-336-7444",
    phone: "608-658-7940",
    email: "emerson.bowley@bowley.org",
  },
  {
    first_name: "Blair",
    last_name: "Malet",
    company_name: "Bollinger Mach Shp & Shipyard",
    address: "209 Decker Dr",
    city: "Philadelphia",
    county: "Philadelphia",
    state: "PA",
    zip: 19132,
    phone1: "215-907-9111",
    phone: "215-794-4519",
    email: "bmalet@yahoo.com",
  },
];

function ContactsMain(props) {
  const dataa = useBearStore((state) => state.data);
  const [userData,setUserData] = useState(USER_DATA);
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");
  const inputField = useRef(0)
  let userNameCheck = inputField.current
  
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("LOCAL_STORAGE"));
    if (list) {
      setUserData(list)
      setFilteredUsers(list);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("LOCAL_STORAGE", JSON.stringify(filteredUsers));
  }, [filteredUsers]);

  useEffect(()=>{
    if(Object.keys(dataa).length > 0){
      setUserData((prevState)=> [...prevState , dataa])
      setFilteredUsers((prevState)=> [...prevState , dataa])
      console.log(dataa)
    }
  },[dataa])

  const onSelectContact = (users, selected_user) => {
    setFilteredUsers((prevState) => {
      return [...users];
    });
    setUser(selected_user);
  };

  function handleChange(event) {
    setUserName((prevStae) => {
      return event.target.value;
    });
  }

  const onFilter = (e) => {
    let filterUsers;
    let un = e.toLowerCase().trim();
    if (un !== "") {
      filterUsers = userData.filter((item) => {
        if (
          (
            item.first_name.toLowerCase() +
            " " +
            item.last_name.toLowerCase()
          ).match(un)
        )
          return item;
        return null;
      });
      setFilteredUsers(filterUsers);
    } else {
      setFilteredUsers(userData);
    }
  };

  const handleDeleteItem = (user_name) => {
    let list = userData.filter((item) => {
      return item.first_name+" "+item.last_name !== user_name;
    });
    console.log(list)
    setUserData(list);
    setFilteredUsers(list);
    setUser({})
  };


  return (
    < >
      <div
        // initial={{ x: "100vw" }}
        // animate={{ x: 0 }}
        // transition={{ duration: 0.5 }}
        style={{ overflow: "overlay" }}
        className=" hover:overflow-visible overflow-hidden 
              md:rounded-s-2xl
              basis-6/12
              hidden
              pr-6
              md:block
              md:basis-5/12 
              lg:basis-4/12 
              xl:basis-3/12 
              bg-opacity-75 bg-white p-4"
      >
        <div className=" flex flex-col sticky -top-4 backdrop-blur-md overflow-hidden">
          <div className="flex justify-between items-center pb-2 ">
            <div className=" pt-4  flex gap-3 pb-4">
              <div className=" bg-red-500 w-5 h-5 rounded-full text-center font-extrabold"></div>
              <div className=" bg-yellow-300 w-5 h-5 rounded-full text-center font-extrabold"></div>
              <div className=" bg-green-500  w-5 h-5 rounded-full text-center font-extrabold"></div>
            </div>
            <div>
              <button className="rounded-lg p-1 px-3 bg-sky-400 border-2">
                <Link to="/new">Add Contact</Link>
              </button>
            </div>
          </div>
          <div className=" sticky overflow-hidden flex rounded-xl bg-white border-white border-4">
            <div className=" rounded pl-2">
              <svg
                className=" w-7 h-10 bg-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
            ref={inputField}
              value={userName}
              onChange={(e) => {
                handleChange(e);
                onFilter(e.target.value);
              }}
              className=" w-[120%] pl-2 rounded text-lg outline-none
              "
              type="text"
              placeholder="Search"
            />
            {userNameCheck.value && (
              <div
                className="  rounded pr-2 cursor-pointer "
                onClick={() => {
                  setUserName("");
                  setFilteredUsers(userData);
                }}
              >
                <svg
                  className=" w-7 h-10 bg-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 m-3">
          <div>
            <div>
              <div className=" font-medium text-lg">
                <ContactList
                  onSelectContact={onSelectContact}
                  usersData={filteredUsers}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactDetails onDeleteUser={handleDeleteItem} user={user} />

    </>
  );
}

export default ContactsMain;
