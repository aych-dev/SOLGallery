import { Card, CardContent, CardMedia } from '@mui/material';
import { NftImage } from '../Hooks/useCollection';
import HomeButton from './HomeButton';

interface Props {
  imageData: NftImage[];
  selectedCollection: string | null;
  returnToHomePage: () => void;
}

const Gallery = ({
  imageData,
  selectedCollection,
  returnToHomePage,
}: Props) => {
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
            <div className='flex items-center justify-center text-purple-300 font-bold font-sans'>
              {data.name}
            </div>
          </CardContent>
        </Card>
      );
    }
  });

  return (
    <>
      <div>
        <HomeButton returnToHomePage={() => returnToHomePage()} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {galleryElement}
      </div>
    </>
  );
};

export default Gallery;
