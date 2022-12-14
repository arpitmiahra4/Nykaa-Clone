
import './App.css';
import Footer from './components/Footer/Footer';
import MainNavbar from './components/Navbar/MainNavbar';
import Thnks from './components/Payment/paymentComponent/Thnks';

function App() {
  return (
   <div className='App'>
    <MainNavbar />
    
    <Thnks/>
    <Footer />
   </div>
  );
}

export default App;
