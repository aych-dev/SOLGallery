import { NftImage, nftCollections } from '../Hooks/useCollection';
import GalleryAlbum from './GalleryAlbum';

interface Props {
  imageData: NftImage[];
  nftCollection: nftCollections[];
  handleClick: (collection: string | null) => void;
  albumSelected: boolean;
  selectedCollection: string | null;
}

const MainContainer = ({
  imageData,
  nftCollection,
  handleClick,
  albumSelected,
  selectedCollection,
}: Props) => {
  return (
    <div className='mt-4'>
      <GalleryAlbum
        albumSelected={albumSelected}
        selectedCollection={selectedCollection}
        nftCollection={nftCollection}
        imageData={imageData}
        handleClick={handleClick}
      />
    </div>
  );
};

export default MainContainer;
