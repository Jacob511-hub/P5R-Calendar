import React, { useState } from "react";
import ModalCustom from "./ModalCustom";
import DividerCustom from "./dividerCustom";
import * as activityDetails from '../hooks/activityDetails';
import ChoicesTable from "./ChoicesTable";

const ConfidantDetailsModal = ({ details, choices, confidants }) => {
    if (!details) {
        return null;
    }

    const confidantCurrent = activityDetails?.activityDetailsChoices?.find((item) => item.details === choices);
    const confidant = confidantCurrent ? confidants?.find((c) => c.name === confidantCurrent.name) : null;
    const rank = confidant?.rank ?? null;

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
                    <DividerCustom />
                    <h2 style = {{padding: 0, margin: 0, fontSize: '1.7em', color: '#ffffff',}}>Rank Up Event Options:</h2>
                    <ChoicesTable confidantChoices={choices} rank={rank}/>
                </ModalCustom>
            </div>
        </>
    );
};

export default ConfidantDetailsModal;