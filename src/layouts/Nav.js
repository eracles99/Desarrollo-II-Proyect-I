import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-white bg-white mt-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 19 19">
                    <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                    Home
                </Link>

                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav " style={{ fontSize: '20px' }}>
                        <li className="nav-item">
                                <NavLink 
                                    className="nav-link active}"
                                    to='/Breaking-Bad-Screen'>
                                    Breaking Bad
                                </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )} 
                                to='/Better-Call-SaulS-creen'>
                                Better Call Saul
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => 'nav-item nav-link ' + ( isActive ? 'active' : '' )}
                                to='/Search-Screen' 
                                >
                                Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    </>
  )
}
