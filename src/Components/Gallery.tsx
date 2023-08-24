import useCollection from '../Hooks/useCollection';

const Gallery = () => {
  const { ImageData } = useCollection();
  console.log(ImageData);
  if (ImageData.length < 1) return null;

  return (
    <>
      <img src={ImageData[16].uri} alt='NFT' />
      <div>Gallery</div>;
    </>
  );
};

export default Gallery;
