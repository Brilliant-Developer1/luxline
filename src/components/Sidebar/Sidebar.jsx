import { useEffect, useState } from 'react';
import SidebarWrapper, { SidebarItem } from './SidebarWrapper';
import {
  CirclePlus,
  Home,
  LayoutDashboard,
  ShoppingBasket,
} from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem('activeItem') || '/'
  );

  const handleItemClick = link => {
    setActiveItem(link);
    localStorage.setItem('activeItem', link);
  };

  useEffect(() => {
    const storedActiveItem = localStorage.getItem('activeItem');
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    }
  }, []);
  return (
    <SidebarWrapper>
      <SidebarItem
        icon={<LayoutDashboard size={20} />}
        text="Dashboard"
        active={activeItem === 'home'}
        onClick={() => handleItemClick('home')}
        link="home"
      />
      <SidebarItem
        icon={<ShoppingBasket size={20} />}
        text="All Products"
        active={activeItem === 'all-products'}
        onClick={() => handleItemClick('all-products')}
        link="all-products"
      />
      <SidebarItem
        icon={<CirclePlus size={20} />}
        text="Add Products"
        active={activeItem === 'add-products'}
        onClick={() => handleItemClick('add-products')}
        link="add-products"
      />
      <SidebarItem
        icon={<Home size={20} />}
        text="Home"
        active={activeItem === '/'}
        onClick={() => handleItemClick('/')}
        link="/"
      />
    </SidebarWrapper>
  );
};

export default Sidebar;
