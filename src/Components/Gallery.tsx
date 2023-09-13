import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { NftImage } from '../Hooks/useCollection';

interface Props {
  imageData: NftImage[];
}

const Gallery = ({ imageData }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {imageData.map((data) => (
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
              className='flex items-center justify-center'
            >
              {data.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
