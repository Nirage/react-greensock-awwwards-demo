import React, { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../animations/animations";

const Header = ({history, dimensions}) => {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setMenuState(false);
    });

    menuState ? openMenu(dimensions.width) : closeMenu();
  });

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <NavLink to='/' exact>
              AGENCY
            </NavLink>
          </div>
          <div className='nav-toggle'>
            <div
              onClick={() => setMenuState(true)}
              className='hamburger-menu'>
              <span></span>
              <span></span>
            </div>
            <div
              className='hamburger-menu-close'
              onClick={() => setMenuState(false)}>
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
