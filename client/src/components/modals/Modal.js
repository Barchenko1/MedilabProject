import React from 'react';
import ReactDom from 'react-dom';

const Modal = props => {
    return ReactDom.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className='ui standard modal active'>
                <div className="header">
                    {props.header}
                </div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;