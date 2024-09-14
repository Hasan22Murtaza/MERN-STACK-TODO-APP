import React from 'react'
import LOGO from "../assets/logo.png"

const Header = () => {
    return (
        <div>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center">
                        <img
                            src={LOGO}
                            alt="Logo"
                        />
                        <span className="d-none d-lg-block">Admin Panel</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn" />
                </div>
                {/* End Logo */}
                {/* End Search Bar */}
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        {/* End Search Icon*/}
                        {/* End Notification Nav */}
                        {/* End Messages Nav */}
                        <li className="nav-item dropdown pe-3">
                            <a
                                className="nav-link nav-profile d-flex align-items-center pe-0"
                                href="#"
                                data-bs-toggle="dropdown"
                            >
                                {/* <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle"> */}
                                <span className="d-none d-md-block dropdown-toggle ps-2" />
                            </a>
                            {/* End Profile Iamge Icon */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6 />
                                    <span>Web Designer</span>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item d-flex align-items-center"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <i className="bi bi-box-arrow-right" />
                                        <span>Sign Out</span>
                                    </a>
                                </li>
                            </ul>
                            {/* End Profile Dropdown Items */}
                        </li>
                        {/* End Profile Nav */}
                    </ul>
                </nav>
                {/* End Icons Navigation */}
            </header>
        </div>
    )
}

export default Header
