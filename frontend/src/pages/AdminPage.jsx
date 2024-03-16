import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function AdminPage() {
    const navigate = useNavigate();

    return (
 <div>
    <Navbar/>
    <div className="flex      mt-20">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("")} type="button">Webtoon gestion</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("")} type="button">Scans gestion</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("")} type="button">User Gestion</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("")} type="button">Comments Gestion</button>
    </div>
 </div>    );
  }
  
  export default AdminPage;