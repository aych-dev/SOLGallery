import { NftImage, nftCollections } from '../Hooks/useCollection';
import { CircularProgress } from '@mui/material';
import GalleryAlbum from './GalleryAlbum';

interface Props {
  imageData: NftImage[];
  nftCollection: nftCollections[];
  handleClick: (collection: string | null) => void;
  albumSelected: boolean;
  selectedCollection: string | null;
  isLoading: boolean;
}

const MainContainer = ({
  imageData,
  nftCollection,
  handleClick,
  albumSelected,
  selectedCollection,
  isLoading,
}: Props) => {
  return imageData.length > 1 ? (
    <div className='mt-4 mb-4'>
      <GalleryAlbum
        albumSelected={albumSelected}
        selectedCollection={selectedCollection}
        nftCollection={nftCollection}
        imageData={imageData}
        handleClick={handleClick}
      />
    </div>
  ) : (
    <div className='mt-4 mb-4'>
      {isLoading ? (
        <div className='flex items-center justify-center mt-40'>
          <CircularProgress color='secondary' />
        </div>
      ) : (
        <div className='flex items-center justify-center mt-40 text-purple-300 text-xl'>
          <h1>
            Welcome To <span className='font-bold'>SOLGallery</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default MainContainer;
