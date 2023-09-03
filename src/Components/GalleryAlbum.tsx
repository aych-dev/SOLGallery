import { NftImage } from '../Hooks/useCollection';

interface Props {
  imageData: NftImage[];
}

const GalleryAlbum = ({ imageData }: Props) => {
  const imageElement = imageData.map((data) => {
    return (
      <div key={data.id} className='flex items-center justify-center p-2'>
        <div className='grid-cols-2'>
          <div className='flex items-center justify-center '>
            <img
              className='h-36 rounded-xl border border-purple-500 '
              src={data.image}
              alt='NFT'
            />
          </div>
          <div className='flex items-center justify-center font-bold font-serif   '>
            <p>{data.name}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className='grid grid-cols-4'>{imageElement}</div>;
};

export default GalleryAlbum;
