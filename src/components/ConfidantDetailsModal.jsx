import React, { useState } from "react";
import ModalCustom from "./ModalCustom";

const ConfidantDetailsModal = ({ details }) => {
    if (!details) {
        return null;
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div>
                <img src="src/assets/details.png" onClick={handleOpen}
                style={{
                    width: '100%',
                    cursor: 'pointer'
                }}></img>
                <ModalCustom
                    handleClose = {handleClose}
                    open = {open}
                >
                    <img src="src/assets/details.png" style={{
                        width: '60%',
                        height: 'auto'
                    }}></img>
                    <h2 style = {{padding: 0, margin: 0, fontSize: '1.7em', color: '#ffffff',}}>{details}</h2>
                </ModalCustom>
            </div>
        </>
    );
};

export default ConfidantDetailsModal;