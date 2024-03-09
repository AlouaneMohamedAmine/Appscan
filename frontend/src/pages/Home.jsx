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
    <Slider/>
    <PopularToday/>
    <LatestUpdate/>
    <PopularSelection/>
 
  </div>    );
  }
  
  export default Home;