import { NftImage } from '../Hooks/useCollection';

interface Props {
  imageData: NftImage[];
}

const Gallery = ({ imageData }: Props) => {
  const imageElement = imageData.map((data) => {
    return (
      <img
        key={data.id}
        className='h-32
        '
        src={data.uri}
        alt='NFT'
      />
    );
  });
  return (
    <div>
      <div className='grid grid-cols-4'>{imageElement}</div>
      <div>Gallery</div>
    </div>
  );
};

export default Gallery;
