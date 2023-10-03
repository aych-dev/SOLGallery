import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { NftImage } from '../Hooks/useCollection';

interface Props {
  imageData: NftImage[];
  selectedCollection: string | null;
}

const Gallery = ({ imageData, selectedCollection }: Props) => {
  const galleryElement = imageData.map((data) => {
    if (selectedCollection === data.collection) {
      return (
        <Card key={data.id}>
          <CardMedia
            component='img'
            alt={data.id}
            height='900'
            image={data.image}
          />
          <CardContent>
            <Typography
              variant='subtitle1'
              component='div'
              className='flex items-center justify-center text-purple-300'
            >
              {data.name}
            </Typography>
          </CardContent>
        </Card>
      );
    }
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {galleryElement}
    </div>
  );
};

export default Gallery;
