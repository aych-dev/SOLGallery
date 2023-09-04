import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MainContainer from './Components/MainContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import WalletInput from './Components/WalletInput';
import useCollection from './Hooks/useCollection';
import { useState } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [solanaAddress, setSolanaAddress] = useState<string>('');
  const { imageData, nftCollection } = useCollection(solanaAddress);
  console.log(imageData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newSolanaAddress = formData.get('solanaAddressInput') as string;
    setSolanaAddress(newSolanaAddress);
  };
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>
          <div>
            <NavBar />
          </div>
          <div>
            <div>
              <WalletInput
                solanaAddress={solanaAddress}
                handleSubmit={handleSubmit}
              />
            </div>
            <div>
              <MainContainer
                nftCollection={nftCollection}
                imageData={imageData}
              />
            </div>
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
