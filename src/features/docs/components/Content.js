import { Outlet } from "react-router-dom";

import styles from "../../../style";

const Content = () => {
    return (
        <div className={`flex-1 w-screen min-h-screen px-2 py-16`}>
            <Outlet />
        </div>
    )
}

export default Content