
function PopularToday ()  {
  const mangas = [
    {
      title: 'Solo Max-Level Newbie',
      chapter: 'Chapter 144 - Holidays at the Fortress (2)',
      rating: 9.9,
      image: 'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',
    },
    {
        title: 'Solo Max-Level Newbie',
        chapter: 'Chapter 144 - Holidays at the Fortress (2)',
        rating: 9.9,
        image: 'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',
      },
      {
        title: 'Solo Max-Level Newbie',
        chapter: 'Chapter 144 - Holidays at the Fortress (2)',
        rating: 9.9,
        image: 'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',
      },
       {
      title: 'Solo Max-Level Newbie',
      chapter: 'Chapter 144 - Holidays at the Fortress (2)',
      rating: 9.9,
      image: 'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',
    },
    // ... Ajoutez d'autres objets manga ici
  ];

  return (
    <div className="mt-7 text-white max-w-screen-lg mx-auto">
        <div className="bg-gray-800">
      <h2 className="text-xl m-4">{'Populaire aujourd\'hui'}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {mangas.map((manga, index) => (
          <div key={index} className="bg-gray-800 p-2 rounded">
            <img src={manga.image} alt={manga.title} className="w-full h-auto object-cover rounded" />
            <h3 className="text-lg mt-2">{manga.title}</h3>
            <p>{manga.chapter}</p>
            {/* Ajoutez le composant de notation par étoiles ici */}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default PopularToday;
