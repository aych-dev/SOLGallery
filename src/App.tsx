import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MainContainer from './Components/MainContainer';
import WalletInput from './Components/WalletInput';
import useCollection from './Hooks/useCollection';
import { useState } from 'react';
import HomeButton from './Components/HomeButton';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [solanaAddress, setSolanaAddress] = useState<string>('');
  const { imageData, nftCollection, isLoading } = useCollection(solanaAddress);
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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='flex flex-col min-h-screen'>
        <NavBar returnToHomePage={returnToHomePage} />
        <main className='flex-grow'>
          <WalletInput handleSubmit={handleSubmit} />
          <MainContainer
            returnToHomePage={() => returnToHomePage()}
            isLoading={isLoading}
            selectedCollection={selectedCollection}
            albumSelected={albumSelected}
            handleClick={(collection) => handleClick(collection)}
            nftCollection={nftCollection}
            imageData={imageData}
          />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
