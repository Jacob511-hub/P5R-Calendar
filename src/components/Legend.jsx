import React, { useState } from "react";
import LegendItem from "./LegendItem";
import ModalCustom from "./ModalCustom";

const Legend = () => {
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
        <ModalCustom
            handleClose = {handleClose}
            open = {open}
        >
            <img src="src/assets/legend.png" style={{
                width: '70%',
                height: 'auto'
            }}></img>
            <LegendItem
                dateType={"free"}
                text={"Free Day: Both Day and Night slots are available"}
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
        </ModalCustom>
    </div>
  );
};

export default Legend;