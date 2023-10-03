import { Box, TextField, Button } from '@mui/material';

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const WalletInput = ({ handleSubmit }: Props) => {
  return (
    <>
      <div className='flex items-center justify-center mt-3'>
        <Box
          component='form'
          autoComplete='off'
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className='mt-5 '>
            <TextField
              required
              id='solanaAddressInput'
              name='solanaAddressInput'
              label='Enter SOL Address...'
              type='text'
            />
          </div>
          <div className='flex items-center justify-center mt-3'>
            <Button type='submit' variant='outlined'>
              Submit
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default WalletInput;
