import Navbar from "../components/Navbar";

function WebtoonPage() {
    return (
 <div>
   <Navbar/>
      
     <div className="flex flex-col p-6 bg-gray-800 mt-20">
      <div className=" flex flex-col  items-center">
        <img src="https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png" alt="Manga Cover" className=" w-1/2"/>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Bookmarked
        </button>
      </div>
      <div className="pl-6">
        <h2 className="text-xl font-bold mb-2 text-white">The Regressed Son of a Duke is an Assassin</h2>
        <p className="text-white text-base">
          Synopsis: The Regressed Son of a Duke is an Assassin...
          {/* Add the rest of the synopsis here */}
        </p>
        <div className="flex text-white text-base mt-4">
        <p className="pr-2">Artist:  </p>
                <p className="bg-gray-900 p-1 mr-1">Action</p>
                </div>
        <div className="flex text-white text-base mt-4  ">
        <p className="pr-2"> Genres: </p>
        <p className="bg-gray-900 p-1 mr-1">Action</p>
        <p className="bg-gray-900 p-1 mr-1">Action</p>
        <p className="bg-gray-900 p-1 mr-1">Action</p>
        <p className="bg-gray-900 p-1 mr-1">Action</p>
        </div>
      </div>
    </div>
      
 </div>    );
  }
  
  export default WebtoonPage;