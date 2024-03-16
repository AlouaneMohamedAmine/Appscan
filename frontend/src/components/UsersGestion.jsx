import Navbar from "./Navbar";
import AdminNavbar from "./AdminNavbar";
import BackToPreviousPageButton from "./BackToPreviousPageButton";
 
function UsersGestion() {
 
    return (
 <div>
    <Navbar/>
    <div className="admin-navbar-mobile">
    <AdminNavbar/>
 </div>     
 <div className="mobile-only"> 
    <BackToPreviousPageButton/>
 </div> 
 </div>    );
  }
  
  export default UsersGestion;