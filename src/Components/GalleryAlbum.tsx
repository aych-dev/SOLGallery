import { NftImage, nftCollections } from '../Hooks/useCollection';
import { Card, CardContent, CardMedia } from '@mui/material';
import noImage from '../Images/noImage.png';
import Gallery from './Gallery';
import useCollectionName from '../Hooks/useCollectionName';

interface Props {
  imageData: NftImage[];
  nftCollection: nftCollections[];
  handleClick: (collection: string | null) => void;
  albumSelected: boolean;
  selectedCollection: string | null;
  returnToHomePage: () => void;
}

const GalleryAlbum = ({
  imageData,
  nftCollection,
  handleClick,
  albumSelected,
  selectedCollection,
  returnToHomePage,
}: Props) => {
  const nftCollectionName = nftCollection.map((data) => data.collection);
  const generalData = useCollectionName(nftCollectionName);
  console.log(generalData);

  const albumElement = nftCollection.map((data, index) => {
    const imageIncluded = imageData.some(
      (obj) =>
        obj.collection === data.collection &&
        data.image !== undefined &&
        data.image !== 'none'
    );

    return (
      <Card key={data.id}>
        <CardMedia
          className='cursor-pointer '
          onClick={() => handleClick(data.collection)}
          component='img'
          alt={`Album ${index}`}
          height='148'
          image={imageIncluded ? data.image : noImage}
        />
        <CardContent>
          <div className='flex items-center justify-center text-purple-300 font-bold font-sans'>
            {data.collection === nftCollection[index].collection &&
            data.collection !== 'none'
              ? generalData[index]?.name
              : 'Probably Degen Mints =)'}
          </div>
        </CardContent>
      </Card>
    );
  });

  return (
    <>
      {albumSelected ? (
        <Gallery
          returnToHomePage={() => returnToHomePage()}
          selectedCollection={selectedCollection}
          imageData={imageData}
        />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
          {albumElement}
        </div>
      )}
    </>
  );
};

export default GalleryAlbum;
