import { Outlet } from "react-router-dom";

const Content = () => {
    return (
        <div className={`flex-1 w-screen min-h-screen py-16`}>
            <Outlet />
        </div>
    )
}

export default Content