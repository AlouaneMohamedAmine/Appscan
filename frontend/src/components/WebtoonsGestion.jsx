import  { useState } from "react";
import Navbar from "../components/Navbar";
import AdminNavbar from "./AdminNavbar";
import BackToPreviousPageButton from "./BackToPreviousPageButton";
import AddManhwa from "./AddManhwa";

function WebtoonsGestion() {
  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <Navbar />
      <div className="admin-navbar-mobile">
        <AdminNavbar />
      </div>
      <div className="mobile-only">
        <BackToPreviousPageButton />
      </div>
      <button
        onClick={toggleComponent}
        className="text-white rounded bg-blue-500 hover:bg-blue-700 mt-5"
      >
        {showComponent ? "Hide Manhwa" : "Add Manhwa"}
      </button>
      {showComponent && <AddManhwa />}
    </div>
  );
}

export default WebtoonsGestion;
