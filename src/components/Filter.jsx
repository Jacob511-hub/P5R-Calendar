import React, { useState } from "react";
import StatsFilterItem from "./StatsFilterItem";
import ModalCustom from "./ModalCustom";
import ResetButton from "./ResetButton";
import statsImage from '../assets/stats.png';
import knowledgeImage from '../assets/knowledge.png';
import charmImage from '../assets/charm.png';
import proficiencyImage from '../assets/proficiency.png';
import gutsImage from '../assets/guts.png';
import kindnessImage from '../assets/kindness.png';

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
        <img src={statsImage} onClick={handleOpen}
        style={{
            position: 'fixed',
            height: '70px',
            width: 'auto',
            top: '10px',
            left: '10px',
            cursor: 'pointer',
            zIndex: '99',
        }}></img>
        <ModalCustom
            handleClose = {handleClose}
            open = {open}
        >
            <img src={statsImage} style={{
                width: '50%',
                height: 'auto'
            }}></img>
            <StatsFilterItem
                img={knowledgeImage}
                stat="Knowledge"
                onClick = {handleClose}
            />
            <StatsFilterItem
                img={charmImage}
                stat="Charm"
                onClick = {handleClose}
            />
            <StatsFilterItem
                img={proficiencyImage}
                stat="Proficiency"
                onClick = {handleClose}
            />
            <StatsFilterItem
                img={gutsImage}
                stat="Guts"
                onClick = {handleClose}
            />
            <StatsFilterItem
                img={kindnessImage}
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