import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import GridItem from "./gridItem";

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
  width: 400,
  height: 500,
  animation: `${slideDownFadeRotate} 0.4s ease-out`,
  backgroundImage: `url(src/assets/calendar-bg.png)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  border: "10px solid #000000",
  boxShadow: 24,
  p: 4,
};

const ModalComponent = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
        <img src="src/assets/question.png" onClick={handleOpen}
        style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            cursor: 'pointer'
        }}></img>
      
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={modalStyle}>
            <h1
                style={{
                    margin: '0'
                }}
            >Legend</h1>
            <GridItem
                key={"free"}
                dateNumber={""}
                dateType={"free"}
                tileSkewX={0}
                tileSkewY={0}
                shadowSkewX={8}
                shadowSkewY={8}
                weekday={""}
                clicked={""}
                handleClick={undefined}
            />
            <GridItem
                key={"eveningOnly"}
                dateNumber={""}
                dateType={"eveningOnly"}
                tileSkewX={0}
                tileSkewY={0}
                shadowSkewX={8}
                shadowSkewY={8}
                weekday={""}
                clicked={""}
                handleClick={undefined}
            />
            <img
                src="src/assets/close.png"
                onClick={handleClose}
                style={{
                    position: 'fixed',
                    bottom: '10px',
                    right: '10px',
                    cursor: 'pointer'
                }}
            >
            </img>
            </Box>
        </Modal>
    </div>
  );
};

export default ModalComponent;