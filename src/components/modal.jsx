import React from "react";
import "./modal.css"

const Modal = (props) => {
    const titleM = props.title;
    const textM = props.text;
    const showModal = props.showModal;

    return (
        <div className="modalbackground">
            <div className="modal" id="modal" >
                <div className="modalheader">
                    <span className="modaltitle">
                        {titleM}
                    </span>
                    <span className="close" onClick={() => showModal(false)}>
                        X
                    </span>
                </div>
                {textM && (
                    <div className="modal-body">
                        <hr className="separation" />
                        <div className="modaltext">
                            {textM}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;