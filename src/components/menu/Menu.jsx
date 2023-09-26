import Bills from '../bills/Bills'
import CatItems from '../catItems/CatItems'
import Categories from '../categories/Categories'

export default function Menu() {
  return (
    <div className='bg-zinc-900 w-max flex flex-row'>
      <div className='flex flex-wrap flex-col pb-10'>
        <Categories />
        <CatItems />
      </div>
      <Bills />
    </div>
  )
}
