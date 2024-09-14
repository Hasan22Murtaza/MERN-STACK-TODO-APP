import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../layouts/header"
import Sidebar from "../layouts/sidebar"
import Footer from "../layouts/footer"
const Layout = () => {
    return (
        <div>
            <div id="app" data-v-app="">
                <div>
                    <Header />
                    <Sidebar />
                    <Outlet />
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default Layout
