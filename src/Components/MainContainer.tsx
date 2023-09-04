import Gallery from './Gallery';
import { NftImage } from '../Hooks/useCollection';

interface Props {
  imageData: NftImage[];
}

const MainContainer = ({ imageData }: Props) => {
  return (
    <div>
      <Gallery imageData={imageData} />
    </div>
  );
};

export default MainContainer;
