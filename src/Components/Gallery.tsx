import { NftImage } from '../Hooks/useCollection';

interface Props {
  imageData: NftImage[];
}

const Gallery = ({ imageData }: Props) => {
  return (
    <div>
      <img src='' alt='NFT' />
      <div>Gallery</div>
    </div>
  );
};

export default Gallery;
