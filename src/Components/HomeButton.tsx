import { Button } from '@mui/material';

interface Props {
  returnToHomePage: () => void;
}

const HomeButton = ({ returnToHomePage }: Props) => {
  return (
    <div className='p-3'>
      <Button variant='outlined' onClick={() => returnToHomePage()}>
        Back
      </Button>
    </div>
  );
};

export default HomeButton;
