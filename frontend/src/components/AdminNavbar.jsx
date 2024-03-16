import { useNavigate } from "react-router-dom";

function AdminNavbar() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex  flex-col md:flex-row mt-20 "> 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 ml-2 mr-2" onClick={() => navigate("/admin/webtoons_gestion")} type="button">Webtoon gestion</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 ml-2 mr-2" onClick={() => navigate("/admin/chapters_gestion")} type="button">Chapters gestion</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 ml-2 mr-2" onClick={() => navigate("/admin/users_gestion")} type="button">User Gestion</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 ml-2 mr-2" onClick={() => navigate("/admin/comments_gestion")} type="button">Comments Gestion</button>
            </div>

        </div>
    );
}

export default AdminNavbar;
