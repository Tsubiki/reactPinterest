import React, { Component } from 'react';
import {icon} from 'react-fontawesome'
import PropTypes from 'prop-types';
import './header.css'
import logoHeader from "./logo_header.svg";
import icnSearch from './icn_search.svg';
import icnMenu from './icn_menu.svg';
import icnMenuSub from './icn_menu-sub.svg';
import icnNotification from './icn_notification.svg';
import userAvatarDefault from './img/userAvatarDefault.png';

class Header extends Component {
  render() {
    return (
      <header className="headerContainer">
        <div className="leftSideContainer">
          <div className="mainLogo">
            <a href="javscript: void();">
              <img src={logoHeader} alt="Pinterest - Home"/>
            </a>
          </div>
          <div className="searchContainer">
            <div className="icnSearch">
              <a href="javscript: void();">
                  <img src={icnSearch} />
              </a>
            </div>
            <div className="searchInputContainer">
              <input type="text" placeholder="Start your search " />
            </div>
          </div>
        </div>
        <nav className="navContainer">
          <div>
            <a href="" className="topNavItm">Home</a>
          </div>
          <div>
            <a href="" className="topNavItm userContainer">
              <img src={userAvatarDefault} alt="Pinterest - Home"/>
              <span className="userSelectionLink">Tsahi</span>
            </a>
          </div>
          <div className="topNavItm_mainMenu itmMainCircle">
            <a href="" className="topNavItm menuIcn">
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <div className="topNavItm_notification itmMainCircle">
            <a href="javscript: void();" className="topNavItm">
              <i className="fa fa-comment-alt"></i>
            </a>
          </div>
          <div className="topNavItm_subMenu itmMainCircle">
            <a href="" className="topNavItm">sub</a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
