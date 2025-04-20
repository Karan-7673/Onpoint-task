import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Sidebar />
            <div className="">
                <Outlet />
            </div>
        </>
    )
}

export default Layout
