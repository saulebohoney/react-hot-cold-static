import React from 'react';

import InfoModal from '../info-modal/info-modal.js';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li onClick={()=> props.onClick()}>
                    <a className="what" href="#">
                        What?
                    </a>
                </li>
                <li onClick={()=> props.newGame()}>
                    <a className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

