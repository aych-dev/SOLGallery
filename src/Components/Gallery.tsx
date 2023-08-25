import { NftImage } from '../Hooks/useCollection';

interface Props {
  imageData: NftImage[];
}

const Gallery = ({ imageData }: Props) => {
  const imageElement = imageData.map((data) => {
    return <img src={data.uri} alt='NFT' />;
  });
  return (
    <div>
      {imageElement}
      <div>Gallery</div>
    </div>
  );
};

export default Gallery;
