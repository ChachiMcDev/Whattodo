import React from 'react';

const Option = (props) => (
    <div className='option'>
        <p className='option__text'>{props.numcount + 1}. {props.optionText}</p>
        <button
            className='button button--link'
            onClick={(e) => props.handleDeleteOption(props.optionText)}>Remove
        </button>
    </div>
);


export { Option }