import Navbar from "../components/Navbar";

function WebtoonPage() {
    return (
 <div>
   <Navbar/>
    
     <div className="flex flex-col p-6 bg-gray-800 mt-20 lg:flex-row  max-w-screen-lg mx-auto">
       
      <div className=" flex flex-col  items-center lg:w-1/3">
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
     
    <div className="bg-gray-800 text-white p-8  shadow-lg mt-10">
      <h1 className="text-2xl font-semibold mb-4  text-center">
        Chapters
      </h1>
      <div className="flex justify-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2  mx-4 rounded">
          First Chapter
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mx-4 rounded">
          New Chapter
        </button>
      </div>
     
      <ul className="mt-4">
        <li className=" ">
          <div className="px-4 py-2 mx-4 rounded border-gray-700 border-2 hover:bg-gray-900  cursor-pointer">
            <a href="/webtoonname/chapter" className="block w-full">Chapter 6</a>
            </div>
        </li>
      
      </ul>
    </div>
 </div>    );
  }
  
  export default WebtoonPage;