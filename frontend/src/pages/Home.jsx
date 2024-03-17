import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import PopularToday from '../components/PopularToday';
import LatestUpdate from '../components/LatestUpdate';
import PopularSelection from '../components/PopularSelection';
//import Footer from '../components/Footer';


function Home() {
    return (
 <div>
    <Navbar/>
    <div className='lg:flex lg:flex-row justify-center'>
    <div className=''>
    <Slider/>
    <PopularToday/>
    <LatestUpdate/>
    </div> 
    <div className='lg:ml-5 lg:mt-20'>
    <PopularSelection/>
    </div>
    </div>
 
  </div>    );
  }
  
  export default Home;