import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faMoneyBill, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Bills() {
  return (
    <div className="bg-zinc-90 text-white w-[301px] h-screen">
      <div className="flex justify-between p-5">
        <div className="title ">
          <h2 className=" text-xl">Table 5</h2>
          <p className="text-sm">username</p>
        </div>
        <div className=" border rounded-full bg-slate-400 w-9 h-9 relative text-center p-1">
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
      </div>
      <div className="flex flex-col justify-between h-[600px]">
        <div className="items p-3">
          <ol>
            <li className=" bg-slate-500 p-3 rounded-md flex justify-between m-1">
              <p>Roast Chicken</p>
              <p> $20 </p>
            </li>
            <li className=" bg-slate-500 p-3 rounded-md flex justify-between m-1">
              <p>Caviar</p>
              <p> $20 </p>
            </li>
            <li className=" bg-slate-500 p-3 rounded-md flex justify-between m-1">
              <p>Nasi Padang</p>
              <p> $20 </p>
            </li>
          </ol>
        </div>
        <div className="price-total bg-gray-800 h-96 p-5 rounded-md flex flex-col justify-between">
          <div className="">
            <div className="flex justify-between">
              <p>subtotal</p>
              <p>$60</p>
            </div>
            <div className="flex justify-between">
              <p>tax 11%</p>
              <p>$6.6</p>
            </div>
            <div className="flex justify-between">
              <p>grand total</p>
              <p>$60.6</p>
            </div>
          </div>
          <div>
            <div>
              <p>payment methods</p>
              <div className="payment-methods flex justify-around pt-3">
                <div className="cash border p-2">
                  <img src="" alt="" />
                  <FontAwesomeIcon icon={faMoneyBill} size="2xl" />
                </div>
                <div className="debit border p-2">
                  <img src="" alt="" />
                  <FontAwesomeIcon icon={faCreditCard} size="2xl" />
                </div>
                <div className="e-wallet border p-2">
                  <img src="" alt="" />
                  <FontAwesomeIcon icon={faBitcoin} size="2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
