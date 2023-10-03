import { GitHub, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-t from-black to-purple-500 md:h-20 py-4 md:py-0 rounded-b shadow-md text-white text-xl md:font-semibold flex flex-col md:flex-row items-center justify-center  w-full'>
      <div className='flex items-center  mb-2 md:mb-0'>
        <a
          href='https://twitter.com/aychdev'
          target='_blank'
          rel='noopener noreferrer'
          className='mr-4'
        >
          <Twitter style={{ fontSize: 30 }} />
        </a>
        <a
          href='https://github.com/aych-dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHub style={{ fontSize: 30 }} />
        </a>
      </div>
      <div className='text-sm text-center ml-2 md:text-left'>
        Site Created By Aychdev
      </div>
    </footer>
  );
};

export default Footer;
