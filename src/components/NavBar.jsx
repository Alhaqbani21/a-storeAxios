import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar bg-base-300 text-base-content h-20 max-md:h-auto max-md:flex-col max-md:items-start">
      <div className="flex-1 max-md:w-full max-md:flex max-md:justify-between max-md:px-5">
        <a className="text-2xl ms-5 max-md:ms-0">A-Store</a>

        {props.nameDetails && (
          <p className="mx-2 max-md:mt-2 max-md:text-lg">
            Welcome <span className="text-green-700">{props.nameDetails}</span>
          </p>
        )}

        <button
          className="max-md:block md:hidden px-2 py-1 text-xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <div
        className={`flex-none max-md:w-full max-md:mt-2 ${
          menuOpen ? 'max-md:block' : 'max-md:hidden'
        }`}
      >
        <ul className="menu menu-horizontal px-1 text-xl max-md:flex max-md:flex-col max-md:items-start gap-5">
          <li className="max-md:w-full max-md:mb-2">
            {props.rightTitle && (
              <Link to={props.rightTitleLink}>{props.rightTitle}</Link>
            )}
          </li>
          <li className="max-md:w-full max-md:flex-col flex flex-row ">
            {props.endTitle && (
              <Link
                onClick={() => {
                  props.endTitle === 'Logout' ? localStorage.clear() : 0;
                }}
                to={props.endTitleLink}
              >
                {props.endTitle === 'Logout' ? (
                  <span className="text-red-500">{props.endTitle}</span>
                ) : (
                  props.endTitle
                )}
              </Link>
            )}
            {props.endDelete && (
              <Link
                className=""
                onClick={() => {
                  props.endDelete === 'Delete Account'
                    ? props.onClickDelete()
                    : 0;
                }}
                to={'../'}
              >
                {props.endDelete === 'Delete Account' ? (
                  <span className="text-red-900">{props.endDelete}</span>
                ) : (
                  props.endDelete
                )}
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
