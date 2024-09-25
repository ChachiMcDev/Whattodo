import React from 'react';

const Header = (props, { title = "Default Example title: Indecision App" }) => (
    <div className='header'>
        <div className='container'>
            <h1 className='header__title'>{title}</h1>
            {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
        </div>

    </div>
);

export { Header }