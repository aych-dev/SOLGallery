import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MainContainer from './Components/MainContainer';

function App() {
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <MainContainer />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
