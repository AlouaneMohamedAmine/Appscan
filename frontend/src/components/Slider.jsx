import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Slider = () => {
  return (
    <div className="flex flex-col lg:w-3/4 mx-auto  mt-5"> {/*min-h-[50vh] max-h-[50vh] lg:max-h-[10vh] */}
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div style={{ position: 'relative' }}>
          <img 
            src='https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png' 
            alt='Image 1' 
            style={{ 
              width: '100%', 
              height: '300px',
              objectFit: 'cover',
              filter: 'blur(8px)', 
            }} 
          />
          <img 
            src='https://img.asuracomics.com/unsafe/fit-in/720x936/https://asuratoon.com/wp-content/uploads/2023/05/terminallyilldarkknightCover01.png' 
            alt='Image 1' 
            style={{ 
              position: 'absolute', 
              top: '0', 
              right: '0', 
              transform: 'translate(-50%, -50%)', 
              width: '20%', 
              height: 'auto', 
            }} 
          />
          <div className="absolute bottom-0 text-white p-10">
            <h2 className="text-2xl font-semibold">Titre 1</h2>
            <p>Description image 1</p>
          </div>
        </div>
        {/* Ajoutez plus d'images si nécessaire */}
      </Carousel>
    </div>
  );
};

export default Slider;
