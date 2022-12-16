
import './App.css';
import Footer from './components/Footer/Footer';
import MainNavbar from './components/Navbar/MainNavbar';
import Main from './Main';
// import Thnks from './components/Payment/paymentComponent/Thnks';
function App() {
  return (
   <div className='App'>
    <MainNavbar />
    <Main />
    {/* <Thnks /> */}
    <Footer />
   </div>
  );
}

export default App;
