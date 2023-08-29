import { NftImage } from '../Hooks/useCollection';

interface Props {
  imageData: NftImage[];
}

const Gallery = ({ imageData }: Props) => {
  console.log(imageData);

  const imageElement = imageData.map((data) => {
    return (
      <div className='flex items-center justify-center p-2'>
        <img
          key={data.id}
          className='h-32
        '
          src={data.uri}
          alt='NFT'
        />
      </div>
    );
  });
  return <div className='grid grid-cols-4'>{imageElement}</div>;
};

export default Gallery;
