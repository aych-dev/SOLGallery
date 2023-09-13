import { NftImage, nftCollections } from '../Hooks/useCollection';
import GalleryAlbum from './GalleryAlbum';

interface Props {
  imageData: NftImage[];
  nftCollection: nftCollections[];
}

const MainContainer = ({ imageData, nftCollection }: Props) => {
  return (
    <div>
      <GalleryAlbum nftCollection={nftCollection} imageData={imageData} />
    </div>
  );
};

export default MainContainer;
