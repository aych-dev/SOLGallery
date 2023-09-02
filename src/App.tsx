import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MainContainer from './Components/MainContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
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
      </ThemeProvider>
    </>
  );
}

export default App;
