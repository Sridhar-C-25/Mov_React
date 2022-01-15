import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from './Menus'
import Items from './Items';

const ItemsContainer = () =>
{
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4
    gap-6 sm:px-8 px-5 py-16'>
      <Items links={PRODUCTS} tit="PRODUCTS" />
      <Items links={RESOURCES} tit="RESOURCES" />
      <Items links={COMPANY} tit="COMPANY" />
      <Items links={SUPPORT} tit="SUPPORT" />
    </div>
  )
}

export default ItemsContainer
