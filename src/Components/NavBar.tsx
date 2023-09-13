interface Props {
  returnToHomePage: () => void;
}

const NavBar = ({ returnToHomePage }: Props) => {
  return (
    <div className=' bg-gradient-to-b from-black to-purple-500 h-20 rounded-b shadow-md text-white text-xl font-semibold flex items-center justify-center'>
      <div className='cursor-pointer' onClick={() => returnToHomePage()}>
        SOLGallery
      </div>
    </div>
  );
};

export default NavBar;
