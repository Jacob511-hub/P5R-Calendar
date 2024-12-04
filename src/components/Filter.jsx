import React, { useState } from "react";
import StatsFilterItem from "./StatsFilterItem";
import ModalCustom from "./ModalCustom";
import ResetButton from "./ResetButton";

const Filter = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
        <img src="src/assets/stats.png" onClick={handleOpen}
        style={{
            position: 'fixed',
            height: '70px',
            width: 'auto',
            top: '10px',
            left: '10px',
            cursor: 'pointer'
        }}></img>
        <ModalCustom
            handleClose = {handleClose}
            open = {open}
        >
            <img src="src/assets/stats.png" style={{
                width: '50%',
                height: 'auto'
            }}></img>
            <StatsFilterItem
                img="src/assets/knowledge.png"
                stat="Knowledge"
                onClick = {handleClose}
            />
            <StatsFilterItem
                img="src/assets/charm.png"
                stat="Charm"
                onClick = {handleClose}
            />
            <StatsFilterItem
                img="src/assets/proficiency.png"
                stat="Proficiency"
                onClick = {handleClose}
            />
            <StatsFilterItem
                img="src/assets/guts.png"  
                stat="Guts"
                onClick = {handleClose}
            />
            <StatsFilterItem
                img="src/assets/kindness.png"
                stat="Kindness"
                onClick = {handleClose}
            />
            <ResetButton
                onClick = {handleClose}
            />
        </ModalCustom>
    </div>
  );
};

export default Filter;