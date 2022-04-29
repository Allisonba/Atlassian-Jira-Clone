import "./App.css"
import Navbar from "./components/homepage/Navbar";
import SecondNavBar from "./components/homepage/SecondNavBar";
import MainContent from "./components/homepage/MainContent";

function App() {
  return (
     <div>
       <Navbar/>
       <SecondNavBar/>
       <MainContent/>
     </div>
  );
}

export default App;
