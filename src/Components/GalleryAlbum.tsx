import { NftImage, nftCollections } from '../Hooks/useCollection';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import noImage from '../Images/noImage.png';

interface Props {
  imageData: NftImage[];
  nftCollection: nftCollections[];
}

const GalleryAlbum = ({ imageData, nftCollection }: Props) => {
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
          component='img'
          alt={`Album ${index}`}
          height='148'
          image={imageIncluded ? data.image : noImage}
        />
        <CardContent>
          <Typography variant='subtitle1' component='div'>
            {data.image}
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {albumElement}
      </div>
    </div>
  );
};

export default GalleryAlbum;
