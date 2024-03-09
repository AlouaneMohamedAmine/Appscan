
const PopularSelection = () => {
  const books = [
    { title: 'The Regressed Son of a Duke is an Assassin', genre: 'Action, Adventure, Fantasy, Regression', rating: 95 },
    // Ajoutez vos données de livre ici
  ];

  return (
    <div className="bg-gray-800 text-white p-4 mt-7 w-full sm:w-64 ">
      <h2 className="text-xl font-bold mb-2">Popular</h2>
      <div className="flex items-center space-x-4 mb-2">
        <button className="text-sm text-purple-400">Weekly</button>
        <button className="text-sm text-gray-400">Monthly</button>
        <button className="text-sm text-gray-400">All</button>
      </div>

      {books.map((book, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold">{book.title}</h3>
          <p>{book.genre}</p>
          <div className="flex items-center">
            {/* Implémentez le système de notation par étoiles en fonction de book.rating */}
            <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
            <p className="ml-2">{book.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularSelection;
