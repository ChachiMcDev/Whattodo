import React from 'react';
import { Option } from './Option';

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button
                className='button button--link'
                onClick={props.handleDeleteOptions}>Remove All Options
            </button>
        </div>
        {props.options.length === 0 && <p className='widget__message'>Please Enter Some Options</p>}
        {props.options.map((option, index) => {

            return (<div key={index}>
                <Option
                    numcount={index}
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            </div>);
        })}

    </div>

);


export { Options }