import React from 'react';

import GuessForm from '../guess-form/guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm onValue={(value)=> props.onValue(value)}/>
        </section>
    );
}

