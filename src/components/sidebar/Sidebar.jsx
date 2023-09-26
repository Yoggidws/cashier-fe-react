import Shift from "../shift/Shift";

export function Sidebar({ onSidebar, activeTab }) {
  const toggleTab = (i) => {
    onSidebar(i)
  }

  return (
    <section>
      <aside className="sidebar-menu bg-zinc-900 w-72 text-white h-screen" >
        {/* logos */}
        <div className="logo">
          <div className=" p-10 flex">
            <img src="src\assets\react.svg" alt="lerkud" className=" pr-2" />
            <h2>AINGMAUNG</h2>
          </div>
        </div>
        {/* menu */}
        <div>
          <div className={activeTab === 'menu' ?
            "bg-slate-600 w-52 p-1 rounded-md font-display text-xl ml-3 transition-all cursor-pointer" :
            "rounded-md font-display text-xl ml-3 active:cursor-pointer hover:cursor-pointer "}
            onClick={() => toggleTab('menu')}>
            Menu
          </div>
          <div className={activeTab === 'orders' ?
            "bg-slate-600 w-52 p-1 rounded-md font-display text-xl ml-3 transition-all cursor-pointer" :
            "rounded-md font-display text-xl ml-3 active:cursor-pointer hover:cursor-pointer "}
            onClick={() => toggleTab('orders')}>
            Orders
          </div>
          <div className={activeTab === 'reservations' ?
            "bg-slate-600 w-52 p-1 rounded-md font-display text-xl ml-3 transition-all cursor-pointer" :
            "rounded-md font-display text-xl ml-3 active:cursor-pointer hover:cursor-pointer "}
            onClick={() => toggleTab('reservations')}>
            {/* <button onClick={() => activeTab('reservations')}>test</button> */}
            Reservation
          </div>
          <div className={activeTab === 'accounting' ?
            "bg-slate-600 w-52 p-1 rounded-md font-display text-xl ml-3 transition-all cursor-pointer" :
            "rounded-md font-display text-xl ml-3 active:cursor-pointer hover:cursor-pointer "}
            onClick={() => toggleTab('accounting')}>
            Accounting
          </div>
          <div className={activeTab === 'settings' ?
            "bg-slate-600 w-52 p-1 rounded-md font-display text-xl ml-3 transition-all cursor-pointer" :
            "rounded-md font-display text-xl ml-3 active:cursor-pointer hover:cursor-pointer "}
            onClick={() => toggleTab('settings')}>
            Setting
          </div>
        </div>
        {/* user */}
        <div className=" bottom-0 absolute mb-5">
          <Shift />
        </div>
      </aside>
    </section>
  );
}