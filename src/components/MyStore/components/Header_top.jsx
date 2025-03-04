import React from "react";
import "../myStore.css";


export default function Header_top() {
  return (
    <div>
      <div className="header-top">
        <div className="container">
          <div className="header__top-row">
            <a className="burger" href="#!">
              <img src="./img/Category.svg" alt="logo" />
            </a>
            <ul>
              <li>
                <a href="#!">New Arrival</a>
              </li>
              <li>
                <a href="#!">Men</a>
              </li>
              <li>
                <a href="#!">Women</a>
              </li>
              <li>
                <a href="#!">Kids</a>
              </li>
            </ul>

            <a className="logo" href="#!">
              <img src="./img/Logo.png" alt="logo" />
            </a>

            <div className="png-row">
              <img className="cursor" src="./img/Search.png" alt="png" />
              <img className="cursor" src="./img/Account.png" alt="png" />
              <img className="cursor" src="./img/Shopping bag.png" alt="png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}