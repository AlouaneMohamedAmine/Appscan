
function LatestUpdate ()  {
    const mangas = [
      {
        title: 'Solo Max-Level Newbie',
        chapter1: 'Chapter 144 - Holidays at the Fortress (1)',
        chapter2: 'Chapter 144 - Holidays at the Fortress (2)',
        chapter3: 'Chapter 144 - Holidays at the Fortress (3)',
        image: 'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',
      },
      {
        title: 'Solo Max-Level Newbie',
        chapter1: 'Chapter 144 - Holidays at the Fortress (1)',
        chapter2: 'Chapter 144 - Holidays at the Fortress (2)',
        chapter3: 'Chapter 144 - Holidays at the Fortress (3)',
        image: 'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',
      },
      {
        title: 'Solo Max-Level Newbie',
        chapter1: 'Chapter 144 - Holidays at the Fortress (1)',
        chapter2: 'Chapter 144 - Holidays at the Fortress (2)',
        chapter3: 'Chapter 144 - Holidays at the Fortress (3)',
        image: 'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',
      },
      {
        title: 'Solo Max-Level Newbie',
        chapter1: 'Chapter 144 - Holidays at the Fortress (1)',
        chapter2: 'Chapter 144 - Holidays at the Fortress (2)',
        chapter3: 'Chapter 144 - Holidays at the Fortress (3)',
        image: 'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',
      },
      {
        title: 'Solo Max-Level Newbie',
        chapter1: 'Chapter 144 - Holidays at the Fortress (1)',
        chapter2: 'Chapter 144 - Holidays at the Fortress (2)',
        chapter3: 'Chapter 144 - Holidays at the Fortress (3)',
        image: 'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',
      },
      {
        title: 'Solo Max-Level Newbie',
        chapter1: 'Chapter 144 - Holidays at the Fortress (1)',
        chapter2: 'Chapter 144 - Holidays at the Fortress (2)',
        chapter3: 'Chapter 144 - Holidays at the Fortress (3)',
        image: 'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',
      },
      {
        title: 'Solo Max-Level Newbie',
        chapter1: 'Chapter 144 - Holidays at the Fortress (1)',
        chapter2: 'Chapter 144 - Holidays at the Fortress (2)',
        chapter3: 'Chapter 144 - Holidays at the Fortress (3)',
        image: 'https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png',
      },
       
    
      // ... Ajoutez d'autres objets manga ici
    ];
  
    return (
        <div className="mt-7 text-white max-w-screen-lg mx-auto">
          <div className="bg-gray-800">
          <div className="flex justify-between items-center m-4">
            <h2 className="text-xl">Latest Update</h2>
            <a href="/browse">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View All
            </button>
            </a>
          </div>            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mangas.map((manga, index) => (
                <div key={index} className="bg-gray-800 p-2 rounded flex">
                  <img src={manga.image} alt={manga.title} className="w-1/2 h-auto object-cover rounded" />
                  <div className="ml-4">
                    <h3 className="text-lg mt-2">{manga.title}</h3>
                    <p>{manga.chapter1}</p>
                    <p>{manga.chapter2}</p>
                    <p>{manga.chapter3}</p>
                    {/* Ajoutez le composant de notation par étoiles ici */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  }
  
  export default LatestUpdate;
  