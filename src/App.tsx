import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MainContainer from './Components/MainContainer';

function App() {
  return (
    <>
      <div className='bg-purple-300'>
        <div className='bg-red-300 h-14'>
          <NavBar />
        </div>
        <div className='bg-yellow-300 h-screen '>
          <MainContainer />
        </div>
        <div className='bg-orange-300 h-10'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
