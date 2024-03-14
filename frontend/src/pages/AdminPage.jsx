import Navbar from "../components/Navbar";

function AdminPage() {
    return (
 <div>
    <Navbar/>
    <div className="flex  flex-wrap items-center   mt-20">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Webtoon gestion</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Scans gestion</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">User Gestion</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Comments Gestion</button>
    </div>
 </div>    );
  }
  
  export default AdminPage;