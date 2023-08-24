import { Box, TextField, Button } from '@mui/material';

const WalletInput = () => {
  return (
    <div className='flex items-center justify-center'>
      <Box component='form' autoComplete='off'>
        <div className='mt-5 '>
          <TextField
            required
            id='required'
            label='Required'
            defaultValue='Enter Solana Address... '
            type='text'
          />
        </div>
        <div className='flex items-center justify-center mt-3'>
          <Button variant='outlined'>Submit</Button>
        </div>
      </Box>
    </div>
  );
};

export default WalletInput;
