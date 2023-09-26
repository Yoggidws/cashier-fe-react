import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import Orders from '../../components/orders/Orders'
import Menu from "../../components/menu/Menu";
import Reservations from "../../components/Reservation/Reservations";
import Accounting from "../../components/accounting/Accounting";
import Settings from "../../components/setting/Settings";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('menu')

  const handleSidebar = (i) => {
    setActiveComponent(i);
  }
  // console.log(activeComponent)
  return (
    <div className=" flex">
      <Sidebar onSidebar={handleSidebar} activeTab={activeComponent} />
      {activeComponent === 'menu' && <Menu />}
      {activeComponent === 'orders' && <Orders />}
      {activeComponent === 'reservations' && <Reservations />}
      {activeComponent === 'accounting' && <Accounting />}
      {activeComponent === 'settings' && <Settings />}
    </div>
  )
}
