import React from "react";
import { Modal, Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const slideDownFadeRotate = keyframes`
    from {
        transform: translate(-50%, -100%) rotate(0deg);
        opacity: 0;
    }
    to {
        transform: translate(-50%, -50%) rotate(-10deg);
        opacity: 1;
    }
`;

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(-10deg)",
    width: 450,
    height: 550,
    animation: `${slideDownFadeRotate} 0.4s ease-out`,
    backgroundImage: `url(src/assets/calendar-bg.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "10px solid #000000",
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    outline: 'none',
    '&:focus-visible': {
        outline: 'none',
    }, 
};

const ModalCustom = ({ handleClose, open, children }) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <>
                    <Box sx={modalStyle}>
                        <div>{children}</div>
                    </Box>
                    <img
                        src="src/assets/close.png"
                        onClick={handleClose}
                        style={{
                            position: 'fixed',
                            top: '10px',
                            right: '10px',
                            cursor: 'pointer',
                            zIndex: 9999
                        }}
                    />
                </>
            </Modal>
        </div>
    );
};

export default ModalCustom;