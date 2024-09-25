import React, { useState } from 'react';
import Modal from 'react-modal';




const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


//const [modalIsOpen, setIsOpen] = useState(true);
// !! converts a string to boolean
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        ariaHideApp={false}
        contentLabel="Selected Option"
        onRequestClose={props.handleCloseModal}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className='modal__title'>Selected Option</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button' onClick={props.handleCloseModal}>Close</button>
    </Modal>
);


export { OptionModal }