
const PopularSelection = () => {
  const books = [
    { cover:'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',title: 'The Regressed Son of a Duke is an Assassin', genre: 'Action, Adventure, Fantasy, Regression', rating: 95 },
    // Ajoutez vos données de livre ici
  ];

  return (
    <div className="bg-gray-800 text-white p-4 mt-7 w-full sm:w-64 ">
      <h2 className="text-xl font-bold mb-2">Popular</h2>
      <div className="flex justify-center items-center space-x-4 mb-2 bg-gray-600 p-2">
    <button className="focus:bg-blue-500 text-sm text-white font-bold w-20">Weekly</button>
    <button className="focus:bg-blue-500  text-sm text-white font-bold w-20">Monthly</button>
    <button className="focus:bg-blue-500  text-sm text-white font-bold w-20">All</button>
      </div>


      {books.map((book, index) => (
        <div key={index} className="mb-4 mt-10 flex">
          <img src={book.cover} alt=""  className="w-1/6"/>
          <div className="ml-5">
          <h3 className="font-bold ">{book.title}</h3>
          <p>{book.genre}</p>
          <div className="flex items-center">
            {/* Implémentez le système de notation par étoiles en fonction de book.rating */}
            <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            <p className="ml-2">{book.rating}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularSelection;
