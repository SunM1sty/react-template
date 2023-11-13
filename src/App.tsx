import React, {Suspense} from "react";
import {classname as cn} from 'm1sty-classname';
import { NavLink, Outlet } from "react-router-dom";

import './scss/styles.scss';
import {useTheme} from "./hooks/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return(
        <div className={cn('app', theme)}>
            <header>
                <nav>
                    <NavLink to={'/'}>Начальная</NavLink>
                    <NavLink to={'/about'}> О нас</NavLink>
                    <NavLink to={'/contact'}> Контакты</NavLink>
                </nav>
                <div title={'User Utils'}>
                    <button type={'button'} onClick={toggleTheme}>Change Theme</button>
                </div>
            </header>
            <main>
                <Suspense fallback={'Идёт загрузка'}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    )
}