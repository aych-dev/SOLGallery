import Gallery from './Gallery';
import { NftImage } from '../Hooks/useCollection';
import GalleryAlbum from './GalleryAlbum';

interface Props {
  imageData: NftImage[];
}

const MainContainer = ({ imageData }: Props) => {
  return (
    <div>
      <div>
        <GalleryAlbum imageData={imageData} />
      </div>
      <Gallery imageData={imageData} />
    </div>
  );
};

export default MainContainer;
