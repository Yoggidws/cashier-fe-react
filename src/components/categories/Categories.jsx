import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
// import card from '../../assets/card.jpeg'

export default function Categories() {
  return (
    <div className='flex flex-wrap w-[947px] '>
      <div className="categories w-1/4 p-5">
        <div className=" rounded-xl bg-lime-200 overflow-hidden shadow-lg p-5">
          <FontAwesomeIcon icon={faBowlFood} size='xl' />
          <div className=" w-36 h-24 pt-8">
            <div className="font-bold text-xl mb-2">Breakfast</div>
            <p className="text-gray-700 text-base">
              14 Items
            </p>
          </div>
        </div>
      </div>
      <div className="categories w-1/4 p-5">
        <div className=" rounded-xl bg-lime-200 overflow-hidden shadow-lg p-5">
          <FontAwesomeIcon icon={faBowlFood} size='xl' />
          <div className=" w-36 h-24 pt-8">
            <div className="font-bold text-xl mb-2">Soups</div>
            <p className="text-gray-700 text-base">
              14 Items
            </p>
          </div>
        </div>
      </div>
      <div className="categories w-1/4 p-5">
        <div className=" rounded-xl bg-lime-200 overflow-hidden shadow-lg p-5">
          <FontAwesomeIcon icon={faBowlFood} size='xl' />
          <div className=" w-36 h-24 pt-8">
            <div className="font-bold text-xl mb-2">Pasta</div>
            <p className="text-gray-700 text-base">
              14 Items
            </p>
          </div>
        </div>
      </div>
      <div className="categories w-1/4 p-5">
        <div className=" rounded-xl bg-lime-200 overflow-hidden shadow-lg p-5">
          <FontAwesomeIcon icon={faBowlFood} size='xl' />
          <div className=" w-36 h-24 pt-8">
            <div className="font-bold text-xl mb-2">Sushi</div>
            <p className="text-gray-700 text-base">
              14 Items
            </p>
          </div>
        </div>
      </div>
      <div className="categories w-1/4 p-5">
        <div className=" rounded-xl bg-lime-200 overflow-hidden shadow-lg p-5">
          <FontAwesomeIcon icon={faBowlFood} size='xl' />
          <div className="w-36 h-24 pt-8">
            <div className="font-bold text-xl mb-2">Main Course</div>
            <p className="text-gray-700 text-base">
              14 Items
            </p>
          </div>
        </div>
      </div>
      <div className="categories w-1/4 p-5">
        <div className=" rounded-xl bg-lime-200 overflow-hidden shadow-lg p-5">
          <FontAwesomeIcon icon={faBowlFood} size='xl' />
          <div className=" w-36 h-24 pt-8">
            <div className="font-bold text-xl mb-2">Dessert</div>
            <p className="text-gray-700 text-base">
              14 Items
            </p>
          </div>
        </div>
      </div>
      <div className="categories w-1/4 p-5">
        <div className=" rounded-xl bg-lime-200 overflow-hidden shadow-lg p-5">
          <FontAwesomeIcon icon={faBowlFood} size='xl' />
          <div className=" w-36 h-24 pt-8">
            <div className="font-bold text-xl mb-2">Drinks</div>
            <p className="text-gray-700 text-base">
              14 Items
            </p>
          </div>
        </div>
      </div>
      <div className="categories w-1/4 p-5">
        <div className=" rounded-xl bg-lime-200 overflow-hidden shadow-lg p-5">
          <FontAwesomeIcon icon={faBowlFood} size='xl' />
          <div className=" w-36 h-24 pt-8">
            <div className="font-bold text-xl mb-2">Alcohol</div>
            <p className="text-gray-700 text-base">
              14 Items
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
