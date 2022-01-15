import ItemsContainer from './ItemsContainer';

const Footer = () =>
{
  return (
    <footer className='bg-gray-800 mt-12 text-white '>

      <ItemsContainer />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 
      text-center pt-2 text-gray-400 text-sm pb-8'>
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  )
}

export default Footer
