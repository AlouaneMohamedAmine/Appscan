import  { useState } from 'react';

function AddManhwa() {
  const [image, setImage] = useState(null);
  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
 
  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="flex flex-col items-center justify-center   bg-gray-800 border-gray-600 mt-10">
      <form className="space-y-4 flex flex-col ">
    
        <label className="text-white" htmlFor="">Title</label>
        <input type="text" value={text1} onChange={(e) => setText1(e.target.value)} placeholder="Texte 1" className="py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
        <label className="text-white" htmlFor="">Artist Name</label>
        <input type="text" value={text2} onChange={(e) => setText2(e.target.value)} placeholder="Texte 2" className="py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
        <label  className="text-white" htmlFor="">Synopsis</label>
        <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-600"   placeholder="Describe everything about this post here"></textarea>
        <select value={select1} onChange={(e) => setSelect1(e.target.value)} className="py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600">
          <option value="">Sélecteur 1</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <select value={select2} onChange={(e) => setSelect2(e.target.value)} className="py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600">
          <option value="">Sélecteur 2</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <input type="file" onChange={handleImageChange} className="py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 text-white" />
        {image && <img src={image} alt="preview" className="h-32 w-32 object-cover" />}
         <button className='rounded bg-blue-500 hover:bg-blue-700 text-white font-bold m-10'>Create</button>
      </form>
    </div>
  );
}

export default AddManhwa;
