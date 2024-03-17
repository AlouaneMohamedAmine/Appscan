import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer"

 function ChapterPage() {
    return (
 <div>
   <Navbar/>
 
   <h1 className="mx-auto mt-36 mb-10 text-center text-4xl font-bold text-white">TITLE MANHWA</h1>
   <div className="lg:flex ">
      
    <div className="w-full max-w-xs mx-auto ">
      <div className="relative  ">
        <select className="block appearance-none w-full bg-gray-800 border border-gray-200 text-gray-400 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none  focus:border-gray-500" id="grid-state">
          <option>Chapter Number</option>
          <option>New Jersey</option>
          <option>California</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6 1.414-1.414L10 9.172l4.586-4.586L16 6z"/></svg>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-end my-4 mx-4">
    <button className="bg-blue-500 text-white px-6 py-2 rounded-full ml-2">
             Prev
          </button>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-full ml-2">
             Next
          </button>
          </div>
  </div>    
  <div className="flex justify-center mt-10 mb-10">
   <img src="https://asuratoon.com/wp-content/uploads/2024/03/01-13.webp" alt="" />
  </div>
   <ScrollToTop/>
   <Footer/>
   </div>
  
 );
  }
  
  export default ChapterPage;