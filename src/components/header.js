import { Link } from "gatsby"
import React, { useEffect } from "react"

import { useLocation } from "@reach/router";


const Header = ({ menuState, setMenuState }) => {

  const location = useLocation()

  useEffect(() => {
    setMenuState(false)
  }, [location])
 
  return (
    <header>
      <div className="container fluid">
        <div className="header-inner">
          <Link activeClassName="active" to="/">
            Pocket.
          </Link>
          <div
            onClick={() => setMenuState(!menuState)}
            className="hamburger-menu"
           
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header