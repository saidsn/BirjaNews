import {Outlet} from 'react-router-dom';
import Footer from "./Components/Layout/Footer/Footer.jsx";
import Header from './Components/Layout/Header/Header.jsx';

  function App() {
  return (
    <div> 
          <Header/>
          <Outlet/>
          <Footer/>      
    </div>
  );
}

export default App;