import { NftImage, nftCollections } from '../Hooks/useCollection';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
  imageData: NftImage[];
  nftCollection: nftCollections[];
}

const GalleryAlbum = ({ imageData, nftCollection }: Props) => {
  const albumElement = nftCollection.map((collection, index) => (
    <Card key={collection.id}>
      <CardMedia
        component='img'
        alt={`Album ${collection.id}`}
        height='140'
        image={
          imageData[0].id === imageData[0].id ? imageData[index].image : 'blank'
        } // Display the first photo as the album cover
      />
      <CardContent>
        <Typography variant='subtitle1' component='div'>
          {collection.id}
        </Typography>
      </CardContent>
    </Card>
  ));

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {albumElement}
      </div>
    </div>
  );
};

export default GalleryAlbum;
