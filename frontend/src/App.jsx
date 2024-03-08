import { BrowserRouter as Router } from "react-router-dom";
//import { CurrentUserContextProvider } from "./contexts/userContext";
import Routing from "./components/Routing";

export default function App() {
 
  return (
    <Router>
       <Routing  />
       </Router>
   );
}