import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactsMain from "./ContactsMain";
import ContactsAddNew from "./ContactPages/ContactsAddNew";

function App() {
  return (
    <div className="overflow-x-hidden ">
      <div className=" bg-[url('imac_bg.jpg')] bg-right-top bg-cover bg-no-repeat ">
        <div className=" flex justify-center items-center h-[100vh] ">
          <div className=" flex justify-center flex-nowrap h-[50pc] w-5/6 m-2">
            <Routes>
              <Route path="/" element={<ContactsMain />}></Route>
              <Route path="/new" element={<ContactsAddNew />}></Route>
              {/* <Route path="/:id" element={<ContactsAddNew />}></Route> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
