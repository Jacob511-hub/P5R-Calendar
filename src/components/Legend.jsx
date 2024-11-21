import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import GridItem from "./gridItem";
import LegendItem from "./LegendItem";

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
            <>
                <Box sx={modalStyle}>
                    <img src="src/assets/legend.png" style={{
                        width: '70%',
                        height: 'auto'
                    }}></img>
                    <LegendItem
                        dateType={"free"}
                        text={"Free day: Both Day and Night slots are available"}
                    />
                    <LegendItem
                        dateType={"eveningOnly"}
                        text={"Evening Only: Only the Night slot is available"}
                    />
                    <LegendItem
                        dateType={"afterSchoolOnly"}
                        text={"After School Only: Only the Day slot is available"}
                    />
                    <LegendItem
                        dateType={"storyAll"}
                        text={"Story All: The entire day is unavailable due to story events"}
                    />
                    <LegendItem
                        dateType={"skip"}
                        text={"Skip: The day is skipped"}
                    />
                    <LegendItem
                        dateType={"deadline"}
                        text={"Deadline: The day is a Palace deadline"}
                    />
                    <LegendItem
                        dateType={"finale"}
                        text={"Finale: The final day"}
                    />
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
                >
                </img>
            </>
        </Modal>
    </div>
  );
};

export default ModalComponent;