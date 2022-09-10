import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/contextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative p-3 text-xl rounded-full hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const {
    isClicked,
    setIsClicked,
    activeMenu,
    currentColor,
    setActiveMenu,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="relative flex justify-between p-2 md:mx-6">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevValue) => !prevValue)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex ">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03c9d7"
          customFunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          dotColor="#03c9d7"
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-light-gray"
            onClick={() => handleClick('userProfile')}
          >
            <img src={avatar} className="w-8 h-8 rounded-full" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="ml-1 font-bold text-gray-500 text-14">Ahim</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.UserProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
