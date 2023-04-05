import React from 'react'

export default function nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            To Do |
                            </a>
                        </li>
                        
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                            Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            N/A
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            N/A
                            </a>
                        </li>
                    </ul>
                </div>
            </h1>
        </nav>

    </div>
  )
}
