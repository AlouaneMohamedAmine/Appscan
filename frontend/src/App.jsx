import { CurrentUserContextProvider } from "./contexts/userContext";
import Router from "./components/Router";

export default function App() {
 
  return (
    <CurrentUserContextProvider>
       <Router />
       </CurrentUserContextProvider>
   );
}
