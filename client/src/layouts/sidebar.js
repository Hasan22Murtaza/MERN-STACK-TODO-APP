import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a href="/types" className="nav-link collapsed">
                            <i className="bi bi-grid" />
                            <span>Meeting</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" style={{ cursor: "pointer" }}>
                            <i className="bi bi-box-arrow-right" />
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar
