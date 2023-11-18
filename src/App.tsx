import { Outlet } from 'react-router-dom';

import './scss/styles.scss';

export const App = () => {
    return(
        <div className={'app'}>
            <Outlet />
        </div>
    )
}