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
  const [albumSelected, setAlbumSelected] = useState<boolean>(false);

  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    ''
  );

  const handleClick = (collection: string | null) => {
    setAlbumSelected(!albumSelected);
    setSelectedCollection(collection);
  };

  const returnToHomePage = () => {
    setAlbumSelected(false);
  };

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
            <NavBar returnToHomePage={returnToHomePage} />
          </div>
          <div>
            <div>
              <WalletInput handleSubmit={handleSubmit} />
            </div>
            <div>
              <MainContainer
                selectedCollection={selectedCollection}
                albumSelected={albumSelected}
                handleClick={(collection) => handleClick(collection)}
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
