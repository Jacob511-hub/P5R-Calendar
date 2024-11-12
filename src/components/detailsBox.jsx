import React from 'react';
import AccordionCustom from './accordionCustom';

const DetailsBox = ({headerImg, details}) => {
    const displayDetails = () => {
        if (details !== "") {
            return true;
        }
    }

    return (
        <>
            {displayDetails() ? (
                <>
                    <AccordionCustom headerImg={headerImg} renderContent={() => (<h2 style = {{padding: 0, margin: 0}}>{details}</h2>)}></AccordionCustom>
                </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default DetailsBox;